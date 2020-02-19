const express = require('express');
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3'
  },
  useNullAsDefault: true
});

const router = express.Router();


router.get("/", (req, res) => {
    db("*")
    .from("cars")
    .then(car => {
        res.status(200).json(car)
    }).catch(err => {
        console.log(err)
        res.status(500).json({error: "You shall not get list of cars"})
    })
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    db("cars")
    .where({id})
    .first()
    .then(account => {
        res.status(200).json(account)
    }).catch(err => {
        console.log(err)
        res.status(500).json({error: "You shall not pass ID"})
    })
});

router.post("/", (req, res) => {
    db("cars").insert(req.body, "id")
    .then(ids => {
        res.status(201).json(ids)
    }).catch(err => {
        console.log(err)
        res.status(500).json({error: "You shall not make a new car"})
    })
});

router.put("/:id", (req, res) => {
const id = req.params.id;
  const changes = req.body;
    db("cars")
    .where({ id })
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    }).catch(err => {
        console.log(err)
        res.status(500).json({error: "You shall not update your car"})
    })
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    db("cars")
    .where({ id })
    .del()
    .then(count => {
        res.status(200).json(count)
    }).catch(err => {
        console.log(err)
        res.status(500).json({error: "You shall not delete"})
    })
});

module.exports = router;