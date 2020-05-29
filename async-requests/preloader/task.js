let itmInf = document.getElementById('items');
let string;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', true);
xhr.addEventListener('readystatechange', function () {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText)['response']['Valute']
        const logo = document.getElementById('loader');
        logo.classList.remove('loader_active');
        for (let keys in data) {
            string = `<div class="item">
            <div class="item__code">${data[keys].CharCode}</div><div class="item__value">${data[keys].Value}</div><div class="item__currency">руб.</div></div>`
            itmInf.insertAdjacentHTML("beforeend", string);
        }
    }
});

xhr.send();
