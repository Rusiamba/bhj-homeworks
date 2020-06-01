let pt = document.getElementById('poll__title');
let pa = document.getElementById('poll__answers');
let str = '';
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
xhr.addEventListener('readystatechange', function () {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let txt = JSON.parse(this.responseText);
        pt.insertAdjacentText("afterbegin", txt.data.title);
        for (let i = 0; i < txt.data.answers.length; i++) {
            str += `<button class='poll__answer'>${txt.data.answers[i]}</btn>`
        }
        pa.insertAdjacentHTML("afterbegin", str);
    }

    let buttnAns = document.querySelectorAll('.poll__answer')
    buttnAns.forEach(arr => {
        arr.onclick= function () {
            alert('Спасибо, ваш голос засчитан!')
        }
    });
});
xhr.send();
