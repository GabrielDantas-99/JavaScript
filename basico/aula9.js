// Strings são indexáveis

// Buscando posição do caractere
//               012345678
let umaString = "O rato roeu a roupa";
console.log(umaString[3]);
// Outra forma seria:
console.log(umaString.charAt(6));

// Buscando o index do texto
console.log(umaString.indexOf("texto"));
// Buscando a partir de um index
console.log(umaString.indexOf('o', 3));

// Busca de tras pra frente
console.log(umaString.lastIndexOf('m', 2));

// Retorna todas as letras minúsculas utilizando expressões regulares
console.log(umaString.match(/[a-z]/g)); // com o 'g' retorna um array

// Retorna o indice da expressao
console.log(umaString.search(/[a-z]/g)); // sem o g retorna os detalhes

// Substitui strings
console.log(umaString.replace('Um', 'Outro')); 

// Retornando o tamanho da string
console.log(umaString.length); 

// Separando string
console.log(umaString.slice(1, 6));
console.log(umaString.slice(-5)); // De tras pra frente
console.log(umaString.slice(-5, umaString.length - 1)); 

// Mesma funcao do slice
console.log(umaString.substring(umaString.length - 7)); 

// Separando strings de acordo com algum tipo de sinal
console.log(umaString.split(' '));
console.log(umaString.split(' ', 3)); // Definindo a qntd de strings a retornar

// String para maiuscula
console.log(umaString.toUpperCase());

// String para minuscula
console.log(umaString.toLowerCase());

let carros = ["gol", "palio", "fiesta"]
carros.push("hb29");
console.log(carros)



