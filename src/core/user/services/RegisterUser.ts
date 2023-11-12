import { hash } from "bun";
import UseCase from "../../shared/UseCase";
import UserRepository from "../repositories/UserRepository";

type Entry = {
  name: string;
  email: string;
  password: string;
}

type Response = {
  id?: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date; 
}

export default class RegisterUser implements UseCase<Entry, Response> {
  constructor(private readonly repository: UserRepository) {}
  
  async execute(data: Entry): Promise<Response> {
    const { name, email, password } = data;

    const userAlreadyExist = await this.repository.findByEmail(email);
    
    if (userAlreadyExist) {
      throw new Error('This email already exists!')
    }

    const passwordHash = hash(password, 8);

    const user = await this.repository.create({ name, email, password: String(passwordHash) });

    return { 
      id: user.id, 
      name: user.name, 
      email: user.email, 
      createdAt: user.createdAt, 
      updatedAt: user.updatedAt 
    }

  }
}