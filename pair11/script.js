// //Один об'єкт описується декількома значеннями. Масиви об'єктів
// // let object = {
// //     key1: value1,
// //     key2: value2,
// //     key3: value3,
// // }
// //Ключі об'єкта унікальні, значення ключів можуть бути різних типів і можуть повторюватися
// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: 1840,
//     price: 500,
//     available: true
// }
// console.log(book.title); //Кобзар
// console.log(book[0]); //
// //в незалежності від розміщення значення виводимо його за ключем

let books = [
    {
        id: 1,
        title: "Кобзар",
        author: "Тарас Шевченко",
        year: 1840,
        price: 500,
        available: true
    },
    {
        id: 2,
        title: "Лісова пісня",
        author: "Леся Українка",
        year: 1911,
        price: 450,
        available: false
    },
    {
        id: 3,
        title: "Тигролови",
        author: "Іван Багряний",
        year: 1943,
        price: 550,
        available: false
    },
    {
        id: 4,
        title: "Місто",
        author: "Валер'ян Підмогильний",
        year: 1927,
        price: 450,
        available: false
    },
]
// //Перебір об'єктів масиву
// console.log(books[2]);
// for(let book of books) {
//     console.log(`[${book.id}: ${book.title}, ${book.author}, ${book.year}, ${book.price} грн]`);
// }
// //Запам'ятати: у forEach не використовується break
// books.forEach(function(book) {
//     console.log(book);
// })

//--------------------------------------------Розрахунок даних для наявних книжок
let availableCount = 0;
let totalPrice = 0;
for (let book of books) {
    if (book.available === true) {
        availableCount++;
        totalPrice += book.price;
    }
}
console.log(availableCount); //1
console.log(totalPrice); //500

//додаємо новий об'єкт в масив
books.push({
    id: 5,
    title: "Захар Беркут",
    author: "Іван Франко",
    year: 1882,
    price: 500,
    available: true
})

console.log(books.length); //5


idBooks = +prompt('Enter id book: ')
let foundBook = null;
for (let book of books) {
    if (book.id === idBooks) {
        foundBook = book;
        break;
    }
}

if (foundBook !== null) {
    let status = "Not available";
    if (foundBook.available === true) {
        status = "Available";
    }
    alert(`[${foundBook.title}, ${foundBook.author}, ${foundBook.year}, ${foundBook.price} грн, ${status}]`);
} else {
    alert("Book not found!")
}
