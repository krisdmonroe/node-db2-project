
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      const cars = [
        {	
        carName:"kris1",
        Vin: "123",
        make: "123",
        model: "123",
        mileage:"123",
        transmissiontype : "123",
        titlestatus: "clean"
        },
        {	
          carName:"kris2",
          Vin: "333",
          make: "333",
          model: "333",
          mileage:"333",
          transmissiontype : "333",
          titlestatus: "clean"
          }
      ]
      return knex('cars').insert(cars);
    });
};
