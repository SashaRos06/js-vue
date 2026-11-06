//click - за натисканням
//input - за вводом тексту
//change - за зміною значень в select option
//toggle - перевіряє клас (був display:none )
//contains - true або false -> опрацьовуємо інформацію



let enrollBtn = document.querySelector("#enrollBtn");
let status = document.querySelector("#status");
//НЕ можна створювати декілька обробників на одну подію
enrollBtn.addEventListener("click", function() {
    // alert("You clicked!");
    status.textContent = "Ви успішно записані на курс!";
    status.classList.add("success"); //замінюємо клас стилю
    enrollBtn.textContent = "Запис оформлено";
});
// enrollBtn.addEventListener("click", alert("You clicked!"));-наслідок викликаний без вказаної дії


let studentsName = document.querySelector("#studentsName");
let welcome = document.querySelector("#welcome");

studentsName.addEventListener("input", function() {
    let name = studentsName.value.trim();
    if (name === ""){
        welcome.textContent = "Вітаємо, гостю!"
    } else {
        welcome.textContent = "Вітаємо, " + name + "!";
    }
});


let format = document.querySelector("#format");
let price = document.querySelector("#price");

format.addEventListener("change", function() {
    let selectPrice = Number(format.value);
    price.textContent = selectPrice + "грн";
});


let detailBtn = document.querySelector("#detailBtn");
let details = document.querySelector("#details");

detailBtn.addEventListener("click", function() {
    details.classList.toggle("hidden");
    if (details.classList.contains("hidden")) {
        detailBtn.textContent = "Показати опис";
    } else {
        detailBtn.textContent = "Приховати";
    }
});


let card = document.querySelector("#card");
let themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function() {
    card.classList.toggle("dark");
    if (card.classList.contains("dark")) {
        themeBtn.textContent = "Світла тема";
    } else {
        themeBtn.textContent = "Темна тема";
    }
});