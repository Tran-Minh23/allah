import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateHotelTable1709710059309 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hotel',
        columns: [
          {
            name: 'hotel_id',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'bg_image',
            type: 'text',
          },
          {
            name: 'images',
            type: 'text',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hotel');
  }
}
