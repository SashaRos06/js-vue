let eventChoice;
let basePrice = 0;
let eventName = '';

while (true) {
    eventChoice = +prompt(`Оберіть тип події:
    — Кіно (1)
    — Театр (2)
    — Концерт (3)`);

    switch (eventChoice) {
        case 1:
            eventName = 'Кіно';
            basePrice = 150;
            break;
        case 2:
            eventName = 'Театр';
            basePrice = 220;
            break;
        case 3:
            eventName = 'Концерт';
            basePrice = 350;
            break;
        default:
            alert('Неправильний номер події. Спробуйте ще раз.');
            continue;
    }
    break;
}


let dayType;
while (true) {
    dayType = +prompt(`Оберіть тип дня:
    — Будній
    — Вихідний`);
    if (dayType === 1 || dayType === 2) {
        break;
    }
    alert('Неправильний тип дня. Спробуйте ще раз.');
}

if (dayType === 2) {
    basePrice = basePrice * 1.15;
}


let ticketCount;
while (true) {
    ticketCount = +prompt('Введіть кількість квитків: ');
    if (ticketCount >= 1 && ticketCount <= 6 && !Number.isNaN(ticketCount)) {
        break;
    }
    alert('Некоректна кількість квитків. Спробуйте ще раз.');
}



let processedTickets = 0;
let freeTickets = 0;
let discountedTickets = 0;
let fullPriceTickets = 0;
let totalPrice = 0;

for (let i = 1; i <= ticketCount; i++) {
    let age;

    while (true) {
        age = +prompt(`Введіть вік глядача (або введіть -1 для завершення): `);
        if (age === -1) {
            break;
        }
        if (!Number.isNaN(age) && age >= 0 && age <= 120) {
            break;
        }
        alert('Некоректний вік. Спробуйте ще раз.');
    }
    if (age === -1) {
        break;
    }
    processedTickets++;
    let currentTicketPrice = basePrice;
    let isFree = false;

    if (age >= 0 && age <= 5) {
        freeTickets++;
        isFree = true;
    } else if (age >= 6 && age <= 12) {
        currentTicketPrice = basePrice * 0.50;
        discountedTickets++;
    } else if (age >= 13 && age <= 17) {
        currentTicketPrice = basePrice * 0.80;
    } else if (age >= 18 && age <= 59) {
        if (age >= 18 && age <= 25) {
            let hasStudentCard = confirm('Чи є у вас студентський квиток?');
            if (hasStudentCard) {
                currentTicketPrice = basePrice * 0.90;
                discountedTickets++;
            } else {
                fullPriceTickets++;
            }
        } else {
            fullPriceTickets++;
        }
    } else if (age >= 60) {
        currentTicketPrice = basePrice * 0.75;
        discountedTickets++;
    }
    if (isFree) {
        continue;
    }
    totalPrice += currentTicketPrice;
}

if (totalPrice > 1000) {
    totalPrice = totalPrice * 0.95;
}

console.log(`Кількість оброблених квитків: ${processedTickets}`);
console.log(`Кількість безкоштовних квитків: ${freeTickets}`);
console.log(`Квитки зі знижкою: ${discountedTickets}`);
console.log(`Квитки за повною ціною: ${fullPriceTickets}`);
console.log(`Загальна сума: ${totalPrice} грн`);