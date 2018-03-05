/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as  HomePage } from './pages/HomePage'
export {Login, Signup} from './auth-form'

export {default as AllBrands} from './pages/AllBrands'

export {default as AllCauses} from './pages/AllCauses'
export {default as AllProducts} from './pages/AllProducts'
export {default as AllCategories} from './pages/AllCategories'
export {default as AllServices} from './AllServices'
export {default as ShoppingCart} from './ShoppingCart'

export {default as SingleBrand} from './pages/SingleBrand'
export {default as SingleCause} from './SingleCause'
export {default as SingleProduct} from './pages/SingleProduct'
export {default as SingleService} from './SingleService'


//Admin
export {default as AdminHome} from './Admin/AdminHome'
export {default as AdminProducts} from './Admin/AdminProducts'
export {default as SingleAdminProduct} from './Admin/SingleAdminProduct'
export {default as AdminCauses} from './Admin/AdminCauses'
export {default as SingleAdminCause} from './Admin/SingleAdminCause'
export {default as AdminBrands} from './Admin/AdminBrands'
export {default as SingleAdminBrand} from './Admin/SingleAdminBrand'



