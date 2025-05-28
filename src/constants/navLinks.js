import {  CART_ROUTE,  CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE,  PRODUCTS_ROUTE,  PROPERTIES_ROUTEPRODUCTS } from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
    isAuth: false,
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
    isAuth: false,
    
  },
  {
    route: NEWS_ROUTE,
    label: "News",
    isAuth: true,
  },
  
 
  {
    route: CONTACT_ROUTE,
    label: "Contact",
    isAuth: false,
  },
  {
    route: CART_ROUTE,
    label: "Cart",
    isAuth: true,
  },
 
];
export default navLinks;
