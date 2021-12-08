// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
//
// let btn = document.getElementById('btn');
//
// let {name, age} = document.forms.form;
//
// function data(name, age) {
//     let input = {name: name, age: age};
//
//     localStorage.setItem('informationFromInput', JSON.stringify(input));
// }
//
// btn.onclick = function () {
//     data(name.value, age.value);
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

//
// let btn1 = document.getElementById('btn1');
// let { model, type, volume } = document.forms.car;
//
//
//  function data (model, type, volume ){
//
//      let arr = JSON.parse(localStorage.getItem('key1')) || [];
//      arr.push({model,type,volume});
//      localStorage.setItem('key1',JSON.stringify(arr));
//
// }
// btn1.onclick=function (){
//      data(model.value,type.value,volume.value)
//
// };