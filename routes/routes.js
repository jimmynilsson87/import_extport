const routes = require('express').Router();
const db = require('../database/db');

routes.get('/products', async (req, res) => {
    try {
        const products = await db.getProducts();
        return res.json(products);
    } catch (error) {
        console.log(error);
    }
});

module.exports = routes;