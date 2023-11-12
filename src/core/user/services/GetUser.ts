import UseCase from "../../shared/UseCase";
import User from "../model/User";
import UserRepository from "../repositories/UserRepository";

export default class GetUser implements UseCase<string, User | null> {
  constructor(private readonly repository: UserRepository) {}
  
  async execute(id: string): Promise<User | null> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('Not found');
    }

    return user;
  }
}