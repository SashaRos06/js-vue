// //Логічні оператори, вкладені логічні оператори
// //Користувач може увійти до системи, якщо йому більше 18 і якщо він зареєстрований
// let age = Number(prompt('Enter your age'));
// let access = confirm('Are you register?');
//
// if (age >= 18 && access === true){
//     alert("Access granted. Welcome to our website!");
// }
// else{
//     alert("Access denied");
// }

//Рівень доступу teacher, admin
// let role = prompt("What is your role?");
// if (role === "admin" || role === "teacher") {
//     alert("Welcome");
// }
// else{
//     alert("Denied")
// }

//Перевірити чи користувач зареєстрований, перевірити його вік. Якщо він не зареєстрований, тоді він реєструється
// let login = confirm("Are you registered?");
// let age = Number(prompt("What is your age?"));
// if(login === true){
//     if(age >= 18){
//         alert("Welcome!");
//     }else{
//         alert("Denied");
//     }
// }else{
//     alert("Denied!");
// }

//Чи ти дитина, підліток чи школяр
// let age = Number(prompt("Enter your age"));
//
// if (age >= 18) {
//     alert("Дорослий");
// }
// if (age >= 13 && age <18) {
//     alert("Підліток")
// }
// if (age >= 6 && age < 13) {
//     alert("Школяр");
// }
// if (age < 6) {
//     alert("Дитина")
// }

// let age = prompt('Enter your age');
//
// if (age >= 18) {
//     alert('Access granted');
// }
// else if (age < 18 && age >= 16) {
//     let access = confirm('Do you have access?');
//     if (access) {
//         alert("Access granted");
//     }
//     else {
//         alert("Access denied");
//     }
// }

//Магазин дає знижку, якщо одночасно виконуються умови: Сума покупки >=1000, користувач зареєстрований, vip promokod
// let productName = prompt("Enter your product name");
// let productPrice = Number(prompt("Enter your product price"))
// let quantity = Number(prompt("Enter your quantity"));
//
// let sign = confirm("Are you signed in?")
// let promokod = prompt("Have promokod?")
// const promokodCheck = "sale";
// const salePrice = 0.1;
// let VIP = confirm("Status?")
//
// if (productPrice >= 100 && sign === true && (promokod === promokodCheck || VIP === true)) {
//     alert(`Price with sale:${productPrice*quantity - (productPrice*quantity)*salePrice}`)
// }
// else{
//     alert(`Price:${productPrice*quantity}`)
// }