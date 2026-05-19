// let result = "";
// for (let i = 1; i < 8; i++) {
//     result = result + "#";
//     console.log(result);
// }

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// console.log(7%2)
// console.log(30%3)

// console.log("first man\n Second man")


// let chessBoard = "";
// for (let i = 0; i < 8; i++) {
//     let line = "";
//     for (let j = 0; j < 8; j++) {
//         if ((i + j) % 2 === 0) {
//             line = line + " ";
//         } else {
//             line = line + "#";
//         }
//     }
//     chessBoard = chessBoard + line + "\n";
// }
// console.log(chessBoard)

// switch ("") {
//     case "": 
//     console.log(first)
//     break
// }


// const calc = birthYear => 2037 - birthYear;

// const roundTo = (n, step) => {

// }

// function greet (who) {
//     console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye")

/*
function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + "came first")
console.log(egg() + "came first")
*/

// function square (x) {
//     return x**2; 
// }
// // console.log(square(4, true, "hedgehog"))
// console.log(square(true, false, "hedgehog"))
// // console.log(4,6)

/*
function add(a, b) {
    return a + b
}
console.log(add(5));
*/
/*
function minus(a, b = 0) {
    if (b === undefined) 
        return -a;
    else 
        return a - b
}
console.log(minus(10));
// console.log(minus(10, 5));
// console.log(minus(5, 10));
*/

/*
function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

// console.log(roundTo(4.5))
console.log(roundTo())
// console.log(roundTo(1)) */

/* closure function */
// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

/*
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(0)); */


// function power (base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1)
//     }
// }

// // console.log(power(2, 3)); //8
// console.log(power(3, 2)); //9


// let listOfNumbers = [2, 3, 5, 7, 11]
// console.log(listOfNumbers[2 - 1]);

// let person = {
//     name: "lamide",
//     age: 20
// };
// console.log(person.name);
// console.log(person["name"]);

// let day1 = {
//     squirrel: false,
//     events: ["work", "tree", "pizza", 67, "67", "false", "true"]
// }

// console.log(day1.squirrel);
// console.log(day1.wolf);
// console.log(day1["squirrel"]);
// console.log(day1.events[0]);


// let person = {
//     name: "lamide"
// }

// console.log(person["name"])
// console.log(person.name)

// let test = n => ({prop: n})
// console.log(test(5))

/*
let animal = "cat"
animal = "rat"

console.log(animal)

let person = {
    name: "lamide"
}
// person.name = "John"
person["name"] = "John"

console.log(person.name)
console.log(person["name"])

let object1 = {
    value: 10
}

object1.value = "15"
console.log(object1.value)
console.log(object2.value)
let object2 = object1;
// console.log(object1 == object2)
// console.log(object1 === object2)

let object3 = {
    value: 10
}

console.log(object1 == object3) 

const score = {
    visitors: 0,
    home: 0
};

goal == score;
score.visitors = 1;
console.log(score.visitors)
console.log(score.home) 

let user = {
    name: "sam",
    address = {
        city: "lagos",
        state: "lagos"
    }
}
// console.log(user.address.city);
console.log(user[address[city]]);

for (let i = 0; i < 5; i++) {
    console.log(i)
} */

// for (let number = 0; number <= 12; number = number + 2) {
//     console.log(number)
// }

// write a function that reverse a word 
//1st2
function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    return word === reversed;
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("hello")) 


//2nd
function isPalindrome(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }
    return word === reversed;
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("hello")) 
