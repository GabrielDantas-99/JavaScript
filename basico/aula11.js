// Formatando número
let n1 = 10.15123514;
console.log(`Valor arredondado: ${n1.toFixed(2)}`);

// Verificando se um numero é inteiro
console.log(`É inteiro: ${Number.isInteger(n1)}`);

// Verificando se é um NaN (Not a Number)
console.log(`É NaN: ${Number.isNaN(n1)}\n`);

// Forma errada de somar decimais
let n2 = 0.7;
let n3 = 0.1;

n2 += n3; // 0.8
n2 += n3; // 0.9
n2 += n3; // 1.0

console.log(`Tentando somar 0.7 + 0.3: ${n2}`); // Saída: 0.99999999

// Forma errada: 
console.log(`Forma errada: ${n2.toFixed(2)} (.toFixed())`);
console.log(`É inteiro: ${Number.isInteger(n2)} (Forma errada)`);
n2 = parseInt(n2.toFixed(2));
console.log(`Forma Certa: ${n2} (parseInt())`);
n2 = Number(n2.toFixed(2));
console.log(`Segunda Certa: ${n2} (Number())`);

