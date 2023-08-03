class Veiculo {
    constructor(marca, ano) {
      this.marca = marca;
      this.ano = ano;
    }
  
    obterDetalhes() {
      return `Veículo: Marca - ${this.marca}, Ano - ${this.ano}`;
    }
  }
  
  class Carro extends Veiculo {
    constructor(marca, ano, portas) {
      super(marca, ano);
      this.portas = portas;
    }
  
    obterDetalhes() {
      return `Carro: Marca - ${this.marca}, Ano - ${this.ano}, Número de portas - ${this.portas}`;
    }
  }

  const carro1 = new Carro('Toyota', 2022, 4);
  
  console.log(carro1.obterDetalhes());
  