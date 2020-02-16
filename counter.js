document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").onclick = count;
    document.querySelector(".reload").onclick = reload;
});

let counter = 0;
const count = () => {
    counter++;
    document.querySelector('.count').innerHTML = counter;
}

const reload = () => {
    location.reload();
    return false;
}



