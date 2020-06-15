import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('body').notNullable();
        table.integer('userId').notNullable()
        .references('id')
        .inTable('users');

    });
}

export async function down(knex:Knex){
    return knex.schema.dropTable('posts');
}