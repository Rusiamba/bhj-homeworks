const x = document.getElementById("cookie");
const i = document.getElementById("clicker__counter");

let y = {};
y.count = 0;

x.addEventListener("click", function() {
    y.count++;
    if (x.width === 250) {
        x.width = 200;
    } else if (x.width === 200) {
        x.width = 250;
    }
    clicker__counter.innerHTML = y.count;
});
