import {fetchCatalogJSON} from "./catalog";
import { renderCatalog } from "./products";
import { renderCart } from "./cart.js";

async function init(){
const catalog = await fetchCatalogJSON()
renderCatalog(catalog)
}

init()


