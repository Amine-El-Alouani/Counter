const CountArea = document.querySelector('.count');
const plus = document.querySelector('.plus');
const moins = document.querySelector('.moins');
let count = 0;

//Events 

plus.addEventListener('click', function () {
    count++;
    CountArea.textContent = count;
})

moins.addEventListener('click', function () {
    count--;
    CountArea.textContent = count;
})