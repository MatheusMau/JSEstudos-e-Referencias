
//06 - Retornar a pessoa mais velha:
//Crie uma função que receba uma lista de objetos representando pessoas (com propriedades como nome e idade) e retorne o objeto da pessoa mais velha.

//06 - Return the oldest person:
//Create a function that receives a list of objects representing people (with properties such as name and age) and returns the oldest person's object.


const exercise12 = [
  { name: "João", age: 25 },
  { name: "Maria", age: 20 },
  { name: "Pedro", age: 30 },
  { name: "Ana", age: 22 },
  { name: "José", age: 27 },
  { name: "Fabiana", age: 29 },
  { name: "Carlos", age: 23 },
  { name: "Clara", age: 21 },
  { name: "Gustavo", age: 31 },
  { name: "Bruna", age: 26 },
  { name: "Luiz", age: 28 },
  { name: "Letícia", age: 24 },
  { name: "Daniel", age: 32 },
  { name: "Eduarda", age: 19 },
  { name: "Rafael", age: 22 },
  { name: "Amanda", age: 20 },
  { name: "Felipe", age: 30 },
  { name: "Bianca", age: 22 },
  { name: "Matheus", age: 27 },
  { name: "Julia", age: 29 },
  { name: "Thiago", age: 23 },
  { name: "Camila", age: 21 },
  { name: "Guilherme", age: 31 },
  { name: "Carolina", age: 26 },
  { name: "Arthur", age: 28 },
  { name: "Isabella", age: 24 },
  { name: "Yuri", age: 32 },
  { name: "Valentina", age: 19 },
];

const pessoaMaisVelha = exercise12.reduce((pessoaMaisVelha, pessoaAtual) => {
  if (pessoaAtual.age > pessoaMaisVelha.age) {
      return pessoaAtual;
  }
  return pessoaMaisVelha;
});

console.log(pessoaMaisVelha);

/////
const idadeMaxima = Math.max(...exercise12.map(pessoa => pessoa.age));

const pessoasMaisVelhas = exercise12.filter(pessoa => pessoa.age === idadeMaxima);

console.log(pessoasMaisVelhas);