
exports.up = function(knex) {
  return knex.schema.creatleTable("cars", tbl => {
    tbl.increments()
    tbl.string("CarName", 256)
    .noNullable()
    .index()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
