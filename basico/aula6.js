// UTILIZANDO VARIÁVEIS

/**
 * Não podemos criar variáveis com palavras reservadas
 * Variáveis precisam ter nomes significativos
 * Não pode começar o nome de variável com um número
 * Não podem conter espaços ou traços
 * Utilizamos camelCase
 * Case-sensitive
 * Não podemos redeclarar variáveis com let
 * Não utilizar VAR, utilizar LET
 */

// Declarando variável
let time;
// Inicializando variável  
time = "Flamengo"; 

// Reescrevendo variável
let cor = "Azul";
cor     = "Rosa";

let nome         = 'Gabriel';
let nascimento   = 1999;
let naturalidade = "Caicó/RN";

console.log(nome + " nasceu em " + nascimento + ", na cidade de " + naturalidade);
console.log(`${nome} nasceu em ${nascimento}, na cidade de ${naturalidade}`);

// UTILIZANDO CONSTANTES

const pessoas   = 100;
const opcoes    = 2;
const resultado = pessoas * opcoes;
const texto     = "100";
console.log(resultado);

// Verificando to tipo da variavel
console.log(typeof(pessoas));
console.log(typeof(texto));
console.log(typeof(texto + pessoas)); // O node interpreta como string