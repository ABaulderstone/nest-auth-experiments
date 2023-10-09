import { Migration } from '@mikro-orm/migrations';

export class Migration20231009045616 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `users` (`id` int unsigned not null auto_increment primary key, `email` varchar(255) not null, `username` varchar(255) not null, `password` varchar(255) not null) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `users` add unique `users_email_unique`(`email`);',
    );
    this.addSql(
      'alter table `users` add unique `users_username_unique`(`username`);',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table `users`');
  }
}
