/*Користувач вводить кількість учнів N.
    Після цього програма N разів запитує оцінку від 1 до 12.

Потрібно визначити:
    - суму всіх оцінок;
- середню оцінку;
- кількість оцінок 7 і вище;
- кількість оцінок нижче 7;
- найбільшу оцінку.

    Використайте цикл for.

У кінці програма повинна вивести зрозумілий звіт.

    Приклад:
Кількість учнів: 5
Оцінки: 8, 6, 10, 4, 12

Результат:
    Сума: 40
Середня: 8
Оцінок 7 і вище: 3
Оцінок нижче 7: 2
Найбільша оцінка: 12 */



// let count = +prompt('Enter your count');
// let sum = 0;
// let countLessSeven = 0;
// let countGreaterThanSeven = 0;
// let max = 0;
// while (count < 1 || isNaN(count)) {
//     count = +prompt('Enter your count');
// }
//
// for (let i = 1; i <= count; i++) {
//         sum += +prompt('Enter your score');
//         if (i < 7) {
//             countLessSeven++;
//         }
//         if (i >= 7) {
//             countGreaterThanSeven++;
//         }
//         if (i > max) {
//             max = i;
//         }
//     }
//
// alert(`Результат:
// Сума: ${sum}
// Середня: ${(sum / count)}
// Оцінок 7 і вище: ${countGreaterThanSeven}
// Оцінок нижче 7: ${countLessSeven}
// Найбільша оцінка: ${max}`)