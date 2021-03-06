import { User } from '@prisma/client'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>
  save(user: User): Promise<void>
}
