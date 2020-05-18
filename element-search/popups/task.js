let modmain = document.getElementById('modal_main');
let modsuccess = document.getElementById('modal_success');
let clouse = document.querySelector('.modal__close');


clouse.addEventListener('click', function(){
    modmain.style.display = "none";
    modsuccess.style.display = "none";
});

modmain.onclick = function() {
    modsuccess.style.display ="block";
    modmain.style.display = "none";
}

modsuccess.onclick = function() {
    modsuccess.style.display = "none";
}
