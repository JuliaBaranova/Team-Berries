import { getCatalog } from "./catalog";
import { Products, productsPage, renderCatalog } from "./catalog";


let catalog

if (!catalog) {
    getCatalog();
}


const productsPage = new Products();

renderCatalog(catalog)
// const KEY_PRODUCTS = document.getElementById('products')
// // const KEY_HEADER = document.getElementById('header')
// // const KEY_SHOPPING = document.getElementById('shopping')


