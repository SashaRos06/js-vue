/*Створіть програму, яка визначає вартість квитка до технопарку.

Користувач вводить:
1. свій вік;
2. день: 1 — будній, 2 — вихідний.

Базова ціна квитка:
- будній день — 200 грн;
- вихідний день — 250 грн.

Знижка за віком:
- до 7 років включно — безкоштовно;
- від 8 до 17 років включно — знижка 50%;
- від 18 до 59 років включно — повна вартість;
- від 60 років — знижка 40%.

Програма повинна:
- перевірити вік;
- визначити базову вартість за днем;
- застосувати потрібну знижку;
- вивести підсумкову вартість.

Якщо введено неправильний номер дня — вивести повідомлення:
"Помилка: неправильний тип дня".*/



// let age = +prompt("What is the age?");
// let day = +prompt("What is the day?");
// let costFirstDay = 200;
// let costSecondDay = 250;
// let cost;
//
// switch (day){
//     case 1:
//         if (age > 60){
//             cost = (costFirstDay - (costFirstDay * 0.4));
//         } else if (age > 18 && age <= 59){
//             cost = costFirstDay;
//         } else if (age <= 17 && age > 8){
//             cost = (costFirstDay - (costFirstDay * 0.5));
//         } else{
//             cost = 0;
//         }
//     case 2:
//         if (age > 60){
//             cost = (costSecondDay - (costSecondDay * 0.4));
//         } else if (age > 18 && age <= 59){
//             cost = costSecondDay;
//         } else if (age <= 17 && age > 8){
//             cost = (costSecondDay - (costSecondDay * 0.5));
//         } else{
//             cost = 0;
//         }
// }
// alert(`Ваша вартість квитка ${cost}`);