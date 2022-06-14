let catalog

const getCatalog = async function fetchCatalogJSON () {
    const responce = await fetch('http://localhost:3000/catalog');
    console.log(responce)

}
getCatalog()
const KEY_PRODUCTS = document.getElementById('products')
const KEY_HEADER = document.getElementById('header')
const KEY_SHOPPING = document.getElementById('shopping') 


