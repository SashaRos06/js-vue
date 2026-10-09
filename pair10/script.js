// let names = ['Ann', 'Oleksandra', 'Olesia', 'Ivan'];
// console.log(names.length)
// //----------------------------------додаємо нову змінну в список
// //додає один або декілька елементів в кінець списку - push. перезаписуємо існуючий список
// names.push('Mariia');
// //console.log(names); //['Ann', 'Oleksandra', 'Olesia', 'Ivan', 'Mariia']
// //видаляємо останній об'єкт списку - pop
// names.pop();
// names.unshift('Pavlo'); //додає перший елемент списку
// names.shift(); //видаляє перший елемент списку
//
// let names2 = names.splice(1, 3); //за замовчування від початку до кінця заданого елемента -1!)
//
// console.log(names);
// console.log(names2); //['Oleksandra', 'Olesia', 'Ivan']


//----------------------------------
// let names = ['Ann', 'Oleksandra', 'Olesia', 'Ivan'];
// let deleted = names.splice(2, 1);
// console.log(deleted); //['Olesia']
// //console.log(names); //['Ann', 'Oleksandra', 'Ivan']
//
// names.splice(1, 0, 'Seva');
// //console.log(names); //['Ann', 'Seva', 'Oleksandra', 'Ivan']
//
// names.splice(0, 1, 'Tetiana', 'Nadiia');
// //console.log(names); //['Tetiana', 'Nadiia', 'Seva', 'Oleksandra', 'Ivan']


//----------------------------------
// function register(name) {
//     //trim - видаляє пробіли
//     if(name.trim() === '') {
//         alert('Please enter your name.');
//     }
//     let exists = false;
//     for(let i  = 0; i < name.length; i++) {
//         if(event[i] === name) {
//             exists = true;
//         }
//     }
//     if(exists) {
//         alert(`The participant is registered: ${name}`);
//         return;
//     }
//     event.push(name);
//     alert(`The participant is register now: ${name}`);
// }


// //----------------------------------видаляє учасника за іменем
// function remove(name) {
//     let index = -1; //-1 - не знайшли такого учасника
//     for(let i = 0; i < event.length; i++) {
//         if(event[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if(index === -1) {
//         alert(`There is no participant registered: ${name}`);
//     }
//     else {
//         event.splice(index, 1);
//         alert(`Participant ${name} was deleted`);
//     }
// }
//
// function count() {
//     alert(`total number of participants: ${event.length}`);
// }
//
// let event = ['Ann', 'Oleksandra', 'Olesia', 'Ivan'];
//
// register('Slavik'); //The participant is register now: Slavik
// register('Ann'); //The participant is registered: Ann
// register(''); //Please enter your name.
// remove('Slavik'); //Participant Slavik was deleted
// count(); //total number of participants: 5


//----------------------------------перебираємо список
// let names = ['Ann', 'Oleksandra', 'Olesia', 'Ivan'];

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//оператор - of перевіряє елементи в послідовності
// for(let name of names) {
//     console.log(name);
// }
//перебирає елементи за допомогою функції. forEach - перебір масиву, а також індексу кожного елемента (за потреби)
//зручний для роботи з кожним елементом
//callback
// names.forEach(function(name, index) {
//     console.log(name, index);
// })





//----------------------------------домашка
//ЗАДАЧА 1. Черга на реєстрацію.
// let names = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
// names.push("Влад");
// names.unshift("Всеволод");
// names.pop();
// names.splice(2, 1, "Єгор");
// // console.log(names);
//
// for(let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} - ${(i + 1)}`);
// }
//
// for(let name of names) {
//     console.log(name);
// }
//
// names.forEach(function(name){
//     console.log(`${name} - ${name.length}`);
// })


//ЗАДАЧА 2. Продаж квитків.
let prices = [120, 250, 180, 300, 150, 400];
let sum = 0;
//let sum2 = 0;
let expensiveTickets = 0;
// let expensiveTickets2 = 0;

for(let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
//другий спосіб
// for(let price of prices) {
//     sum2 += price
// }
// console.log(sum2);

for(let i = 0; i < prices.length; i++) {
    if(prices[i] >= 200) {
        expensiveTickets++;
    }
}
//другий спосіб
// prices.forEach(function(price) {
//     if(price >= 200) {
//         expensiveTickets2++;
//     }
// })
// console.log(expensiveTickets2);



console.log(`Загальний виторг: ${sum}`);
console.log(`Квитки ціною від 200 грн включно: ${expensiveTickets}`);
console.log(`Cередня ціна квитка: ${(sum / prices.length)}`);
