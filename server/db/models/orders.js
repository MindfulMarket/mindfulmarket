const Sequelize = require('sequelize');
const db = require('../db')

const Orders = db.define('order', {
    //user is by association
    //product by association
    //date automatically created

    //Sample order {

    //productsOrdered:[{
    //productId:3,
    // quantity
    // priceAtPurchaseTime: $3.00},{},{}
    //]}
    productsOrdered: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: false
    },

    totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
}, {
    scopes: {
      populated: () => ({
        include: [{all: true}]
      })
    }
  });
module.exports = Orders;