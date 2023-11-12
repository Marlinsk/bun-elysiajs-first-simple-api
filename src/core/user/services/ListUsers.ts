import UserRepository from "../repositories/UserRepository";

type Profile = {
  id?: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date; 
}

type Response = {
  users: Profile[]
}

export default class ListUsers {
  constructor(private readonly repository: UserRepository) {}

  async execute(): Promise<Response> {
    const users = await this.repository.findAll();

    const userListhandled = users.map(data => { 
      const { password, ...userData } = data;
      return userData
    }) 

    return { users: userListhandled }
  }
}