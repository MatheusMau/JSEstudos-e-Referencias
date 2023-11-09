//7 - Filtrar números primos:
//Crie uma função que receba uma lista de números e retorne um novo array contendo apenas os números primos da lista.
//Create a function that takes a list of numbers and returns a new array containing only the prime numbers in the list.

const exercise7 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const isPrime = (number) => {
    if(number <=1){ // < ou = a 1, não é primo
        return false 
    }
    for (let i =2; i < number; i++){
        if(number % i === 0){
            return false  // O número é divisível por outro número, não é primo.
        }
    }
    return true // O número é primo.
}


const primeNumbers = exercise7.filter((element) => isPrime(element));
console.log(primeNumbers)


