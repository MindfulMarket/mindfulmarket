const Sequelize = require('sequelize');
const db = require('../index.js')

const Order = db.define('order', {
//user is by association
//product by association
//date automatically created

//Sample order {

//productsOrdered:[{
  //productId:3,
 // praceAtPurchaseTime: $3.00},{},{}
//]}
  productsOrdered: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },

  totalPrice:{
    type:Sequelize.FLOAT,
    allowNull: false
  }

});
module.exports = Order;
