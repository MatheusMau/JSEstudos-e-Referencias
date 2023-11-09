// 5- Crie uma função que retorne um novo array contendo apenas objetos com as seguintes propriedades específicas: idade maior que 30 anos e sexo masculino.
// 5- Create a function that returns a new array containing only objects with the following specific properties: age greater than 30 and male gender."

const exercise5 = [
    { name: "João", age: 30, gender: "male" },
    { name: "Maria", age: 25, gender: "female" },
    { name: "Carlos", age: 40, gender: "male" },
    { name: "Ana", age: 22, gender: "female" },
    { name: "Pedro", age: 35, gender: "male" },
    { name: "Mariana", age: 28, gender: "female" },
    { name: "Lucas", age: 29, gender: "male" },
    { name: "Laura", age: 27, gender: "female" },
    { name: "Gustavo", age: 32, gender: "male" },
    { name: "Isabela", age: 24, gender: "female" },
  ];
  
const newExercise5 = exercise5.filter((element => element.age > 30 && element.gender === "male"));
console.log(newExercise5 )