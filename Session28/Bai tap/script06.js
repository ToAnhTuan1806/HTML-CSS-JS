const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
]
function totalMoney(cart) {
    let total=0
    cart.forEach(item => {
        total +=item.price*item.quantity
    });
    return total;
}
let result= totalMoney(cart)
console.log(result);
