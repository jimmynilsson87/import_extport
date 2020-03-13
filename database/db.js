const sqlite = require('sqlite');
const Promise = require('bluebird');

const dbCon = sqlite.open('./database/testdb.db', { Promise });

const getProducts = async () => {
    try {
        const sqlQuery = 'SELECT id, name FROM products';
        const db = await dbCon;

        const products = db.all(sqlQuery);
        return products;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts: getProducts
}