import { localstorage } from "./localstorage";

const KEY_PRODUCTS = document.getElementById('products')

export const getCatalog = async function fetchCatalogJSON() {
    const responce = await fetch('http://localhost:3000/catalog');
    console.log(responce)
    if (responce.ok) {
        const json = await responce.json();
        catalog = json;
        renderCatalog(catalog);
    }
}

function setLocalStorage (element, id) {
    console.log(id)
    const { pushProduct, products } = localstorage.putProducts(id)
    if (pushProduct) {
        element.innerText = this.CartRemove
    } else {
        element.innerText = this.CartAdd
    }

}

export class Products {
    constructor() {
        this.CartAdd = 'В корзину';
        this.CartRemove = 'Удалить из корзины'
    }
}

export function renderCatalog(catalog) {
    const productsPage = new Products();
    console.log(productsPage)
    const productsStore = localstorage.getProducts();
    let htmlCatalog='';

    catalog?.forEach(({ id, name, price, image, selector }) => {

        let activeText = '';
        if (productsStore.indexOf(id) === -1) {
            activeText = this.CartAdd;
        } else {
            activeText = this.CartRemove;
        }

        htmlCatalog += `
                <li class="products-item__element ${selector}">
                    <img class="products-item__img" src="${image}"/>
                    <span class="products-item__price">${price} BYN</span>
                    <span class="products-item__name">${name}</span>
                    <button class="products-item__btn" onclick="setLocalStorage(this, '${id}')">${activeText}</button>
                </li>
                `;
    });
    const html = `
                <ul class="products-item">
                ${htmlCatalog}
                </ul>
                `;

    KEY_PRODUCTS.innerHTML = html;
}



// const productsPage = new Products();
// console.log(productsPage)
// productsPage.renderCatalog(catalog);
