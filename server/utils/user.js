
import { uid } from 'uid/secure'

class UserService {
  async subscribe(name, email, id) {
    const [subscribe_user] = await db.insert(tables.subscribe_user).values({ id: id ?? uid(), name, email }).returning()
    return subscribe_user
  }
}

export const userService = new UserService()