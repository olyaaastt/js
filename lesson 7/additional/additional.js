// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street: street, suite: suite, city: city, zipcode: zipcode,
//       geo:{lat:lat, lng:lng}
//     }
//     this.phone = phone;
//     this.website= website;
//     this.company = {
//      name:companyName, catchPhrase:catchPhrase,bs:bs
//     }
//
// }
//  user1 = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough',
//     '92998-3874','-37.3159', '81.1496', '1-770-736-8031 x56442','hildegard.org','Romaguera-Crona',
//     'Multi-layered client-server neural-net','harness real-time e-markets')
// console.log(user1);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }



// class Tags {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let attrsA = [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}];
//
//
// let attrsDiv=[{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]
//
// let attrsH1 = [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'}]
//
//
// let attrsSpan = [{titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра.'},
// {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента.'}]
//
// // -select
//
// let attrsInput = [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением'}]
//
// let attrsForm = [{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'}
// ]
//
//
// let attrsOption = [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}]
//
//
//
// let attrsSelect = [ {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}];
//
//
// let tagA = new Tags('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',
//     attrsA);
// console.log(tagA);
//
//
// let tagDiv = new Tags('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
//     attrsDiv )
// console.log(tagDiv);
//
//  let tagH1=new Tags("<h1>",'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше.',
//      attrsH1);
//
// console.log(tagH1);
//
//
// let tagSpan = new Tags('<span>','Тег <span> предназначен для определения строчных элементов документа.',attrsSpan);
// console.log(tagSpan);
//
// let tagInput = new Tags('<input>','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ',
//     attrsInput);
// console.log(tagInput);
//
// let tagForm = new Tags('<form>','Тег <form> устанавливает форму на веб-странице',attrsForm);
// console.log(tagForm);
//
// let tagOption = new Tags('<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     attrsOption);
// console.log(tagOption);
//
// let tagSelect = new Tags('<select>','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее',
//     attrsSelect);
// console.log(tagSelect);