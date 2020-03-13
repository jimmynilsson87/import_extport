import {getProducts} from './main.js'; // <-- WHY DIS NO WORK???

$(document).ready(() => {
    showProducts();
})

async function showProducts() {
    const products = await getProducts();

    let maindiv = $('#adminDiv');
    for (i = 0; i < products.length; i++) {
        maindiv.append(
            `<h5>${products[i].name}</h5>`
        );
    }
}