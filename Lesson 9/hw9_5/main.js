// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let div = document.createElement('div');
for (let course of coursesArray) {
    let divCourse = document.createElement('div');
    divCourse.classList.add('course');

    let divTitle = document.createElement('div');
    divTitle.classList.add('title');
    divTitle.innerText = course.title;

    let divMounthHour = document.createElement('div');
    divMounthHour.classList.add('MounthHour');

    let divMounthDuration = document.createElement('div');
    divMounthDuration.classList.add('mounthDuration');
    divMounthDuration.innerText = `${course.monthDuration} mounth`;
    let divHourDuration = document.createElement('div');
    divHourDuration.classList.add('hourDuration');
    divHourDuration.innerText = `${course.hourDuration} hour`;


    let divModules = document.createElement('div');
    divModules.classList.add('modules');

    for (let module of course.modules) {
            let li = document.createElement('li');
            li.innerText = module;
            divModules.appendChild(li);
    }
    divMounthHour.append(divMounthDuration, divHourDuration);
    divCourse.append(divTitle, divMounthHour, divModules);
    div.appendChild(divCourse);

//     for (let user of users) {
//     let li = document.createElement('li');
//     li.classList.add('user');
//     li.innerText = user.name;
//     allUsersDiv.appendChild(li)
// //
// // }

}
document.body.appendChild(div);