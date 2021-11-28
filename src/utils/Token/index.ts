import { sign } from 'jsonwebtoken'
import { ITokenDTO } from './TokenDTO'

export class Token {
  create(data: ITokenDTO): string {
    return sign(data, process.env.JWT_KEY)
  }
}
