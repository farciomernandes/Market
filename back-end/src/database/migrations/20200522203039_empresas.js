exports.up = function(knex) {
  return knex.schema.createTable('empresas', function(table){
       table.string('email').primary();
       table.string('senha').notNullable();
       table.string('empresa').notNullable();
       table.string('description').notNullable();
       table.string('city').notNullable();
       table.string('uf').notNullable();
       table.string('whatsapp').notNullable();
       table.string('photo');
})
 
};
 
 exports.down = function(knex) {
   return knex.schema.dropTable('empresas');
 };
 