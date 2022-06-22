import { getProducts, putProducts } from "./localstorage";
const list = document.querySelector('ul')

export function renderCatalog(catalog) {
    const productsStore = getProducts();
    const template = document.querySelector('#template')

    catalog?.forEach((element, id) => {
        const li = template.content.cloneNode(true)
        const itemContainer = li.querySelector('.products-item__element')
        const itemImg = itemContainer.querySelector('.products-item__img')
        const itemPrice = itemContainer.querySelector('.products-item__price')
        const itemName = itemContainer.querySelector('.products-item__name')
        const itemBtn = itemContainer.querySelector('.products-item__btn')
       
        itemContainer.classList.add(element.selector)
        itemImg.src = element.image
        itemPrice.innerText = element.price + ' BYN'
        itemName.innerText = element.name
        
        list.append(li)    
        
itemBtn.addEventListener('click', function () {
    const { pushProduct, products } = putProducts(id);
    if (pushProduct) {
        itemBtn.innerText = 'Из корзины';
    } else {
        itemBtn.innerText = 'В корзину';
    }
})
 if (productsStore.indexOf(id) === -1) {
            itemBtn.textContent = 'В корзину';
        } else {
            itemBtn.textContent = 'Из корзины';
        }

})  
}  


