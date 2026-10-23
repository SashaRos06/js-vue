// //document об'єкт за допомогою якого через дом структуру можна звертатися до елементів "дерева" нашого html
// // document.querySelector('h1') Звертаємося до селектора
// let heading = document.querySelector('h1');
// console.log(heading) //<h1 id="profile_name">Ім'я учня</h1>
// //Перевага id - один об'єкт до одного елемента
// let nameElement = document.getElementById('profile_name');
// let profileElement = document.getElementsByClassName('profile_role'); //Багато різних елементів для одного класу
// let skills = document.querySelectorAll('.skill');
// //querySelectorAll повертає масив значень, для його перебору використовуємо цикл
// for (let skill of skills){
//     console.log(skill)
// }
//
// nameElement.textContent = nameElement.innerText = "Надійка"; //textContent - функція, що замінює зміст об'єкта

let student = {
    name: "Надійка",
    role: "ліцеїстка 11 IT класу",
    city: "Київ",
    portfolio: "https://github.com",
};
let nameElement = document.querySelector("#profile_name");
let roleElement = document.querySelector(".profile_role");
let cityElement = document.querySelector("#profile_city");
let portfolioElement = document.querySelector("#profile_link");

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.innerHTML = student.city; //innerHTML може змінювати структуру
// portfolioElement.textContent = student.portfolio;
// portfolioElement.innerHTML = student.portfolio;
portfolioElement.setAttribute("href", student.portfolio);
portfolioElement.setAttribute("title", "Відкрити портфоліо");


let skills = document.querySelectorAll(".skill");
skills[0].textContent = "HTML";
skills[1].textContent = "CSS";
skills[2].textContent = "Javascript";

//querySelector
//querySelectorAll
//getElementById
//getElementsByClassName

