import { getProducts } from "./localstorage";
import { renderCatalog } from "./products"
import { getCatalog } from "./catalog";

const cartBtn = document.querySelector('.header__cart')
const cartWindow = document.querySelector('.cart')
const cart = document.querySelector('.cart__table')
const close = document.querySelector('.cart__closeBtn')
const addedProducts = JSON.parse(localStorage.getItem("products"));



export function renderCart() {
	let htmlCatalog = ``;
	let total = 0

	const catalog = function fetchCatalog() {
		fetch('http://localhost:3000/catalog')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				for (let i = 0; i < addedProducts.length; i++) {
					data.forEach((element) => {
						if (data.indexOf(element) == addedProducts[i]) {
							htmlCatalog += `
								 <tr>
								 <td class="cart__name">${element.name}</td>
								 <td class="cart__price">${element.price} BYN</td>
								 </tr>
							`
							total = total + element.price
						}
					})
				}

				const html = `
						<div>
							<table>
								${htmlCatalog}
							</table>
							<div class="cart__total">
								<span class="cart__totalText">Итого</span>
								<span class="cart__totalSum">${total} BYN</span>
							</div>
						</div>
					`
				cart.innerHTML = html;
			});;
	}
	catalog()
}

renderCart()

cartBtn.addEventListener('click', function () {
	renderCart()
	cartWindow.classList.remove("hidden")
})

close.addEventListener('click', function () {
	renderCart()
	cartWindow.classList.add("hidden")
})