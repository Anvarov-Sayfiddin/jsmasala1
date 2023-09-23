let elUser = document.querySelector(".title");

let number = prompt("pulingizni kiriting");

let dollar = 750 * 12250;
let yevro = 120 * 13005;

let all = dollar + yevro;

if (all <= number) {
    elUser.textContent = "Oq yo'l Alisher"
}else{
    elUser.textContent = "Alisher ozgina sabr qilish kere";
}

console.log(all);