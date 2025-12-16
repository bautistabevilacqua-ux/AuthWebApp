import { User } from "../interfaces/user.interface";
import { userRepositoryFactory } from "../factories/user-repository.factory";
const repo = userRepositoryFactory();

export const UserService = {
  findByEmail: async (email: string) => repo.findByEmail(email),
  findById: async (id: number) => repo.findById(id),
  create: async (user: User) => repo.create(user),
};
