import { getCatalog, productsPage, Products } from "./catalog";

let catalog

if (!catalog) {
    getCatalog();
}

const productsPage = new Products();
productsPage.renderCatalog(catalog);
// const KEY_PRODUCTS = document.getElementById('products')
// // const KEY_HEADER = document.getElementById('header')
// // const KEY_SHOPPING = document.getElementById('shopping')


