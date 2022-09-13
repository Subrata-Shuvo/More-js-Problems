const products = [
    { name : 'laptop', price : 90888},
    { name : 'shirt', price : 500},
    { name : 'phone', price : 50000}
];

let totalPrice = 0;

for ( const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);