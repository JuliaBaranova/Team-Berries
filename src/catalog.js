import { localstorage, LocalStorage } from "./localstorage";
const localstorage = new LocalStorage();

const KEY_PRODUCTS = document.getElementById('products')

export const getCatalog = async function fetchCatalogJSON() {
    const responce = await fetch('http://localhost:3000/catalog');
    console.log(responce)
    if (responce.ok) {
        const json = await responce.json();
        catalog = json;
        productsPage.renderCatalog(catalog);
    }
}

export class Products {
        constructor() {
            this.CartAdd = 'В корзину';
            this.CartRemove = 'Удалить из корзины'
        }
    
        setLocalStorage(element, id) {
           
            const { pushProduct, products } = localstorage.putProducts(id)
    
            if (pushProduct) {
                element.innerText = this.CartRemove
            } else {
                element.innerText = this.CartAdd
            }
    
        }
    
        renderCatalog(catalog) {
            const productsStore = localstorage.getProducts();
            let htmlCatalog = '';
    
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
                    <button class="products-item__btn" onclick="productsPage.setLocalStorage(this, '${id}')">${activeText}</button>
                </li>
                `;
            })
            const html = `
            <ul class="products-item">
            ${htmlCatalog}
            </ul>
            `;
    
            KEY_PRODUCTS.innerHTML = html;
        }
    }


export const productsPage = new Products();
