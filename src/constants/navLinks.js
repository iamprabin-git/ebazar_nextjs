import {CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE,  ORDERS_ROUTE,  PRODUCTS_ROUTE,} from "./routes";

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
    route: ORDERS_ROUTE,
    label: "Orders",
    isAuth: true,
  },
 
  {
    route: CONTACT_ROUTE,
    label: "Contact",
    isAuth: false,
  },
 
];
export default navLinks;
