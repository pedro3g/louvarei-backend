import { MailTrapMailProvider } from 'providers/implementations/MailtrapMailProvider'
import { PostgresUserRepository } from 'repositories/implementations/PostgresUserRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailtrapProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
