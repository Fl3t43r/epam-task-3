const movies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
console.log("Movies:");
movies.forEach(movie => console.log(movie));

const carManufacturers = ["Toyota", "Honda", "Ford"];
const carManufacturersString = carManufacturers.join(',');
const carManufacturersArray = carManufacturersString.split(',');
console.log("\nCar Manufacturers Array:", carManufacturersArray);

const friends = ["Alice", "Bob", "Charlie"];
const greetings = friends.map(friend => "Hello " + friend);
console.log("\nGreetings:", greetings);

const numericArray = [0, 1, 2, 3, 4];
const booleanArray = numericArray.map(num => Boolean(num));
console.log("\nBoolean Array:", booleanArray);

const originalArray = [1, 6, 7, 8, 3, 4, 5, 6];
const descendingArray = originalArray.sort((a, b) => b - a);
console.log("\nDescending Array:", descendingArray);

const filteredArray = originalArray.filter(num => num > 3);
console.log("\nFiltered Array:", filteredArray);

function findIndex(arr, num) {
    return arr.indexOf(num);
}
console.log("\nIndex of 5 in [1,6,7,8,3,4,5,6]:", findIndex(originalArray, 5));

let a = 0;
console.log("\nLoop printing 'a' until less than 10:");
while (a < 10) {
    console.log("a:", a);
    a++;
}

console.log("\nPrime numbers:");
for (let i = 2; i <= 20; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

console.log("\nOdd numbers:");
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}