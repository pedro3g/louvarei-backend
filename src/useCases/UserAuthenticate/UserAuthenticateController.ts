import { Token } from '@utils/Token'
import { Request, Response } from 'express'
import { UserAuthenticateUseCase } from './UserAuthenticateUseCase'
export class UserAuthenticateController {
  constructor(private userAuthenticateUseCase: UserAuthenticateUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    try {
      if (!email || !password) {
        throw new Error(
          'Existem campos obrigatórios que não foram preenchidos.'
        )
      }

      const user = await this.userAuthenticateUseCase.execute({
        email,
        password,
      })

      return res.json({
        message: 'Usuário validado',
        token: new Token().create({ id: user.id }),
      })
    } catch (err) {
      return res.status(400).json({
        message: (err as Error).message || 'Erro desconhecido.',
      })
    }
  }
}
