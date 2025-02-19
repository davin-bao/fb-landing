
export default defineEventHandler(async (event) => {
  const { context: { params } } = event
  console.log(params)

  const subscribeUser = await userService.subscribe(params.user, params.email)
  if (!subscribeUser) return reply(event, false)

  return replySuccess(event, {
    data: { id: subscribeUser.id }})
})

function reply(event, success, data = {}, code = 200, msg = '') {
  setResponseStatus(event, code)
  return { success: false, msg }
}

function replySuccess(event, data = {}) {
  setResponseStatus(event, 200)
  return { success: true, msg: 'success', data }
}