// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар



const goods = JSON.parse(localStorage.getItem('key'));
let a = document.createElement('div');

document.body.appendChild(a);
for (let item of goods) {





    let btn1 = document.createElement('button');
     btn1.innerText = 'delete'
    let div = document.createElement('div');
     div.classList =  'block';
    div.innerHTML =`  <h4>name : ${item.name}</h4>
                      <h5>price:  ${item.price}</h5>
                       <p>count: ${item.count} </p>
                      <img src="${item.photo}">  `;




    a.appendChild(div);
    div.appendChild(btn1)


    btn1.onclick = function (e){
        btn1.disabled = true
       e.preventDefault()

        let date = new Date()

        let key = JSON.parse(localStorage.getItem('key'));
       if (date.getTime()) {
           key.splice(key, 1);
       }
        localStorage.setItem('key',JSON.stringify(key))
    }

}

let btn = document.getElementById('btn');

btn.onclick = function () {


    localStorage.removeItem('key')
  document.body.removeChild(a);

}
