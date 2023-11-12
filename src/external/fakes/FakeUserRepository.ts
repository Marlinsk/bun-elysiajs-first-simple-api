import { randomUUID } from "crypto";
import User from "../../core/user/model/User";
import UserRepository from "../../core/user/repositories/UserRepository";

export default class FakeUserRepository implements UserRepository {
  private readonly users: User[] = [];
  
  async findAll(): Promise<User[]> {
    return this.users;
  }
  
  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) ?? null;
  }

  async create(data: User): Promise<User> {
    const newUser = { id: randomUUID(), createdAt: new Date(), updatedAt: new Date(), ...data }
    this.users.push(newUser)
    return newUser
  }
}