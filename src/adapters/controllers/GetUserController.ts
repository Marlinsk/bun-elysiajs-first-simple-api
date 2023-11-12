import Elysia from "elysia";
import GetUser from "../../core/user/services/GetUser";

export default class GetUserController {
  constructor(readonly server: Elysia, readonly useCase: GetUser) {}

  handle() {
    this.server.get('/user/:id', async (context) => {
      const { id } = context.params;
      const userFinded = await this.useCase.execute(id);

      return {
        body: {
          message: 'User finded successfully!',
          result: userFinded
        }
      }
    })
  }
}