export class LocalStorage {
    constructor() {
        this.keyName = 'products'
    }
    getProducts() {
        const productsLS = localStorage.getItem(this.keyName);
        if (productsLS !== null) {
            return JSON.parse(productsLS);
        }
        return [];
    }
    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }

    }
};
export const localstorage = new LocalStorage();
