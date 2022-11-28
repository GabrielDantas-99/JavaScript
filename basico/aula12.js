// Objeto Math

let n1 = 9.51251;

let n2 = Math.floor(n1); // Arredonda para baixo
console.log("Para baixo: " + n2);

let n3 = Math.ceil(n1); // Arredonda para cima
console.log("Para cima: " + n3);

let n4 = Math.round(n1); // Arredonda para o valor inteiro mais proximo
console.log("Inteiro mais proximo: " + n4);

console.log("Máximo: " + Math.max(412, 123, 3213, 5123, -123, -5123, 151, 1, -512));

console.log("Mínimo: " + Math.min(412, 123, 3213, 5123, -123, -5123, 151, 1, -512));

console.log("Número aleatório entre 0 e 1: " + Math.random());

// Customizando um numero aleatorio
const aleatorio = Math.random() * (10 - 5) + 5; // Pode ser englobado pela função Math.round()
console.log("Aleatório: " + aleatorio);

console.log(Math.pow(2, 10)); // Potenciação: 2 elevado a 10 ( 2 ** 10)

// Raiz quadrada
let num1 = 25;
console.log(num1 ** 0.5);


