import { localstorage, LocalStorage } from "./localstorage";
const localstorage = new LocalStorage();

const KEY_PRODUCTS = document.getElementById('products')
const list = document.querySelector('ul')


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

        let { pushProduct } = localstorage.putProducts(id)

        if (pushProduct) {
            element.innerText = this.CartRemove
        } else {
            element.innerText = this.CartAdd
        }

    }

    renderCatalog(catalog) {
        const template = document.querySelector('#template')

        catalog?.forEach((element) => {
            const li = template.content.cloneNode(true)
            const itemContainer = li.querySelector('.products-item__element')
            const itemImg = itemContainer.querySelector('.products-item__img')
            const itemPrice = itemContainer.querySelector('.products-item__price')
            const itemName = itemContainer.querySelector('.products-item__name')
            const itemBtn = itemContainer.querySelector('.products-item__btn')

            itemImg.src = element.image
            itemPrice.innerText = element.price + ' BYN'
            itemName.innerText = element.name

            list.append(li)

            itemBtn.addEventListener('click', function () {
                if (itemBtn.innerText = 'Добавить в корзину') {
                    itemBtn.innerText = 'Удалить из корзины'
                } else {
                    itemBtn.innerText = 'Добавить в корзину'
                }
            })
        })
    }
}


export const productsPage = new Products();
