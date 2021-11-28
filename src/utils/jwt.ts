import { sign } from 'jsonwebtoken'

interface ITokenData {
  id: string
}

export const generateToken = (data: ITokenData) => {
  return sign(data, process.env.JWT_KEY)
}
