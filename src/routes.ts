import { Router } from 'express'
import { createUserController } from '@useCases/CreateUser'
import { userAuthenticateController } from '@useCases/UserAuthenticate'

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})
router.post('/users/authenticate', (req, res) => {
  return userAuthenticateController.handle(req, res)
})

export { router }
