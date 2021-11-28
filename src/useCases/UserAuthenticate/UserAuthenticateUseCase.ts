import { IUsersRepository } from '@repositories/IUsersRepository'
import { IUserAuthenticateDTO } from './UserAuthenticateDTO'
import { compareSync } from 'bcrypt'

export class UserAuthenticateUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(data: IUserAuthenticateDTO) {
    const user = await this.userRepository.findByEmail(data.email)

    if (!user) {
      throw new Error('Nenhum usuário encontrado com o email informado.')
    }

    if (!compareSync(data.password, user.password)) {
      throw new Error('A senha informada não é válida.')
    }

    return user
  }
}
