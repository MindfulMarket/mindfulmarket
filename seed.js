/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('./server/db')
const { User, Brands, Products, Reviews, Causes, Categories } = require('./server/db/models')


const brands = [{
    name: 'People Tree',
    imageUrl: 'http://blog.peopletree.co.uk/wp-content/uploads/2016/06/peopletree-new-strap-black-900x176.png',
    description: 'People Tree, the fair trade fashion pioneer and online garment retailer. We make our clothes from environmentally-friendly materials including Fairtrade certified organic cotton and natural dyes and use traditional handicraft skills whenever possible.',
    category: 'clothing',
}, {
    name: 'Everlane',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Everlane_logo.png',
    description: 'At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.',
    category: 'clothing',
}, {
    name: 'Reformation',
    imageUrl: 'https://assets2.thereformation.com/assets/share-logo-6078e2f8d800869598bd7c062c9d1050.png',
    // imageUrl: './assets/logos/ReformationLogo.png',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Matt & Nat',
    imageUrl: 'https://mattandnat.com/wp-content/themes/mattandnat2014/img/logo.png',
    description: 'At Matt & Nat, we live by a simple motto, “Live beautifully”. Living beautifully means appreciating the humanity, creativity and positivity found in all of us. Our values include social responsibility, excellence, inclusiveness, integrity, learning, authenticity and, of course, love. We are inspired by the textures and hues of nature and, to better protect it, we aim to constantly better our ways.',
    category: 'clothing',
}, {
    name: 'Stella McCartney',
    imageUrl: 'http://www.winkreative.com/wp-content/uploads/2016/04/Stella_McCartney_logo_detail-1-1486x842.png',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Patagonia',
    imageUrl: 'https://fiu-assets-2-syitaetz61hl2sa.stackpathdns.com/static/use-media-items/7/6757/full-551x300/578f6a56/patagonia-logo.png?resolution=0',
    description: 'Build the best product, cause no unnecessary harm, use business to inspire and implement solutions to the environmental crisis.',
    category: 'clothing',
}, {
    name: 'Hiptico',
    imageUrl: 'https://biz.prlog.org/hiptipico/logo.jpg',
    // imageUrl: './assets/logos/HipticoLogo.jpg',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Cotopaxi',
    imageUrl: 'https://www.momentumclimbing.com/wp-content/uploads/cotopaxi-logo.png',
    // imageUrl: './assets/logos/CotopaxiLogo.jpg',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Soapbox',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1293/8895/files/SBS_LUXE_LOGO-01_205x@2x.png?v=1502375528',
    // imageUrl: './assets/logos/SoapboxLogo.png',
    description: 'fakedescription',
    category: 'cosmetics',
}, {
    name: 'SmileSquared',
    imageUrl: './assets/logos/SmileSquaredLogo.png',
    description: 'fakedescription',
    category: 'cosmetics',
}, {
    name: "Burt's Bees",
    imageUrl: 'https://image3.mouthshut.com/images/imagesp/925012063s.jpg',
    // imageUrl: './assets/logos/BurtsBeesLogo.png',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Mayfair Soap Foundry',
    imageUrl: 'http://www.mayfairsoapfoundry.com/wp-content/uploads/2015/12/footer-logo.png',
    description: 'fakedescription',
    category: 'clothing',
}];

const products = [{
    brand: 'Everlane',
    name: 'The Cashmere Crew',
    imageUrl: 'https://everlane-2.imgix.net/i/edb933ed_2ec4.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 70.88,
    brandId: 2,
    description: 'Sometimes we love a design so much that we overproduce it. We’re getting better at predicting demand, but to move overstock on selected items, we’re letting you choose what you pay. Enjoy.'
    // productURL: https://www.everlane.com/products/mens-cashmere-crew3-blackcharcoalstripe
},
{
    brand: 'Everlane',
    name: 'The Kick Crop Jean',
    imageUrl: 'https://everlane-2.imgix.net/i/6e3c1dad_9816.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 78.88,
    brandId: 2,
    description: 'Your most leg-lengthening jean. Our Kick Crop features a subtle kick-flare at the ankle and is made of our premium 11 oz Japanese denim with a touch of stretch. Plus, we added a stay stitch so the raw hem stays put through repeated washes. Magic jeans? We think so',
    // productURL: https://www.everlane.com/products/womens-kick-crop-jean-black?collection=womens-newest-arrivals
},
{
    brand: 'Everlane',
    name: 'The Chambray Slim Fit Shirt',
    imageUrl: 'https://everlane-2.imgix.net/i/42a55cec_405f.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 58.99,
    brandId: 2,
    description: 'Our slim fit shirt in clean, casual chambray. This light and comfortable cotton is classic and seasonless, so you can wear it all year—just layer appropriately.'
    // productURL: https://www.everlane.com/products/mens-slim-fit-chambray-blacksulfur?collection=mens-newest-arrivals
},
{
    brand: 'Everlane',
    name: 'The Cropped City Anorak',
    imageUrl: 'https://everlane.imgix.net/i/1dbd43b7_6d8a.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 78.99,
    brandId: 2,
    description: 'Your perfect transitional layer. This lightweight, cropped take on the anorak has a relaxed shape for easy layering, plus an extendable hood visor, snap closure, and covered pockets. We also treated it with a water-resistant finish for sleek coverage—rain or shine.'
    // productURL: https://www.everlane.com/products/womens-cropped-city-anorak-fadedsage?collection=womens-newest-arrivals
},
{
    brand: 'Patagonia',
    name: 'Long-Sleeved Lightweight Fjord Flannel Shirt',
    imageUrl: 'http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw9a27c612/images/hi-res/54020_NVNB.jpg?sw=2000&sh=2000&sm=fit&sfrm=png',
    price: 79.99,
    brandId: 6,
    description: 'A lightweight version of our classic Long-Sleeved Fjord Flannel, this trusty organic cotton midweight flannel keeps you looking presentable whether you’re meeting the higher-ups or just hitting après at the GLC.'
    // productURL: http://www.patagonia.com/product/mens-long-sleeved-lightweight-fjord-flannel-shirt/54020.html?dwvar_54020_color=ROOC&cgid=mens-new#start=1
},
{
    brand: 'Patagonia',
    name: 'Fleetwith Dress',
    imageUrl: 'http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw36cc6527/images/hi-res/58335_BLK_OM1.jpg?sw=2000&sh=2000&sm=fit&sfrm=png',
    price: 75.98,
    brandId: 6,
    description: 'The Fleetwith Dress was built for hiking, traveling and general getting out and about. Made from a 91% recycled polyester/9% spandex blend that’s quick-drying and resists wrinkling.'
    // productURL: http://www.patagonia.com/product/womens-fleetwith-dress/58335.html?dwvar_58335_color=PST&cgid=womens-dresses-skirts#start=1
},
 {   brand: 'Matt & Natt',
    name: 'Baxter bag',
    imageUrl: 'http://mattandnat.com/shop/media/catalog/product/cache/11/image/545x/040ec09b1e35df139433887a97daa66f/s/s/ss18-dwell-baxter-ruby-1.jpg',
    price: 145.99,
    brandId: 4,
    description: 'DWELL COLLECTION Tote that can be worn crossbody with removable and adjustable strap. Secured magnetic snap closure and back slit pocket.'
    // productURL: http://mattandnat.com/shop/collections/dwell/baxter-ink
 }
]

const reviews = [{
    title: 'My new favorite shirt',
    rating: 5.0,
    content: 'I love this product',
    productId: 1
},
{
    title: 'My new favorite uncle',
    rating: 2.0,
    content: 'I love this product',
    productId: 2

},
{
    title: 'My new favorite color',
    rating: 3.0,
    content: 'I love this product',
    productId: 3

},
{
    title: 'My new favorite thing',
    rating: 4.0,
    content: 'I love this product',
    productId: 4

},
{
    title: 'My new favorite world',
    rating: 2.0,
    content: 'I love this product!!!',
    productId: 1

},
{
    title: 'My new favorite chalk',
    rating: 1.0,
    content: 'I love this product!!!',
    productId: 2

}

]

const categories = [{
    name: 'Cleaning Supplies',
    description: 'Use these things to clean stuff'
},
{
    name: 'Cleaning Supplies',
    description: 'Use these things to clean stuff'
},
{
    name: 'Clothing',
    description: 'Wear em'
},
{
    name: 'Personal Hygeine',
    description: 'Use these to scrub yoself'
},
{
    name: 'Shoes',
    description: 'Use these things to cover your feet'
},
{
    name: 'Toys',
    description: 'Use these things to play'
}
]


const causes = [

    {
        name: 'Stop homelessness',
        imageUrl: 'fillMeIn',
        description: 'Help imporve situation of homeless people around the world'
    },
    {
        name: 'Stop deforestation',
        imageUrl: 'fillMeIn',
        description: 'Help imporve situation of trees around the world'
    },
    {
        name: 'Use less water',
        imageUrl: 'fillMeIn',
        description: 'Help imporve situation of water around the world'
    },
    {
        name: 'Stop animal cruelty',
        imageUrl: 'fillMeIn',
        description: 'Bear rugs are out'
    },
    {
        name: 'Stop chemical pollution',
        imageUrl: 'fillMeIn',
        description: 'that river smells weird'
    }
]


async function seed() {
    await db.sync({ force: true })
    console.log('db synced!')
    // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
    // executed until that promise resolves!

    const users = await Promise.all([
        User.create({ email: 'cody@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Cody', lastName: 'Bowers' }),
        // User.create({ email: 'murphy@email.com', password: '123' }),
    ])
    // Wowzers! We can even `await` on the right-hand side of the assignment operator
    // and store the result that the promise resolves to in a variable! This is nice!
    console.log(`seeded ${users.length} users`)

    const allBrands = await Promise.all(
        brands.map(brand => Brands.create(brand)),
    )
    console.log(`seeded ${allBrands.length} brands`)

    const allProducts = await Promise.all(
        products.map(product => Products.create(product)),
    )
    console.log(`seeded ${allProducts.length} products`)

    const allReviews = await Promise.all(
        reviews.map(review => Reviews.create(review)),
    )
    console.log(`seeded ${allReviews.length} reviews`)

    const allCauses = await Promise.all(
        causes.map(cause => Causes.create(cause)),
    )
    console.log(`seeded ${allCauses.length} causes`)

    const allCategories = await Promise.all(
        categories.map(category => Categories.create(category)),
    )
    console.log(`seeded ${allCategories.length} cats`)

    console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
    .catch(err => {
        console.error(err.message)
        console.error(err.stack)
        process.exitCode = 1
    })
    .then(() => {
        console.log('closing db connection')
        db.close()
        console.log('db connection closed')
    })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
