import { v4 } from 'uuid'
import { hashSync } from 'bcrypt'

export class User {
  public readonly id: string

  public name: string
  public email: string
  public password: string

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.name = props.name
    this.email = props.email
    this.password = hashSync(props.password, 10)

    if (!id) {
      this.id = v4()
    } else {
      this.id = id
    }
  }
}
