const User = require('./user');
const Products = require('./products');
//const Services = require('./services');
//const Brands = require('./brands');
 const Causes = require('./causes');
//const Orders = require('./orders');
//const Reviews = require('./reviews');

const PaymentInfo = require('./payment');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 *
 */

//Reviews.belongsTo(Products);
//Reviews.belongsTo(Services);
//Reviews.belongsTo(User);

//Brands.belongsToMany(Products, { through: "ProductBrands" });
//Brands.belongsToMany(Services, { through: "ServiceBrands" });

// Causes.belongsToMany(Products);
// Causes.belongsToMany(Services);
// Causes.belongsToMany(Brands);

//Orders.belongsTo(User);


module.exports = {
    User,
    Products,
    Services,
}
