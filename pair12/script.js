//Розширені методи роботи з масивами об'єктів у JavaScript. Обробка, пошук, фільтрація та сортування даних



//Створимо функцію, яка визначає оцінки більше рівні 10
// function isHighScore(score) {
//     return score >= 10;
// }
// let scores = [7, 12, 8, 9, 10, 5]
// // let highScore = isHighScore(scores)
// // console.log(highScore) //false
// let highScore = scores.filter(isHighScore); // array.filter(function) викликає функцію для кожного значення і створює новий масив, в якому відфільтровуються певні значення
// console.log(highScore) //(2) [12, 10]

//-----------------------------------------------------------------

// let scores = [7, 12, 8, 9, 10, 5]
// let highScore = scores.filter(score => score >= 10) //array.filter(параметр =>(передаємо одине значення параметра) умова порівняння)
// console.log(highScore) //(2) [12, 10]


// let courses = [
//     {id: 1,
//         title: "HTML",
//         price: 700,
//         description: "HTML description",
//         active: true},
//      {id: 2,
//         title: "CSS",
//         price: 300,
//         description: "CSS description",
//         active: true},
//     {id: 3,
//         title: "JavaScript",
//         price: 400,
//         description: "JavaScript description",
//         active: false},
//     {id: 4,
//         title: "Vue",
//         price: 800,
//         description: "Vue description",
//         active: false}
// ]
// let found = courses.find((course) => course.id === 3);
// // let foundNoExistent = courses.find((course) => course.id === 5);
// // console.log(foundNoExistent); //undefined
// console.log(found); //{id: 3, title: 'JavaScript', price: 400, description: 'JavaScript description'}
// if (found !== undefined) {
//     console.log(found.title); //JavaScript
// } else {
//     console.log("Такого курсу немає");
// }
//
// let activeCourse = courses.filter((course) => course.active === true);
// let lowCost = courses.filter((course) => course.price <= 400);
// console.log(lowCost);
// console.log(activeCourse);
//
//
// //Функція map
// let title = courses.map(course=> course.title);
// let selPrice = courses.map(course=> course.price * 0.9);
// console.log("Початкові дані:" + courses);
// console.log(`Назви курсів: ${title}`);
// console.log(`Оновлена вартість курсів: ${selPrice}`)
//
//
// //include пер
// console.log(search); //перевіряє на наявність значень
// // let search = courses.filter(course=> course.title.includes("Script"));


////-----------------------------------------------------------------
let books = [
    {
        id: 1,
        title: "HTML для початківців",
        author: "Олена Класна",
        year: 2024,
        available: true
    },
    {id: 2,
        title: "JavaScript для початківців",
        author: "Олена Прекрасна",
        year: 2022,
        available: false
    },
    {id: 3,
        title: "CSS для початківців",
        author: "Олена Жінка",
        year: 2022,
        available: true
    },
    {id: 4,
        title: "HTML, JavaScript, CSS для початківців",
        author: "Олена Мужня",
        year: 2024,
        available: false
    },
]
function isAvailable(book) {
    return books.available === true;
}

//Знайти книгу по запиту через id
let foundIdBook = +prompt("Enter the book id: ");
let searchBookId = books.find(book => book.id === foundIdBook);
console.log(searchBookId); //{id: 3, title: 'CSS для початківців', author: 'Олена Жінка', year: 2022, available: true}
let availableBooks = books.filter(isAvailable);
let title = books.map(book => book.title).join(', ');
let searchJS = books.filter(book=> book.title.includes("JavaScript"));