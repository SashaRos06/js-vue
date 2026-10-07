//колекцій - певні послідовності. у пайтоні - 5 штук (строка, масиви(списки), кортежі, словники
//масиви - колекція, де до кожного елемента можна звернутися за індексом. масив є змінним
// let array = [value1, value2, value3]
//вони можуть бути змішеними мати різні типи дані, а також масиви можуть містити в собі інші масиви
// let prices = [120, 23, 45, 60, 55]
// console.log(prices[1])
//
// prices[1] = 50;
// console.log(prices[1]) // 23 -> 50
//
// console.log(prices.length); //length індекс останнього елемента на одиничку менший за length
// //виводимо наш масив за допомогою циклу
// for (let i = 0; i < prices.length; i++) {
//     console.log(prices[i]);
// }
// let sum = 0;
// for (let i = 1; i < prices.length; i++) {
//     sum += prices[i];
// }
// console.log(sum);

// function getTotalPrices(prices){
//     let sum = 0;
//     for(let i = 0; i < prices.length; i++){
//         sum += prices[i];
//     }
//     return sum;
// }
// let prices = [120, 23, 50, 60, 55];
// let result = getTotalPrices(prices);
// console.log(result);

//--------------------------------------------------------------------
// const limit = 50;
// let prices = [120, 23, 50, 60, 55];
// let newPrices = [];
//
// function pricesBiggerLimit(prices){
//     let a = 0;
//     for(let i = 0; i < prices.length; i++){
//         if (prices[i] >= limit){
//             newPrices[a] = prices[i];
//             a++
//         }
//     }
// }
// pricesBiggerLimit(prices);
// console.log(newPrices);

//-------------------------------------
function getEvenNumbers() {
    let numbers = [];
    let evenNumbers = [];

    for (let i = 0; i < 10; i++) {
        let userNumbers = +prompt(`Введіть числа:`);
        numbers[i] = userNumbers;
    }

    let a = 0;
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0){
            evenNumbers[a] = numbers[i];
            a++;
        }
    }
    return evenNumbers;
}

let result = getEvenNumbers();
console.log(result);