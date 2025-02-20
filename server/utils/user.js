
import { uid } from 'uid/secure'

class UserService {
  async subscribe(name, email, id) {
    const [user] = await db.insert(tables.user).values({ id: id ?? uid(), name, email }).returning()
    return user
  }
}

export const userService = new UserService()