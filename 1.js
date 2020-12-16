let b = 0;

for (b = 0; b < 5; b++) {
    alert(b);
}

alert(b);

let sum = 0;
while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break;
    sum += value;
}
alert('Сумма: ' + sum); 

let amount = 1;
while (true) {
    let a = Number(prompt("Введите число", ''))
    if (!a) break;
    amount += a;
}
alert('Сумма: ' + amount);