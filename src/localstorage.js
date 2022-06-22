export function getProducts() {
    const productsLS = localStorage.getItem('products');
    if (productsLS !== null) {
        return JSON.parse(productsLS);
    }
    return [];
}
export function putProducts(id) {
    let products = getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
        products.push(id);
        pushProduct = true;
    } else {
        products.splice(index, 1);
    }
    localStorage.setItem('products', JSON.stringify(products));
    return { pushProduct, products }

}
