import { pool } from "../database/mysql";
import { User, UserRepository } from "../interfaces/user.interface";

export class MysqlUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const [rows]: any = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    return rows[0] || null;
  }

  async findById(id: number): Promise<User | null> {
    const [rows]: any = await pool.query("SELECT * FROM users WHERE id = ?", [
      id,
    ]);

    return rows[0] || null;
  }

  async create(user: User): Promise<void> {
    await pool.query(
      "INSERT INTO users (id, email, password) VALUES (?, ?, ?)",
      [user.id, user.email, user.password]
    );
  }
}
