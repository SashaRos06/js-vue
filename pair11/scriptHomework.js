let clubs = [
    {
        id: 1,
        name: "Art Club",
        category: "art",
        price: 1200,
        members: 3,
        active: true
    },
    {
        id: 2,
        name: "Skilful Hands Club",
        category: "art",
        price: 450,
        members: 7,
        active: false
    },
    {
        id: 3,
        name: "Volleyball Club",
        category: "sport",
        price: 500,
        members: 24,
        active: true
    },
    {
        id: 4,
        name: "IT Club",
        category: "IT",
        price: 1234,
        members: 10,
        active: true
    },
    {
        id: 5,
        name: "Gomodospodarki Club",
        category: "cooking",
        price: 350,
        members: 5,
        active: false
    }
];
/*1 - Показати всі гуртки
2 - Знайти гурток за ID
3 - Записати учасника
4 - Змінити статус набору
5 - Додати новий гурток
6 - Показати статистику
0 - Вихід */
let menu;
while (menu !== 0){
    let menu = +prompt("Enter your choice: ");

    switch (menu) {
        case 1:
            if (clubs.length !== 0) {
                clubs.forEach(function(club) {
                    alert(`назва: ${club.name},
    напрям: ${club.category},
    ціна: ${club.price},
    кількість учасників: ${club.members},
    статус: ${club.active}`);
                })
            } else{
                alert("Каталог порожній");
            }
            break;

        case 2:
            let clubNumber = +prompt("Enter your club Number: ");
            let idClubNumber = null;
            for (let club of clubs) {
                if (club.id === clubNumber) {
                    alert(`назва: ${club.name},
    напрям: ${club.category},
    ціна: ${club.price},
    кількість учасників: ${club.members},
    статус: ${club.active}`);
                    idClubNumber = club.id;
                    break;
                }
            }
                if (idClubNumber == null) {
                    alert("Гурток з таким ID не знайдено");
                }
            break;

        case 3:
            let clubNumberForNewClub = +prompt("Enter your club Number you want to join: ");
            let idClubNumberForNewClub = null;
            for (let club of clubs) {
                if (club.active === true && club.id === idClubNumberForNewClub) {
                    if (confirm("Do you want to add club?") === true) {
                        club.members++;
                    } else{
                        alert("Такого клубу не існує. Спробуй інший")
                        break;
                    }
                }
            }
            break;

        case 4:
            let activeClubNumber = +prompt("Enter your club Number: ");
            for (let club of clubs) {
                if (club.active === true) {
                    if (confirm("Do you want to close the registration process?") === true) {
                        club.active = false;
                        alert("Membership sign-ups are closed")
                    } else {
                        break;
                    }
                }
            }
            break;

        case 5:
            let newClubName = +prompt("Enter your new club Name: ");
            let newClubCategory = prompt("Enter your new club Category: ");
            let newClubPrice = +prompt("Enter your new club Price: ");
            let newClubMembersCount = +prompt("Enter your new club Members count: ");
            let newClubNumber = clubs.length++;
            clubs.push({
                id: newClubNumber,
                name: newClubNumber,
                category: newClubCategory,
                price: newClubPrice,
                members: newClubMembersCount,
                active: true
            })
            break;

        case 6:
            let activeClubs = 0;
            let summeryCountOfMembers = 0;
            let summeryPricesOfClasses = 0;
            clubs.forEach(function(club) {
                if (club.active === true) {
                    activeClubs++;
                }
                summeryCountOfMembers += club.members;
                summeryPricesOfClasses += club.price;
            })
            alert(`Загальна кількість гуртків: ${clubs.length}
    Кількість активних гуртків: ${activeClubs},
    Сумарна кількість учасників: ${summeryCountOfMembers},
    Cередня вартість занять: ${summeryPricesOfClasses/clubs.length}`);
            break;

        case 0:
            break;

        default:
            alert("That option isn't available. Please try again")
            break;
    }
}