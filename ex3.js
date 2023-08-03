class Livro {
    constructor(titulo, autor, anoPublicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
    }
  
    obterInformacoes() {
      return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    }
  }
  
  const livro1 = new Livro('A Guerra dos Tronos', 'George R. R. Martin', 1996);
  const livro2 = new Livro('O Senhor dos Anéis', 'J. R. R. Tolkien', 1954);
  const livro3 = new Livro('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', 1997);
  
  console.log(livro1.obterInformacoes());
  console.log(livro2.obterInformacoes());
  console.log(livro3.obterInformacoes());
  