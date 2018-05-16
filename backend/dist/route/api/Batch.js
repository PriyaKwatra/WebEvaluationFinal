"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const route = express_1.Router();
//get all batches
route.get('/', (req, res) => {
    console.log("ok getting");
    db_1.Batch.findAll()
        .then((batches) => {
        res.send(batches);
    });
});
route.post('/', (req, res) => {
    console.log("ok getting");
    db_1.Batch.create({
        batchname: req.body.batchname,
    }).then((batch) => {
        res.status(201).send(batch);
    });
});
exports.default = route;
