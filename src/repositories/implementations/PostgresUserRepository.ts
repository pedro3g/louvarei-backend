import { User, PrismaClient } from '@prisma/client'
import { IUsersRepository } from '@repositories/IUsersRepository'

const client = new PrismaClient()

export class PostgresUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await client.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async save(user: User): Promise<void> {
    await client.user.create({
      data: user,
    })
  }
}
