let value = document.querySelector('.dropdown__value');
let drop = document.querySelector('.dropdown__list');
let dropItems = Array.from(document.querySelectorAll('.dropdown__item'));
let dropLinks = document.querySelectorAll('.dropdown__link');

function dropThisShit() {
   drop.style.display = "block";
}

dropItems.forEach(link => {
   link.addEventListener('click', function(event) {
      event.preventDefault();
      value.textContent = link.textContent;
      drop.className = "dropdown__list";
      drop.style.display = "none";
   });
});

value.addEventListener('click', dropThisShit);

//Отладка
/*console.log(dropLinks);
console.log(value);
console.log(drop);
console.log(dropItems);*/
