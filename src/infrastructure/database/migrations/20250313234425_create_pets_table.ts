import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('pets', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age');
    table.string('species');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('pets');
}
