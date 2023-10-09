import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { generateHash } from '../auth/password';
import { User } from '../users/entities/user.entity';

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const password = await generateHash('password');
    em.create(User, {
      email: 'test@admin.com',
      username: 'TestUser',
      password,
    });
  }
}
