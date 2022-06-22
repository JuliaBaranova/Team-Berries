import { getCatalog } from "./catalog";
import {renderCatalog} from "./products"

let catalog

if (!catalog) {
    getCatalog();
}


renderCatalog(catalog);
// const KEY_PRODUCTS = document.getElementById('products')
// // const KEY_HEADER = document.getElementById('header')
// // const KEY_SHOPPING = document.getElementById('shopping')


