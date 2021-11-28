import { Token } from '@utils/Token'
import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    try {
      if (!name || !email || !password) {
        throw new Error(
          'Existem campos obrigatórios que não foram preenchidos.'
        )
      }

      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      })

      return res.json({
        message: 'Usuário registrado com sucesso!',
        token: new Token().create({ id: user.id }),
      })
    } catch (err) {
      return res.status(400).json({
        message: (err as Error).message || 'Erro desconhecido.',
      })
    }
  }
}
