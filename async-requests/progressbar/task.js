let filesForm = document.getElementById('form');
progress.value = 0;
filesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let forma = new FormData(filesForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded/event.total;
    }
    xhr.send(forma);
});
