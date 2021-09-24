let num = prompt("Введите числитель");
let denom = prompt("Введите знаменатель");
if (isNaN(num) || isNaN(denom))
  alert("Числитель и знаменатель должны быть числами");
else {
  if (num == 0 || denom == 0) alert("Числа не должны быть равными 0");
  else {
    while (num != denom) {
      document.write("(" + num + ";" + denom + ")=");
      if (num > denom) num -= denom;
      else denom -= num;
    }
    document.write(num);
  }
}
