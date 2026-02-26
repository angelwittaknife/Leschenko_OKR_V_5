
function averagePrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price;
    }
    return sum / arr.length;
}

console.log(averagePrice([{ product: 'apple', price: 10 }, { product: 'ARBUZ', price: 20 }, { product: 'orange', price: 30 }]));