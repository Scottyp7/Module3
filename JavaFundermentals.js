//SECTION 1
console.log("" + 1 + 0) // "" then + at the start converts it to a string  
console.log("" - 1 + 0) // "" -1 as it is only + that converts to a string

console.log(true + false) // true is = to 1 false is = to 0.

console.log(!true) // false

console.log(6 / "3") //2

console.log("2" * "3") //6

console.log(4 + 5 + '\n' "px") //9px

console.log("$" + 4 + 5) //$45 - "" then + at start converts to string for concatinating

console.log("4" - 2) // 2

console.log("4px" - 2) //nan

console.log(" -9 " + 5) // -9 5 = converted to a string with "" and  +

console.log(" -9 " - 5) //-14

console.log(null + 1) //1

console.log(undefined + 1) //nan

console.log(undefined == null) // true converts to 0

console.log(undefined === null) //false

console.log(" \t \n" - 2) // -2 = \t = is tab on the keyboard and \n = newline

//SECTION 2

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?

let addition = three + four // as numers defined in let are in "" 
//the outcome is converted to text with +
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three > four // symbols are opposite to what you would expect
let lessThan2 = thirty < four//symbols are opposite to what you would expect

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2) 

// SECTION 3

if (0) console.log('#1 zero is true') //will not print
if ("0") console.log('#2 zero is true')//will print
if (null) console.log('null is true') // wont print* will print as null is a value
if (-1) console.log('negative is true') // wont print as no arguments presented
if (1) console.log('positive is true') //will prin 

//SECTION 4
let a = 2, b = 3;
a += 4
b += 12 // this changes the value of b - the var then becomes b = b + 12 = 15
let result =  `${a} + ${b} is `;


if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

//a + b < 10 ? 'less then 10'

result += a + b < 10 ? 'less then 10' : 'greater then 10'

// ? ia the same as an if else command

result += a = b < 10 ? 'less then 10' : 'greater then 10'
console.log(result)

//Section 5
function getGreeting(name) {
    return 'Hello ' + name + '!';
}

const getgreet = (name) => 'Hello ' + name + '!';

const getgreet1 = function (name) {
    return name + ' is = to ' + name;
}
console.log(getgreet1('Print'))

const getgreet2 = function (){
    return 'Welcome To Our Page';
}
console.log(getgreet2())

// SECTION 6
const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
} 
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) { 
    // short hand
    return person.numFingers == 6 ? 'You Killed My Father':'Nice to meet you.';}
} 
let newPhrase;
    if(person.numFingers == 6) {
        newPhrase = "You killed my father"; }
    else {
        newPhrase = "Nice to Meet You"
    }
    
inigo.greeting(westley)
inigo.greeting(rugen)


//SECTION 7 
const basketballGame = {
    score: 0,
    fouls: 0,
freeThrow() {
    this.score++ ;
    return this;
}, 
foul() {
    this.fouls++;
    return this;
},
basket() {
    this.score += 2;
    return this;
},
threePointer() {
    this.score += 3;
    return this;
},
halfTime() {
    console.log('Halftime score is ' + this.score + ' & The number of fouls are ' + this.fouls);
    return this;
},

fullTime() {
console.log('The Full Time score is ' + this.score + ' & The number of fouls are ' + this.fouls);
}
}
//modify each of the above object methods to enable function chaining as below:
basketballGame
.basket()
.freeThrow()
.freeThrow()
.basket()
.foul()
.threePointer()

.halfTime()

.threePointer()
.foul()
.foul()
.fullTime()

//SECTION 8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
const brisbane = {
    name: 'Brisbane',
    population: 2_121_000,
    state: 'QLD',
    founded: '26 January 1888',
    timezone: 'Brisbane/Cairns'
}

const sydneyClone = {};
    for (let key in sydney){
        sydneyClone[key] = sydney[key];
}
console.log(sydneyClone);

function displayValues(object) {
    for(variables in object)
    console.log(variables+ ": " + object[variables]);
}

displayValues(sydney) 
displayValues(brisbane)

console.log(displayValues)
*
//SECTION 9

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Harvey';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };


let moreSports = [...teamSports]
let dog2 = dog1
let cat2 = {...cat1}


dog2 = 'newdog'
moreSports.unshift('Formula1')

cat2.name = 'Scott'

cat1.height = 120

let cat3 = cat1 //
    cat3.secondname = 'parker'

console.log(dog1)
console.log(cat1)
console.log(teamSports)


// SECTION 10

const canDrive = function(age) {
return age > 18 ? 'Can Drive' : 'Cant Drive';
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.drive = canDrive(this.age)
    }

let person1 = new Person('Jeff', 30);
let person2 = new Person('Ben', 17);

for (const newLoop in person1) {
    console.log(newLoop)
}

console.log(person1)
console.log(person2)

class personClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


