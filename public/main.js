$(document).ready(() => {
    showProducts();
});


/* async function getProducts() {
    const products = await $.ajax({
        url: '/products',
        dataType: 'json',
    })
    return products;
} */

//WHY DIS NO WORK???
export async function getProducts() {
    const products = await $.ajax({
        url: '/products',
        dataType: 'json',
    })
    return products;
}

async function showProducts() {
    const products = await getProducts();

    let maindiv = $('#mainDiv');
    for (i = 0; i < products.length; i++) {
        maindiv.append(
            `<h5>${products[i].name}</h5>`
        );
    }
}