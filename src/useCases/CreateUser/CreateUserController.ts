import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    try {
      await this.createUserUseCase.execute({ name, email, password })

      return res
        .status(200)
        .json({ message: 'Usuário registrado com sucesso!' })
    } catch (err) {
      return res.status(400).json({
        message: (err as Error).message || 'Erro desconhecido.',
      })
    }
  }
}
