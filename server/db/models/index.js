const User = require('./user');
const Products = require('./products');
const Services = require('./services');
const Brands = require('./brands');
const Causes = require('./causes');
const Orders = require('./orders');
const Reviews = require('./reviews');
const Categories = require('./categories')

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

 //User associations
 User.hasMany(Orders, {as: 'orders'})

//Brands associations
Brands.hasMany(Products, { as: "Products" });
Brands.hasMany(Services, { as: "Services" });
Brands.hasMany(Causes, { as: "Causes" });

//Reviews associations
Reviews.belongsTo(Products);
Reviews.belongsTo(Services);
Reviews.belongsTo(User);

//Products associations
Products.belongsTo(Brands);
Products.belongsToMany(Causes,{through: 'ProductCauses'});
Products.belongsToMany(Categories,{ through: 'ProductCategories' });
Products.hasMany(Reviews,{as: 'Reviews'})

//Services associations
Services.belongsTo(Brands, { through: 'ServiceBrands' });
Services.belongsToMany(Causes, { through: 'ServiceCauses' });
Services.belongsToMany(Categories,{ through: 'ServiceCategories' });

//Causes associations
Causes.belongsToMany(Products,{ through: 'ProductCauses' });
Causes.belongsToMany(Services,{ through: 'ServiceCauses' });
Causes.belongsToMany(Brands,{ through: 'BrandCauses' });

//Categories associations
Categories.belongsToMany(Products);
Categories.belongsToMany(Services);
Categories.belongsToMany(Brands);

module.exports = {
    User,
    Products,
    Services,
    Orders,
    Categories,
    Causes,
    Brands
}