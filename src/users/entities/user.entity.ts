import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  email: string;

  @Property({ unique: true })
  username: string;

  @Property()
  password: string;
}
