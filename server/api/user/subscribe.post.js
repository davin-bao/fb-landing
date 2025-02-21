
import { z } from 'zod'

const userSchema = z.object({
  email: z.string({ description: 'Email required' }).email('Invalid email'),
  name: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  const u = await readValidatedBody(event, userSchema.safeParse)
  if (!u.success) return replyError(event, u.error?.name ?? "", u.error?.issues)
  const { email, name } = u.data
  try {
    const subscribeUser = await userService.subscribe(name, email)
    return replySuccess(event, { id: subscribeUser.id })
  } catch (error) {
    console.error(error)
    if (error.message.includes('subscribe_user_email_unique')) return replyError(event, 'email_exists')
    return replyError(event, 'internal server error', 500)
  }
})

function replyError(event, message = '', data, status = 400) {
  setResponseStatus(event, status)
  return { message, data }
}

function replySuccess(event, data = {}) {
  setResponseStatus(event, 200)
  return { message: 'success', data }
}