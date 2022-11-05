// OPERADORES ARITMÉTICOS

// Soma: + (números)
const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // Saída: 15

// Contatenação (textos)
const num3 = "5";
const num4 = 10;
console.log(num3 + num4); // Saída: 510

// Subtração: -
console.log(num1 - num2); // Saída: 5

// Multiplicação
console.log(num1 * num2); // Saída: 50

// Exponenciação
console.log(num1 ** num2); // Saída: 9765625

// Resto da divisão
console.log(num2 % num1); // Saída:

// ORDEM DE PRECEDÊNCIA: () > ** > * / % > + -
console.log(num1 + num2 - num3 * num4 + (num1 - num4)); // Saída: -40

// OPERADOR DE INCREMENTO / DECREMENTO
let contador = 1;
contador++;
++contador;
contador--;
--contador

// OPERADORES DE ATRIBUIÇÃO
let count = 0;
count += 2;
count -= 1;
count *= 2;
count /= 2;
count **= 2;
console.log(count);

// NaN: Not a Number
const n1 = 10;
const n2 = "Tesla";
console.log(n1 * n2);

// Transformando string em numero
let n3 = '5';
n3 = parseInt(n3);
console.log(n3);
let n4 = '5.24';
n4 = parseFloat(n4);
console.log(n4);
n4 = Number(n4);
console.log(n4);