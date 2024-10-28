// Array.prototype.map()

// Exercise 1
bracketSeperation('Exercise 1 - array.map')

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your Code Here

console.log(nums)

const numsUpdated = nums.map((currentNumber) => {
    return currentNumber * 2
})

console.log(numsUpdated) // [26, 174, 4, 178, 24, 8, 180, 126]

bracketSeperation('Exercise 2 - Array destructuring')

// Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into 
// variables. Log both variables.

const terribleToppings = ['Pineapple', 'Olives', 'Anchovies']

const [firstTopping, secondTopping] = terribleToppings /* Both  array names must be the same!!! */

console.log(terribleToppings[0]) // Pineapple
console.log(terribleToppings[1]) // Olives

console.log(firstTopping) // Pineapple
console.log(secondTopping) // Olives


bracketSeperation('Exercise 3 - Object destructuring')

// Given the following object, use destructuring to create variables `make` and `model` that will 
// hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  }
  
const { make, model } = car /* Variable must match with object properties!! */

console.log(make) // Audi
console.log(model) // q5
console.log(car.make) // Audi
console.log(car.model) // q5
  


bracketSeperation('Exercise 4: Applying the spread operator on arrays')

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, 
// log the variable.

const samePizzaToppings  = ['Pineapple', 'Olives', 'Anchovies']

const controversialPizzaToppings = [...samePizzaToppings]

controversialPizzaToppings.push('Hawaiian') /* Making sure it's a new array, not old. */

console.log(samePizzaToppings) // ['Pineapple', 'Olives', 'Anchovies']
console.log(controversialPizzaToppings) // ['Pineapple', 'Olives', 'Anchovies', 'Hawaiian']


bracketSeperation('Exercise 5: Applying the spread operator on objects')

// Duplicate the following object and spread its values into a new variable `myCar`.

const sameCar = {
    make: 'Audi',
    model: 'q5',
  }

const myCar = { ...sameCar }

myCar.model = 'q7'
  
// Change the `model` property of `myCar` to 'q7'. Log both objects.

console.log(sameCar) // {make: 'Audi', model: 'q5'}
console.log(myCar) // {make: 'Audi', model: 'q7'}
  
// Your code here

bracketSeperation('Exercise 6 - Dynamic keys in objects')

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const propertyName = 'userName'

const userProfile = {
    [propertyName]: 'CajunSamurai'
}

console.log(userProfile) // {userName: 'CajunSamurai'}



bracketSeperation('Exercise 7: Import and Export')

console.log('(Solution located in file.js and file.js)')

import name, { age, job } from './exportingFile.js'
console.log(name, age, job) // Matt 43 programmer
console.log(`${name} is a ${age} year old ${job}`) // Matt is a 43 year old programmer


bracketSeperation('Exercise 8: Default parameters')

// Create a function that takes two parameters, `noun` and `adjective`, 
// both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. 
// The function should substitute the appropriate parameters when supplied arguments.

function nameThatMammal(noun = 'cat', adjective = 'white') {
    console.log(`Look at that! That ${noun} is ${adjective}!`)
}

nameThatMammal('Pikachu', 'Shiny') // Look at that! That Pikachu is Shiny!
nameThatMammal('Snivy') // Look at that! That Snivy is white!
nameThatMammal() // Look at that! That cat is white!
nameThatMammal(null, 'nuetered') // Look at that! That null is nuetered!
/* 😔 */

bracketSeperation('Exercise 9: Ternary operator')

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty'

if (pizza === 'tasty') {
  console.log('yum')
} else {
  console.log('yuck')
}

// Your code here
let reaction = pizza === 'tasty' ? 'yum' : 'yuck'
console.log(reaction) // yum

bracketSeperation('Exercise 10: Boolean gates')

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

let localLangConfig = 'spanish'  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

let LANG = localLangConfig || 'english'

// Log the result
console.log('Language setting:', LANG) // spanish

localLangConfig = null
LANG = localLangConfig || 'english'

console.log('Language setting:', LANG) // english

// 2. SET WEBSITE THEME

let userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here

let USER_THEME = userSavedTheme || 'light'

// Log the result
console.log('User theme setting:', USER_THEME) // light

userSavedTheme = 'dark'
USER_THEME = userSavedTheme || 'light'
console.log('User theme setting:', USER_THEME) // dark


bracketSeperation('Exercise 11: Optional chaining')

// Now check for `cat.age` on `adventurer`. See how it errors out? Use 
//optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  }
  
  let cat = adventurer.cat?.age
  
  console.log(cat) // undefined
  







function bracketSeperation(exerciseNumber) {
    console.log(`====================${exerciseNumber}=========================`)
    console.log(`==============================================================`)
}