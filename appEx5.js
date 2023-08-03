const readline = require('readline');
const filtrarPares = require('./filtrarPares');
const somaImpares = require('./somaImpares');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Insira um array de números separados por espaço: ', (input) => {
  const arr = input.split(' ').map(Number);

  const numerosPares = filtrarPares(arr);
  const totalSomaImpares = somaImpares(arr);

  console.log('Array fornecido:', arr);
  console.log('Números pares:', numerosPares);
  console.log('Soma dos números ímpares:', totalSomaImpares);

  rl.close();
});
