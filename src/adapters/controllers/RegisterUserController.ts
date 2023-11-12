import Elysia from "elysia";
import RegisterUser from "../../core/user/services/RegisterUser";

type Request = {
  name: string;
  email: string;
  password: string;
}

export default class RegisterUserController {
  constructor(readonly server: Elysia, readonly useCase: RegisterUser) {}

  handle() {
    this.server.post('/user', async ({ body }) => {
      const { name, email, password } = body as Request;
      const users = await this.useCase.execute({ name, email, password })

      return {
        message: 'User created successfully!',
        result: users
      }
    }) 
  }
} 