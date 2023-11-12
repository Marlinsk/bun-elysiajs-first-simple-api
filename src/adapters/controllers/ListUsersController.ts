import Elysia from "elysia";
import ListUsers from "../../core/user/services/ListUsers";

export default class ListUsersController {
  constructor(readonly server: Elysia, readonly useCase: ListUsers) {}

  handle() {
    this.server.get('/user', async () => {
      const users = await this.useCase.execute();

      return {
        results: users
      }
    })
  }
}