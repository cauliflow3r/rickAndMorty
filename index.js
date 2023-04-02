// Import stylesheets
// import './style.css';

// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/

let rick = "https://rickandmortyapi.com/api/character";
let list = document.querySelector(".list");

fetch(rick)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((elem) => {
      list.innerHTML += `
        <li>
        <img src ="${elem.image}"
        <b>${elem.name}</b>
        </li>
        `;
    });
  });
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

// fetch(rick).then(res => res.json()).then(data => {
//   fetch('http://localhost:8000/characters', {
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data.results)
//   })
// })
/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.*/

let list2 = document.querySelector(".list2");

fetch("http://localhost:8000/characters", {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
})
  .then((respnose) => respnose.json())
  .then((data) => {
    data.forEach((elem) => {
      list2.innerHTML += `
    <li>
    <img src ="${elem.image}"
    <b>${elem.name}</b>
    </li>
    `;
    });
  });

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
