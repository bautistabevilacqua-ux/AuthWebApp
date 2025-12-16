export interface User {
  id: number;
  email: string;
  password: string;
}

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: number): Promise<User | null>;
  create(user: User): Promise<void>;
}
