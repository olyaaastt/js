// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@),  +
// наявність равлика,    +
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення) +
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// email = 'someeMAIL@gmail.com'
// let validatorEmail=(email)=> {
//
//     let emailX = email.toLowerCase()
//
//     let zzz = emailX.indexOf(".");//4
//     let zzr = emailX.indexOf("@");//10
//
//
//     if (emailX.includes("@") && (!emailX.startsWith("@")) && (zzz > zzr) && (zzz > zzr + 2))  {
//         console.log('correct email')
//     }
//     else {
//         console.log('wrong email')
//     }
//     return true
// }
// validatorEmail('someemail@gmail.com');
// validatorEmail('someeMAIL@gmail.com');
// validatorEmail('someeMAIL@i.ua');
// validatorEmail('some.email@gmail.com');




// - є масив
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

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sort = coursesArray.sort((c1, c2) => {
//     return c2.modules.length - c1.modules.length
// })
// console.log(sort);



//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// let str = 'Астрономия это наука о небесных объектах';
// let symb = "о";
// let count = (str, stringsearch) => {
//     let c = 0;
//     let pos = str.indexOf(stringsearch);
//
//     while (pos !== -1) {
//         c++;
//         pos = str.indexOf(stringsearch, pos + 1);
//     }
// return c;
//
// }
//
// document.writeln(count(str, symb))


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// let cutString =(str,n)=>{
//     return str.split (' ').splice(0,n).join(" ")
// }
//
// document.writeln(cutString(str, 5))


