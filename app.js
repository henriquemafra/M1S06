const readline = require('readline');
const somaArray = require('./somaArray');
const multiplicaArray = require('./multiplicaArray');
const calculaMedia = require('./calculaMedia');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Insira um array de números separados por espaço: ', (input) => {
  const arr = input.split(' ').map(Number);

  const sum = somaArray(arr);
  const multiplication = multiplicaArray(arr);
  const average = calculaMedia(arr);

  console.log('Array fornecido:', arr);
  console.log('Soma dos elementos:', sum);
  console.log('Multiplicação dos elementos:', multiplication);
  console.log('Média dos elementos:', average);

  rl.close();
});
