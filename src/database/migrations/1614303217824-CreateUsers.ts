import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614303217824 implements MigrationInterface {
    // tem a finalidade de criar a tabela
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "users",
            columns: [
                {
                    name : "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "email",
                    type : "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
          }));
    }

    // tem a finalidade de deletar a tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
