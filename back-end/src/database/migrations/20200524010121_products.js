
exports.up = function(knex) {
  return knex.schema.createTable('products', function(table){
      table.string('id').primary();
      table.string('product').notNullable();
      table.string('description').notNullable();
      table.string('price').notNullable();
      table.string('photo');

    table.string('empresa_email').notNullable();
    //Criando relacionamento
    table.foreign('empresa_email').references('email').inTable('empresas');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
