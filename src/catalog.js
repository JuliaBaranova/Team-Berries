export async function fetchCatalogJSON() {
    const responce = await fetch('http://localhost:3000/catalog');
    if (responce.ok) {
        const json = await responce.json();
        return json
    }
}