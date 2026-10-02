// function name(параметри, аргументи){
//     код
// }
//Функція для виведення повідомлення
// function showMessage() {
//     alert("Hello World!");
// }
//
// showMessage(); //для виведення функцій

// function showInfo() {
//     console.log("В гостях у Марійки")
//     console.log("Магазин працює з 8:00 до 23:00")
// }
// function showProducts(name, price, count){
//     console.log(`Марійка продає: ${name}`)
//     console.log(`Ціна: ${price} грн`)
//     console.log(`Загальна вартість: ${price*count} грн`)
// }
// showInfo()
// showProducts("Пральний порошок", 888, 3) //Передаємо інформацію, яка замінює значення параметра


//------------------------------Функція повертає суму покупки. Зберігаємо результат в змінну, і потім виводимо результат зміної
// function calculateTotal(price, count) {
//     return price * count;
// }
//
// let total = calculateTotal(800, 3);
// console.log(total);


//-----------------------------Якщо сума покупки більша за 5000 грн, то маємо знижку 10%
// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     } else {
//         return 0;
//     }
// }
//
// let discount1 = discount(1000);
// let discount2 = discount(6000);
//
// console.log(discount1);
// console.log(discount2);


//-------------------------------------------------------------------
// function getProductTotal(price, count) {
//     return price * count;
// }
// function getDiscount(total) {
//     if (total >= 10000){
//         return 15;
//     } else if (total >= 5000) {
//         return 10;
//     } else if (total >= 2000) {
//         return 5;
//     } else{
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percentDiscount) {
//     return total * percentDiscount / 100;
// }
//
// function getFinalPrice(total, discount){
//     return total - discount;
// }
//
// let productName = prompt("Your product name");
// let productPrice = +prompt("Your product price");
// let productCount = +prompt("Your product count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн`);
// console.log(`Кількість: ${productCount} шт`);
// console.log(`Сума: ${productTotal} грн`);
// console.log(`Знижка: ${productDiscountPercent} %`);
// console.log(`Сума знижки: ${productDiscountValue} грн`);
// console.log(`До сплати: ${productFinalPrice} грн`);





// "Розрахунок вартості квитків у кіно"____________________________________________________________________________________________
function calculateTickets(price, count) {
    return price * count;
}
function getTicketDiscount(total) {
    if (total >= 1500){
        return 15;
    } else if (total >= 1000) {
        return 10;
    } else if (total >= 500) {
        return 5;
    } else{
        return 0;
    }
}

function calculateTicketDiscount(total, percentDiscount) {
    return total * percentDiscount / 100;
}

function calculateTicketFinalPrice(total, discount){
    return total - discount;
}

let ticketPrice = +prompt("Your ticket price");
let ticketCount = +prompt("Your ticket count");

let ticketTotal = calculateTickets(ticketPrice, ticketCount);
let ticketDiscountPercent = getTicketDiscount(ticketTotal);
let ticketDiscountValue = calculateTicketDiscount(ticketTotal, ticketDiscountPercent);
let ticketFinalPrice = calculateTicketFinalPrice(ticketTotal, ticketDiscountValue);


console.log(`Ціна: ${ticketPrice} грн`);
console.log(`Кількість: ${ticketCount} шт`);
console.log(`Сума: ${ticketTotal} грн`);
console.log(`Знижка: ${ticketDiscountPercent} %`);
console.log(`Сума знижки: ${ticketDiscountValue} грн`);
console.log(`До сплати: ${ticketFinalPrice} грн`);