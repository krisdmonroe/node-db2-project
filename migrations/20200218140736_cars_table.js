
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("CarName", 256)
    .notNullable()
    .index();

    tbl.string("vin", 256);
    tbl.string("make", 256);
    tbl.string("model", 256)
    tbl.string("mileage", 256)
    tbl.string("transmissiontype", 256)
    tbl.string("titlestatus", 256)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
