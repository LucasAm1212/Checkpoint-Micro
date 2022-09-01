'use strict'

const express = require('express')

const router = new express.Router();

//endpoint 
router.get('/', (req, res, next) => {
    res.status(200).send({
        "Categorias" :"Linho, Napa, Suede"
    });
});

module.exports = router;