const alunos = [
    { nome: 'João', nota1: 7.5, nota2: 8.0 },
    { nome: 'Maria', nota1: 9.0, nota2: 8.5 },
    { nome: 'Pedro', nota1: 6.0, nota2: 7.5 },
  ];

  
  const calcularMedia = (aluno) => (aluno.nota1 + aluno.nota2) / 2;
  
  
  const alunosComMedia = alunos.map((aluno) => ({
    nome: aluno.nome,
    media: calcularMedia(aluno),
  }));
  
  
  alunosComMedia.sort((a, b) => b.media - a.media);
  
  
  console.log(alunosComMedia);
  