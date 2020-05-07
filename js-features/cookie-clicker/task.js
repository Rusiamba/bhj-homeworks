const x = document.getElementById("cookie");
const i = document.getElementById("clicker__counter");

let y = {};
y.count = 0;

x.addEventListener("click", function() {
    y.count++;
    x.width = 250;
    clicker__counter.innerHTML = y.count;
});
