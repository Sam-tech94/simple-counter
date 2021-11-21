// DOM Elements
const add = document.getElementById("increment");
const remove = document.getElementById("decrement");
const int = document.querySelector("#number");

let integer = 1;

add.addEventListener("click", () => {
    integer += 1;

    int.innerHTML = integer;
});

remove.addEventListener("click", () => {
    integer -= 1;

    int.innerHTML = integer;
});