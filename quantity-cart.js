const shopingCart = [
    {name: 'shirt', price: 1600, quentity: 4},
    {name: 'shoe', price: 1200, quentity: 2},
    {name: 'pant', price: 1800, quentity: 3},
    {name: 'belt', price: 700, quentity: 7},
];

function totalCost(products){
    let sum = 0;
    for(let i=0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quentity;
        sum = sum + productTotal;
    }
    return sum;
}

const expence = totalCost(shopingCart);
console.log(expence);