import fs from "fs";
import { User, UserRepository } from "../interfaces/user.interface";

const filePath = "./data/users.json";

interface DB {
  users: User[];
  metrics: Record<number, { lastLogin: string | null; totalLogins: number }>;
}

const loadDB = (): DB => JSON.parse(fs.readFileSync(filePath, "utf8"));

const saveDB = (db: DB) =>
  fs.writeFileSync(filePath, JSON.stringify(db, null, 2));

export class JsonUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const db = loadDB();
    return db.users.find((u) => u.email === email) || null;
  }

  async findById(id: number): Promise<User | null> {
    const db = loadDB();
    return db.users.find((u) => u.id === id) || null;
  }

  async create(user: User): Promise<void> {
    const db = loadDB();
    db.users.push(user);
    db.metrics[user.id] = { lastLogin: null, totalLogins: 0 };
    saveDB(db);
  }

  async updateMetrics(userId: number): Promise<void> {
    const db = loadDB();
    db.metrics[userId].lastLogin = new Date().toISOString();
    db.metrics[userId].totalLogins++;
    saveDB(db);
  }
}
