// alert('Hello')
// // Зміни - (Констранти, змінні) var let
// let age = 18;
// const name = 'Ivan';
// console.log(name);
// console.log(age);
//
// //можна змінювати значення зміних
// age = 19;
// //Логічний, строка, число - тип даних


// const name = 'Ivan'; //string
// let number = 0; //number
// let isTrue = false; //boolean
//
// console.log(typeof name); //Оператор, що виводить тип даних
//
// //+ - * / % ** - математичні операції;

// const name = prompt('What is your name?'); //prompt - завжди строка
// let num1 = prompt('Enter first number');
// let num2 = prompt('Enter second number');
// console.log(Number(num1) + Number(num2)); //Number - перетворює тип змінних у число
// console.log((num1 - 0) + (num2 - 0));
//
// let num3 = 100;
// console.log(typeof String(num3)); //String - перетворює тип змінної на число


//Калькулятор
// let productName = prompt('Enter your product name');
// let price = Number(prompt('Enter your price'));
// let quantity = Number(prompt('Enter your quantity'));
// let delivery = Number(prompt('Enter your delivery'));
//
// let totalCost = price * quantity + delivery;
//
// console.log(`Загальна вартість за товар ${productName} становить ${totalCost} грн`);
//
//
// alert('Товар: ' + productName + "\nВартість товарів: " + totalCost);

let productName = prompt('Enter your product name');
let price = Number(prompt('Enter your price'));
let discount = Number(prompt('Enter discount'));
let quantity = Number(prompt('Enter your quantity'));
let delivery = Number(prompt('Enter your delivery'));

let totalCost = (price * quantity)*(discount / 100) + delivery;

console.log(`Загальна вартість за товар ${productName} становить ${totalCost} грн`);


alert('Товар: ' + productName + "\nВартість товарів: " + totalCost);