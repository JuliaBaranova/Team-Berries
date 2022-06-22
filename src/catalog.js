import { renderCatalog } from "./products"

export const getCatalog = async function fetchCatalogJSON() {
    const responce = await fetch('http://localhost:3000/catalog');
    console.log(responce)
    if (responce.ok) {
        const json = await responce.json();
        catalog = json;
        renderCatalog(catalog);
    }
}

