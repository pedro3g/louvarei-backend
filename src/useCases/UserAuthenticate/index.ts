import { PostgresUserRepository } from '@repositories/implementations/PostgresUserRepository'
import { UserAuthenticateController } from './UserAuthenticateController'
import { UserAuthenticateUseCase } from './UserAuthenticateUseCase'

const postgresUsersRepository = new PostgresUserRepository()

const userAuthenticateUseCase = new UserAuthenticateUseCase(
  postgresUsersRepository
)

const userAuthenticateController = new UserAuthenticateController(
  userAuthenticateUseCase
)

export { userAuthenticateUseCase, userAuthenticateController }
