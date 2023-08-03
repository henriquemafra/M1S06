function somaImpares(arr) {
    return arr.reduce((acc, curr) => (curr % 2 !== 0 ? acc + curr : acc), 0);
  }
  
  module.exports = somaImpares;
  