import User from "../model/User";

export default interface UserRepository {
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: User): Promise<User>;
}