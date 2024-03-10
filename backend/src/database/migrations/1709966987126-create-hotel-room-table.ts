import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateHotelRoomTable1709966987126 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hotel_room',
        columns: [
          {
            name: 'room_id',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'hotel_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'room_type',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hotel_room');
  }
}
