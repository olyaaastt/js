// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар



let btn = document.getElementById('btn');
let { name, count, price, photo } = document.forms.f1;
 function shop( name, count, price, photo) {
     let r = new Date();
     let id = r.getTime()
     let arr = JSON.parse(localStorage.getItem('key'))|| [] ;
     arr.push({id,name, count, price, photo});
     localStorage.setItem('key',JSON.stringify(arr));

 }
btn.onclick=function (){


    shop( name.value, count.value, price.value, photo.value)
};