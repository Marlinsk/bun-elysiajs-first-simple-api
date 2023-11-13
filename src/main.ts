import { Elysia } from "elysia";
import FakeUserRepository from "./external/fakes/FakeUserRepository";
import RegisterUser from "./core/user/services/RegisterUser";
import RegisterUserController from "./adapters/controllers/RegisterUserController";
import GetUserController from "./adapters/controllers/GetUserController";
import GetUser from "./core/user/services/GetUser";
import ListUsers from "./core/user/services/ListUsers";
import ListUsersController from "./adapters/controllers/ListUsersController";

const app = new Elysia()

const fakeUserRepository = new FakeUserRepository();

const registerUser = new RegisterUser(fakeUserRepository);
const listUsers = new ListUsers(fakeUserRepository);
const getUser = new GetUser(fakeUserRepository);

new RegisterUserController(app, registerUser).handle();
new ListUsersController(app, listUsers).handle();
new GetUserController(app, getUser).handle();

app.get('/', () => 'Hello world').listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
