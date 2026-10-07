// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }


// for (let i = 10; i >= 5; i--) {
//     console.log(i)
// }


// for (let i = 10; i >= 1; i-=2) {
//     console.log(i)
// }

// Сума від 1 до 30
// let sum = 0;
// for (let i = 0; i < 30; i++) {
//     sum += i;
// }
// console.log(sum);
//--------------------------------------------

// let sum = 0;
// for (let i = 0; i <= 50; i+=2) {
//      sum += i;
// }
//  console.log(sum);
//--------------------------------------------

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         count++;
//     }
// }
// console.log(count);
//--------------------------------------------

// for (let i = 1; i <= 100; i++) {
//     if (i > 20 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }
//--------------------------------------------

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue; // - пропускає ітерацію і йде на наступну
//     }
//     console.log(i);
// }
//--------------------------------------------

// вводить кількість учнів
// програма запитує оцінку кожного
// оцінка з 1 до 12
// сума оцінок
// середній бал
// сума кожного рівня оцінок
// найнижча

// let studentCount = +prompt('Enter your student count');
// if (studentCount > 0){
//     let sum = 0, highLevel = 0, others = 0;
//     for (let i = 1; i <= studentCount; i++) {
//         let grade = +prompt('Enter your student grade');
//         if (!grade >= 1 && grade <= 12){
//             alert("Error");
//             i--;
//             continue;
//         }
//         if (grade >= 7){
//             highLevel ++
//         } else{
//             others ++
//         }
//         sum += grade;
//     }
//     console.log(sum);
//     console.log(sum / studentCount);
//     console.log(highLevel);
//     console.log(others);
//
// } else{
//     alert("Error");
// }

//--------------------------------------------
let sum = 0;
let countTop = 0;
let countMid = 0;
let countBottom = 0;
let maxGrade = 0;
let minGrade = 100;
let firstPerfectIndex = 0;
let studentCount = +prompt('Enter your student count: ');
if (studentCount > 0) {
    for (let i = 0; i < studentCount; i++) {
        let grade = +prompt('Enter your student grade: ');
        if (grade < 0 || grade > 100 || isNaN(grade)) {
            alert("Error");
            i--;
            continue;
        }
        sum += grade;

        if (grade >= 90 && grade <= 100) {
            countTop++;
        } else if (grade >= 60 && grade <= 89) {
            countMid++;
        } else {
            countBottom++;
        }

        if (grade > maxGrade) {
            maxGrade = grade;
        }
        if (grade < minGrade) {
            minGrade = grade;
        }
        if (grade === 100 && firstPerfectIndex === 0) {
            firstPerfectIndex = i;
        }
    }
    console.log(`Середній результат: ${sum / studentCount}`);
    console.log(`Кількість результатів 90–100: ${countTop}`);
    console.log(`Кількість результатів 60–89: ${countMid}`);
    console.log(`Кількість результатів нижче 60: ${countBottom}`);
    console.log(`Найвищий результат: ${maxGrade}`);
    console.log(`Найнижчий результат: ${minGrade}`);
    if (firstPerfectIndex !== 0){
        console.log(`Перші 100 балів у: ${firstPerfectIndex}`);
    } else{
        console.log("Учасника зі 100 балами немає");
    }
} else{
    alert("Error");
}

//1. Знайти середній результат.
// 2. Порахувати кількість результатів 90–100.
// 3. Порахувати кількість результатів 60–89.
// 4. Порахувати кількість результатів нижче 60.
// 5. Знайти найвищий результат.
// 6. Знайти найнижчий результат.
// 7. Визначити номер першого учасника зі 100 балами.
// 8. Неправильне значення треба ввести повторно.