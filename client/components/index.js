/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'

export {default as AllBrands} from './pages/AllBrands'
export {default as AllCauses} from './AllCauses'
export {default as AllProducts} from './pages/AllProducts'
export {default as AllServices} from './AllServices'
export {default as ShoppingCart} from './ShoppingCart'

export {default as SingleBrand} from './SingleBrand'
export {default as SingleCause} from './SingleCause'
export {default as SingleProduct} from './SingleProduct'
export {default as SingleService} from './SingleService'
