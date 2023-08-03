function calculaMedia(arr) {
    const soma = arr.reduce((acc, curr) => acc + curr, 0);
    return soma / arr.length;
  }
  
  module.exports = calculaMedia;
  