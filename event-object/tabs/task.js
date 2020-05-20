window.onload = function() {
    document.querySelector('.tab__navigation').addEventListener('click', fTabs);

    function fTabs(event) {
        console.log(event);
        if(event.target.className == 'tab') {
            let dataTab = event.target.getAttribute('data-tab');
            let tabBody = document.getElementsByClassName('tab__content');
            for(let i = 0; i < tabBody.length; i++) {
                if(dataTab==i) {
                    tabBody[i].style.display = 'block';
                }
                else {
                    tabBody[i].style.display = 'none';
                }
            }
        }
    }
    
    let ind = document.querySelector('.tab_active');
    let indCont = document.querySelector('.tab__content_active');

    ind.addEventListener('click', function(){
        indCont.style.display = "block";
    });
    
}
