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
const { User, Brands, Products } = require('./server/db/models')


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

const brands = [{
    name: 'People Tree',
    imageUrl: './public/assets/logos/PeopleTreeLogo.png',
    description: '',
    category: 'clothing',
}, {
    name: 'Everlane',
    imageUrl: './public/assets/logos/EverlaneLogo.png',
    description: '',
    category: 'clothing',
}, {
    name: 'Reformation',
    imageUrl: './public/assets/logos/ReformationLogo.png',
    description: '',
    category: 'clothing',
}, {
    name: 'Matt & Nat',
    imageUrl: './public/assets/logos/Matt&NatLogo.png',
    description: '',
    category: 'clothing',
}, {
    name: 'Stella McCartney',
    imageUrl: './public/assets/logos/StellMcCartneyLogo.png',
    description: '',
    category: 'clothing',
}, {
    name: 'Patagonia',
    imageUrl: './public/assets/logos/PatagoniaLogo.jpeg',
    description: '',
    category: 'clothing',
}, {
    name: 'Hiptico',
    imageUrl: './public/assets/logos/HipticoLogo.jpg',
    description: '',
    category: 'clothing',
}, {
    name: 'Cotopaxi',
    imageUrl: './public/assets/logos/CotopaxiLogo.jpg',
    description: '',
    category: 'clothing',
}, {
    name: 'Soapbox',
    imageUrl: './public/assets/logos/SoapboxLogo.png',
    description: '',
    category: 'cosmetics',
}, {
    name: 'SmileSquared',
    imageUrl: './public/assets/logos/SmileSquaredLogo.png',
    description: '',
    category: 'cosmetics',
}, {
    name: "Burt's Bees",
    imageUrl: './public/assets/logos/BurtsBeesLogo.png',
    description: '',
    category: 'clothing',
}, {
    name: 'Mayfair Soap Foundry',
    imageUrl: './public/assets/logos/MayfairSoapFoundryLogo.png',
    description: '',
    category: 'clothing',
}];

const products = [{
        brand: 'Everlane',
        name: 'The Cashmere Crew',
        imageUrl: 'https://everlane-2.imgix.net/i/edb933ed_2ec4.jpg?dpr=1&w=1200&h=1200&q=65',
        price: 70,
        description: 'Sometimes we love a design so much that we overproduce it. We’re getting better at predicting demand, but to move overstock on selected items, we’re letting you choose what you pay. Enjoy.'
            // productURL: https://www.everlane.com/products/mens-cashmere-crew3-blackcharcoalstripe
    },
    {
        brand: 'Everlane',
        name: 'The Kick Crop Jean',
        imageUrl: 'https://everlane-2.imgix.net/i/6e3c1dad_9816.jpg?dpr=1&w=1200&h=1200&q=65',
        price: 78,
        description: 'Your most leg-lengthening jean. Our Kick Crop features a subtle kick-flare at the ankle and is made of our premium 11 oz Japanese denim with a touch of stretch. Plus, we added a stay stitch so the raw hem stays put through repeated washes. Magic jeans? We think so',
        // productURL: https://www.everlane.com/products/womens-kick-crop-jean-black?collection=womens-newest-arrivals
    },
    {
        brand: 'Everlane',
        name: 'The Chambray Slim Fit Shirt',
        imageUrl: 'https://everlane-2.imgix.net/i/42a55cec_405f.jpg?dpr=1&w=1200&h=1200&q=65',
        price: 58,
        description: 'Our slim fit shirt in clean, casual chambray. This light and comfortable cotton is classic and seasonless, so you can wear it all year—just layer appropriately.'
            // productURL: https://www.everlane.com/products/mens-slim-fit-chambray-blacksulfur?collection=mens-newest-arrivals
    },
    {
        brand: 'Everlane',
        name: 'The Cropped City Anorak',
        imageUrl: 'https://everlane.imgix.net/i/1dbd43b7_6d8a.jpg?dpr=1&w=1200&h=1200&q=65',
        price: 78,
        description: 'Your perfect transitional layer. This lightweight, cropped take on the anorak has a relaxed shape for easy layering, plus an extendable hood visor, snap closure, and covered pockets. We also treated it with a water-resistant finish for sleek coverage—rain or shine.'
            // productURL: https://www.everlane.com/products/womens-cropped-city-anorak-fadedsage?collection=womens-newest-arrivals
    }
]