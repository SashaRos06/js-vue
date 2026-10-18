let courses = [
    {
    id: 1,
        title: 'Cooking Course',
        category: 'cooking',
        price: 2300,
        duration: 12,
        rating: 2,
        available: true
    },
    {
    id: 2,
        title: 'IT Course',
        category: 'IT',
        price: 3500,
        duration: 30,
        rating: 4,
        available: true
    },
    {
    id: 3,
        title: 'Art History Course',
        category: 'art',
        price: 4500,
        duration: 100,
        rating: 5,
        available: false
    },
    {
    id: 4,
        title: 'Drawing Lessons',
        category: 'art',
        price: 3700,
        duration: 25,
        rating: 3,
        available: true
    },
    {
    id: 5,
        title: 'English language Course',
        category: 'languages',
        price: 1000,
        duration: 5,
        rating: 2,
        available: true
    },
    {
    id: 6,
        title: 'UI/UX Course',
        category: 'IT',
        price: 4321,
        duration: 60,
        rating: 1,
        available: true
    },
    {
    id: 7,
        title: 'Italian language Course',
        category: 'languages',
        price: 2205,
        duration: 50,
        rating: 4,
        available: false
    },
    {
    id: 8,
        title: 'Data Analysis Course',
        category: 'IT',
        price: 2900,
        duration: 100,
        rating: 5,
        available: true
    }
]


let menu;
do {
    menu = +prompt('Оберіть опцію: ')

    switch (menu) {
        case 1:
            let userCourseId = +prompt('Введіть ID шуканого курсу: ');
            let foundCourseById = courses.find(course => course.id === userCourseId);
            if (foundCourseById !== undefined){
                alert(`Ваш шуканий курс: ${foundCourseById.title}`);
            } else{
                alert('Такий курс не знайдено');
            }
            break;

        case 2:
            let userCategory = prompt('Введіть шукану категорію курсів: ');
            let foundUserCourseByCategory = courses.filter(course => course.category === userCategory);
            if (foundUserCourseByCategory.length > 0){
                let foundCourseTitles = foundUserCourseByCategory.map(course => course.title).join(', ');
                alert(`Ваші шукані курси: ${foundCourseTitles}`);
            } else{
                alert('Таких курсів не знайдено');
            }
            break;


    }
} while(menu !== 0);