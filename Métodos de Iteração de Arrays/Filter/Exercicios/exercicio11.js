//11 - Filtrar por gênero:
//Crie uma função que receba uma lista de objetos representando pessoas (com propriedades como nome e gênero) e um gênero específico.
//A função deve retornar um novo array contendo apenas as pessoas do gênero especificado.

//11 - Filter by genre:
//Create a function that receives a list of objects representing people (with properties such as name and gender) and a specific gender.
//The function must return a new array containing only people of the specified gender.


const exercise11 = [
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
  

  const newExercise11 = exercise11.filter((element)=> element.gender === "female");
  console.log(newExercise11)

