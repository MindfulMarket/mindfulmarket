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
    causeId: 1,
    imageUrl: 'http://blog.peopletree.co.uk/wp-content/uploads/2016/06/peopletree-new-strap-black-900x176.png',
    description: 'People Tree, the fair trade fashion pioneer and online garment retailer. We make our clothes from environmentally-friendly materials including Fairtrade certified organic cotton and natural dyes and use traditional handicraft skills whenever possible.',
    category: 'clothing',
}, {
    name: 'Everlane',
    causeId: 2,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Everlane_logo.png',
    description: 'At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.',
    category: 'clothing',
}, {
    name: 'Reformation',
    causeId: 3,
    imageUrl: 'https://assets2.thereformation.com/assets/share-logo-6078e2f8d800869598bd7c062c9d1050.png',
    // imageUrl: './assets/logos/ReformationLogo.png',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Matt & Nat',
    causeId: 4,
    imageUrl: 'https://mattandnat.com/wp-content/themes/mattandnat2014/img/logo.png',
    description: 'At Matt & Nat, we live by a simple motto, “Live beautifully”. Living beautifully means appreciating the humanity, creativity and positivity found in all of us. Our values include social responsibility, excellence, inclusiveness, integrity, learning, authenticity and, of course, love. We are inspired by the textures and hues of nature and, to better protect it, we aim to constantly better our ways.',
    category: 'clothing',
}, {
    name: 'Stella McCartney',
    causeId: 5,
    imageUrl: 'http://www.winkreative.com/wp-content/uploads/2016/04/Stella_McCartney_logo_detail-1-1486x842.png',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Patagonia',
    causeId: 4,
    imageUrl: 'https://fiu-assets-2-syitaetz61hl2sa.stackpathdns.com/static/use-media-items/7/6757/full-551x300/578f6a56/patagonia-logo.png?resolution=0',
    description: 'Build the best product, cause no unnecessary harm, use business to inspire and implement solutions to the environmental crisis.',
    category: 'clothing',
}, {
    name: 'Hiptico',
    causeId: 4,
    imageUrl: 'https://biz.prlog.org/hiptipico/logo.jpg',
    // imageUrl: './assets/logos/HipticoLogo.jpg',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Cotopaxi',
    causeId: 1,
    imageUrl: 'https://www.momentumclimbing.com/wp-content/uploads/cotopaxi-logo.png',
    // imageUrl: './assets/logos/CotopaxiLogo.jpg',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Soapbox',
    causeId: 3,
    imageUrl: 'https://cdn.shopify.com/s/files/1/1293/8895/files/SBS_LUXE_LOGO-01_205x@2x.png?v=1502375528',
    // imageUrl: './assets/logos/SoapboxLogo.png',
    description: 'fakedescription',
    category: 'cosmetics',
}, {
    name: 'ARBONNE',
    causeId: 1,
    imageUrl: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/072013/arbonne_international.png?itok=Okf96CK8',
    description: 'It’s not just what we put in our products that makes them superior. It’s what we choose to formulate without. We integrate the most beneficial botanical ingredients from nature with the principles of green chemistry — we craft products with integrity, expertise and innovation. And we do it responsibly, taking care of our earth at the same time.',
    category: 'cosmetics',
}, {
    name: "Burt's Bees",
    causeId: 3,
    imageUrl: 'https://image3.mouthshut.com/images/imagesp/925012063s.jpg',
    // imageUrl: './assets/logos/BurtsBeesLogo.png',
    description: 'fakedescription',
    category: 'clothing',
}, {
    name: 'Mayfair Soap Foundry',
    causeId: 4,
    imageUrl: 'http://www.mayfairsoapfoundry.com/wp-content/uploads/2015/12/footer-logo.png',
    description: 'fakedescription',
    category: 'clothing',
}];

const products = brandList => [{
    brandId: brandList.Everlane.id,
    categoryId: 1,
    causeId: 2,
    name: 'The Cashmere Crew',
    imageUrl: 'https://everlane-2.imgix.net/i/edb933ed_2ec4.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 70.98,
    // id: 1,
    description: 'Sometimes we love a design so much that we overproduce it. We’re getting better at predicting demand, but to move overstock on selected items, we’re letting you choose what you pay. Enjoy.'
    // productURL: https://www.everlane.com/products/mens-cashmere-crew3-blackcharcoalstripe
},
{
    brandId: brandList.Everlane.id,
    categoryId: 1,
    causeId: 2,
    name: 'The Kick Crop Jean',
    imageUrl: 'https://everlane-2.imgix.net/i/6e3c1dad_9816.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 78.98,
    description: 'Your most leg-lengthening jean. Our Kick Crop features a subtle kick-flare at the ankle and is made of our premium 11 oz Japanese denim with a touch of stretch. Plus, we added a stay stitch so the raw hem stays put through repeated washes. Magic jeans? We think so',
    // productURL: https://www.everlane.com/products/womens-kick-crop-jean-black?collection=womens-newest-arrivals
},
{
    brandId: brandList.Everlane.id,
    categoryId: 2,
    causeId: 2,
    name: 'The Chambray Slim Fit Shirt',
    imageUrl: 'https://everlane-2.imgix.net/i/42a55cec_405f.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 58.98,
    description: 'Our slim fit shirt in clean, casual chambray. This light and comfortable cotton is classic and seasonless, so you can wear it all year—just layer appropriately.'
    // productURL: https://www.everlane.com/products/mens-slim-fit-chambray-blacksulfur?collection=mens-newest-arrivals
},
{
    brandId: brandList.Everlane.id,
    categoryId: 1,
    causeId: 2,
    name: 'The Cropped City Anorak',
    imageUrl: 'https://everlane.imgix.net/i/1dbd43b7_6d8a.jpg?dpr=1&w=1200&h=1200&q=65',
    price: 78.98,
    description: 'Your perfect transitional layer. This lightweight, cropped take on the anorak has a relaxed shape for easy layering, plus an extendable hood visor, snap closure, and covered pockets. We also treated it with a water-resistant finish for sleek coverage—rain or shine.'
    // productURL: https://www.everlane.com/products/womens-cropped-city-anorak-fadedsage?collection=womens-newest-arrivals
},
{
    brandId: brandList.Patagonia.id,
    categoryId: 3,
    causeId: 3,
    name: 'Long-Sleeved Lightweight Fjord Flannel Shirt',
    imageUrl: 'http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw9a27c612/images/hi-res/54020_NVNB.jpg?sw=2000&sh=2000&sm=fit&sfrm=png',
    price: 79.95,
    // brandId: 6,
    description: 'A lightweight version of our classic Long-Sleeved Fjord Flannel, this trusty organic cotton midweight flannel keeps you looking presentable whether you’re meeting the higher-ups or just hitting après at the GLC.'
    // productURL: http://www.patagonia.com/product/mens-long-sleeved-lightweight-fjord-flannel-shirt/54020.html?dwvar_54020_color=ROOC&cgid=mens-new#start=1
},
{
    brandId: brandList.Patagonia.id,
    categoryId: 4,
    causeId: 3,
    name: 'Fleetwith Dress',
    imageUrl: 'http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw36cc6527/images/hi-res/58335_BLK_OM1.jpg?sw=2000&sh=2000&sm=fit&sfrm=png',
    price: 75.99,
    // brandId: 6,
    description: 'The Fleetwith Dress was built for hiking, traveling and general getting out and about. Made from a 91% recycled polyester/9% spandex blend that’s quick-drying and resists wrinkling.'
    // productURL: http://www.patagonia.com/product/womens-fleetwith-dress/58335.html?dwvar_58335_color=PST&cgid=womens-dresses-skirts#start=1
},
{
    brandId: brandList['People Tree'].id,
    categoryId: 5,
    causeId: 5,
    name: 'Danielle Marigold Print Dress',
    imageUrl: 'http://www.peopletree.co.uk/productimages/women/dresses/danielle-marigold-print-dress-09329d538021.jpg?height=750&width=500&404=default',
    price: 124.95,
    // brandId: 1,
    description: 'Where would your wardrobe be without an effortlessly stylish fit and flare dress that\'s ready for whatever you\'ve got on the agenda? It\'s cleverly tailored to create a defined waist, with a touch of stretch for figure-hugging lines. It\'s no wonder this is an all-time People Tree favourite.'
    //productURL: http://www.peopletree.co.uk/women/danielle-marigold-print-dress?ref=U3RvY2stR3JvdXAtMQ%3d%3d

},
{
    brandId: brandList['Matt & Nat'].id,
    categoryId: 1,
    causeId: 2,
    name: 'Baxter bag',
    imageUrl: 'http://mattandnat.com/shop/media/catalog/product/cache/11/image/545x/040ec09b1e35df139433887a97daa66f/s/s/ss18-dwell-baxter-ruby-1.jpg',
    price: 145.95,
    // brandId: 5,
    description: 'DWELL COLLECTION Tote that can be worn crossbody with removable and adjustable strap. Secured magnetic snap closure and back slit pocket.'
    // productURL: http://mattandnat.com/shop/collections/dwell/baxter-ink
}
]

const reviews = productList => [{
    title: 'Awesome Kick Crop',
    rating: 5.0,
    content: 'I love this product',
    productId: productList['The Kick Crop Jean'].id
},
{
    title: 'Best cashmere crew in existenceeeeee!!!',
    rating: 2.0,
    content: 'I can\'t tell you how comfy and beautiful this sweater is',
    productId: productList['The Cashmere Crew'].id

},
{
    title: 'confused - slim shirt',
    rating: 3.0,
    content: 'Not gonna lie, this is ugly, but comfy',
    productId: productList['The Chambray Slim Fit Shirt'].id

},
{
    title: 'ehhh',
    rating: 4.0,
    content: 'can\'t pronounce the name, but \'Fjord\' is sweet',
    productId: productList['Long-Sleeved Lightweight Fjord Flannel Shirt'].id

},
{
    title: 'Best kickCrop in daWORLD!',
    rating: 2.0,
    content: 'I love this product!!!',
    productId: productList['The Kick Crop Jean'].id

},
{
    title: 'My new favorite crew',
    rating: 1.0,
    content: 'I love this product!!!',
    productId: productList['The Cashmere Crew'].id

},
{
    title: 'Croppeddd love',
    rating: 4.0,
    content: 'Summer crop tops are in!',
    productId: productList['The Kick Crop Jean'].id

},
{
    title: 'nearly.....on fleekkkk!',
    rating: 3.0,
    content: 'kinda love this, kinda hate it...',
    productId: productList['Fleetwith Dress'].id

},
{
    title: 'Summer days got better',
    rating: 3.0,
    content: 'this is my kind of dress for the summer',
    productId: productList['Danielle Marigold Print Dress'].id

},
{
    title: 'Well-built and animal-cruelty free!!! yaayaya',
    rating: 3.0,
    content: 'beauty, utility and no animals were hurt! Yesssss!',
    productId: productList['Baxter bag'].id

}

]

const categories = [{
    name: 'Cleaning Supplies',
    description: 'Use these things to clean stuff',
    imageUrl: 'http://www.woodard247.com/images/blog/Office-Cleaning-Supplies-Checklist/officelceaningsupplies-1.jpg'
},
{
    name: 'Men\'s Clothing',
    description: 'Use these things to clean stuff',
    imageUrl: 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.instyle.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F684xflex%2Fpublic%2Fimages%2F2017%2F12%2Fgettyimages-539573922.jpg%3Fitok%3Dao0lroMk&w=700&q=85'
},
{
    name: 'Women\'s Clothing',
    description: 'Wear em',
    imageUrl: 'https://www.burlingtoncoatfactory.com/Repository/CategoryC/2018/Feb/020718_Womens_hero1.png'
},
{
    name: 'Personal Hygeine',
    description: 'Use these to scrub yoself',
    imageUrl: 'https://az616578.vo.msecnd.net/files/2016/06/01/636003930649251480-1349755539_Girlmakeup.jpg'
},
{
    name: 'Shoes',
    description: 'Use these things to cover your feet',
    imageUrl: 'http://www.dapperguide.com/wp-content/uploads/2013/10/Wolverine.1000.Mile_.Boot3_.png'
},
{
    name: 'Toys',
    description: 'Use these things to play',
    imageUrl: 'https://target.scene7.com/is/image/Target/12026417_Alt01?wid=520&hei=520&fmt=pjpeg'
}
]


const causes = [

    {
        name: 'Homelessness',
        imageUrl: 'http://1.bp.blogspot.com/-TWQiW5yyW_Q/T0eOQ5Y32UI/AAAAAAAAE6E/MnSrOFAPg5c/s1600/No+Homeless.jpg',
        description: 'Help imporve situation of homeless people around the world'
    },
    {
        name: 'Deforestation',
        imageUrl: 'https://st.depositphotos.com/2965773/4205/v/950/depositphotos_42058953-stock-illustration-stop-deforestation.jpg',
        description: 'Help imporve situation of trees around the world'
    },
    {
        name: 'Water Conservation',
        imageUrl: 'http://www.oceansidechamber.com/uploads/4/4/5/3/44535401/9878833_orig.jpg',
        description: 'Help imporve situation of water around the world'
    },
    {
        name: 'Animal cruelty',
        imageUrl: 'http://www.lovethispic.com/uploaded_images/64834-Stop-Animal-Cruelty.jpg',
        description: 'Bear rugs are out'
    },
    {
        name: 'Pollution',
        imageUrl: 'https://images.fineartamerica.com/images-medium-large/stop-pollution-gualtiero-boffi.jpg',
        description: 'that river smells weird'
    }
]

const by = field => ary => ary.reduce((byField, thing) => {
    byField[thing[field]] = thing
    return byField
}, {})
const byName = by('name')

async function seed() {
    await db.sync({ force: true })
    console.log('db synced!')
    // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
    // executed until that promise resolves!

    const users = await Promise.all([
        User.create({ email: 'cody@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Cody', lastName: 'Bowers' }),
        User.create({ email: 'bruce@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'bruce', lastName: 'lee' }),
        User.create({ email: 'dan@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Danny', lastName: 'Mcgill' }),
        User.create({ email: 'micah@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Micah', lastName: 'Friendland' }),
        User.create({ email: 'alex@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Alex', lastName: 'V' }),
        User.create({ email: 'bobby@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Bobby', lastName: 'Bowers' }),
        // User.create({ email: 'murphy@email.com', password: '123' }),
    ])
    // Wowzers! We can even `await` on the right-hand side of the assignment operator
    // and store the result that the promise resolves to in a variable! This is nice!
    console.log(`seeded ${users.length} users`)

    const allCauses = await Promise.all(
        causes.map(cause => Causes.create(cause)),
    )
    console.log(`seeded ${allCauses.length} causes`)

    const allCategories = await Promise.all(
        categories.map(category => Categories.create(category)),
    )
    console.log(`seeded ${allCategories.length} cats`)

    const allBrands = byName(await Promise.all(
        brands.map(brand => Brands.create(brand)),
    ))

    console.log(`seeded ${Object.keys(allBrands).length} brands`)


    const allProducts = byName(await Promise.all(
        products(allBrands).map(product => Products.create(product)),
    ))

    console.log(`seeded ${Object.keys(allProducts).length} products`)

    const allReviews = byName(await Promise.all(
        reviews(allProducts).map(review => Reviews.create(review)),
    ))
    console.log(`seeded ${Object.keys(allReviews).length} reviews`)


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
