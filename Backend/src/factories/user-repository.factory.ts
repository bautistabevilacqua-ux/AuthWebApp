import { JsonUserRepository } from "../repositories/json-user.repository";
import { MysqlUserRepository } from "../repositories/mysql-user.repository";
import { UserRepository } from "../interfaces/user.interface";
import { envs } from "../config/envs";

export const userRepositoryFactory = (): UserRepository => {
  if (envs.DB_PROVIDER === "mysql") {
    return new MysqlUserRepository();
  }

  return new JsonUserRepository();
};
