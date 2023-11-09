// 6 - Retorne uma array de pessoas,  cujo nome termina com a letra "A"; //endsWith
// 6- Return an array of people, whose name ends with the letter "A";

const exercise6 = ["Amanda", "Karoline", "Carol", "Fernanda", "Jaine", "Alax", "Thais", "Maycon", "Jaaziel", "Luana", "Ilana", "David"];

const newExercise6 = exercise6.filter((element)=> element.toLowerCase().endsWith("a"));
console.log(newExercise6)