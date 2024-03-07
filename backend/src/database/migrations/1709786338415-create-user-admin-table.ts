import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserAdminTable1709786338415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_admin',
        columns: [
          {
            name: 'admin_id',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'hotel_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'varchar',
            length: '10',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_admin');
  }
}
