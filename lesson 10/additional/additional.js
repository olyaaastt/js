// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// document.onclick = function (e){
//     console.log('назва тегу: '+ e.target.localName);
//     console.log('список класів: ' + e.target.classList.value);
//     console.log('список ід: ' + e.target.id);
//     console.log('розміри: ' + e.target.clientHeight +'*  '+  e.target.clientWidth );
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина



// document.onclick = function (e) {
//
//
//    let a =  document.getElementsByClassName('popup')[0]
//     a.classList.toggle('show-popup');
//    a.innerText =`   назва тегу:   ${ e.target.localName} \n  список класів: ${e.target.classList.value}
//          список ід:  ${ e.target.id}  \n  розміри: ${ e.target.clientHeight } * ${ e.target.clientWidth}`
//
// };













