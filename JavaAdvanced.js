/*
//SECTION 1
function makeCounter(startsFrom, increment) {
    let currentCount = startsFrom;
    let stepBy = increment;
    return function() {
        console.log(currentCount)
        currentCount = currentCount + stepBy
        //console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter(2,3);
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2

console.log(counter1())

//SECTION 2 

// The last message will be displayed as there is no delay.

function delayMsg(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
//const message2 = ( )=> setTimeout(delayMsg('#4: Not delayed at all'))
setTimeout( () => console.log("Arrow Statement delayed by 500ms"), 500 )
const timer5 = setTimeout(delayMsg, 12000, '#3: Delayed by 12000ms (12 seconds)');
clearTimeout(timer5)

//SECTION3
function printMe(message) {
    console.log(message)
}
function debounce(functionToCall, ms) {
    let timeout;
        return function(message){
            clearTimeout(timeout)
        timeout = setTimeout(functionToCall,ms, message)
        }
} 

const printMeDebounce = debounce(printMe,500) // 500 is the second argument in debounce. seperated by ,

//create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(() => printMeDebounce("hello"),400)
setTimeout(() => printMeDebounce("hello new message"),800)
setTimeout(() => printMeDebounce("hello last message"),1200)


//SECTION4

let i = 0;
const interval = setInterval(() => {
  console.log(fibboNums[i]);
  i += 1;
  if (i >= fibboNums.length) {
    clearInterval(interval)
  }
}, 1000);
// 0 1 1 2
const fibboNums = [1, 1, 2, 3, 5, 8, 13, 21, 34]
let i = 0;
const interval = setTimeout(function fibboFunc() {
  console.log(fibboNums[i]);
  i += 1;
  if (i < fibboNums.length) {
    setTimeout(fibboFunc,1000)
  }
},1000);


function fibLimit(index) {
    let a = 0, b = 1, i = 0;             
    const intervalId = setInterval(() => {
        console.log(b); // the value of b change with the sumLoop
        let sumLoop = a + b; // 0 + 1 = 1
        a = b; // = 1
        b = sumLoop; // = to 1
        i++; // = 1                              
        if (i === index) { // if i is less then the index of the sumLoop it continues again
            clearInterval(intervalId);
        }
    }, 1000);
}

fibLimit(6); // 


//Section 5

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
    setTimeout(() => console.log(`This car is a ${this.make} ${this.model} from ${this.year}`),2000);
}
};

car.description()

//C 
let newCar = {...car, year:2020}

newCar.description()
//D
let boundCar = newCar.description.bind(car);
setTimeout(boundCar, 200);
//E
let newCar2 = {...car, model: '950'}
newCar2.description()




//SECTION 6

Function.prototype.delay = function(ms) {
    let func = this;
    return function(...args) {
        setTimeout(() => func.apply(this, args), ms);
    };
};

function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

Function.prototype.delay = function(ms) {
    let func = this;
    return function(...args) { 
        setTimeout(() => func.apply(this, args), ms);
    };
};

function multiply(a, b, c, d) {
    console.log(a * b * c * d);

}

multiply.delay(500)(5, 5, 5 ,5);

//SECTION7 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
const person1 = new Person('Scott',25,'male')
const person2 = new Person('Jeff',22,'male')
Person.prototype.toString = function personToString() {
    return `${this.name}, ${this.age} years old, ${this.gender}`;
};
//B
console.log('Person 1: ' + person1.toString())
console.log('Person 2: ' + person2.toString())


//C
function Student(name, age, gender, university) {
    Person.call(this, name, age, gender); //stdudent object
    this.university = university; // adds cohort to Person
}
let student = new Person('Scott, ', this.university = 'Sydney') // new person based on protype object

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
//D
Student.prototype.toString = function() { //creates a student protype with which results in the string below.
    return `${this.name}, ${this.age} years old, ${this.gender}, cohort: ${this.university}`;
}

const student1 = new Student('Alice Smith', 22, 'female', 'Sydney');
const student2 = new Student('Jake', 24, 'male', 'Sydney');
console.log('student1: ' + student1); // prints "student1: Alice Smith, 22 years old, female, cohort: Fall 2021"
console.log('student2: ' + student2); // prints "student2: Bob Johnson, 24 years old, male, cohort: Spring 2022"


//SECTION 8

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
}
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;// if 
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`); // prints the current time 
    }
    stop() {
        clearInterval(this.timer);
}
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
myClock.start()

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

const myPrecisionClock = new PrecisionClock('precise clock:', 500);
myPrecisionClock.start(); // updates every 500 milliseconds


class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') { // sets time that the clock will stop
        super(prefix); // becomes more important then the previous prefix value
        this.wakeupTime = wakeupTime;
    }

    display() {
        super.display();
        let date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        let currentTime = `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;

        if (currentTime === this.wakeupTime) {
            console.log('Wake Up');
            this.stop();
        }
    } 
}

const myAlarmClock = new AlarmClock('alarm clock:', '7:00');
myAlarmClock.start(AlarmClock); // stops at 07:00 and prints "Wake Up"


//SECTION 9
//A

function randomDelay() {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 20000) + 1000; // random delay between 1 and 20 seconds
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(`Resolved after ${delay}ms`);
            } else {
                reject(`Rejected after ${delay}ms`);
            }
        }, delay);
    });
}

randomDelay()
    .then((message) => console.log(message)) // prints if promise is resolved succesfully
    .catch((error) => console.error(error)); // prints if its completed with an error

*/
//SECTION 10

async function fetchURLData(url) {
    try {
        let response = await fetch(url);
        if (response.status === 200) { // if the response status is 200 it returns the json 
            let data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`); // if not = to 200
        }
    } catch (error) {
        throw error;
    }
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1') // response then becomes the value of the url
    .then(data => console.log(data)) // data = the response of the await response.jason.
    .catch(error => console.error(error.message));//It gets the data from the url and returns it into the console.

//C
async function fetchAllURLs(urls) {
    try {
        let promises = urls.map(url => fetchURLData(url)); // creates a map of the urk 
        let results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error(error);
    }
}
//multiple urls delcared inside a variable 
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/invalid-url'
];

fetchAllURLs(urls) // prints the data from insdie 
    .then(data => console.log(data))
    .catch(error => console.error(error.message));



