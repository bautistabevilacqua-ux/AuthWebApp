import { User } from "./user.interface";

export interface DB {
  users: User[];
  metrics: Record<number, { lastLogin: string | null; totalLogins: number }>;
}
