/*
//SECTION 1

const toTitleCase = (myString) => {
    return myString
      .toLowerCase() // puts all letters in the string to lowercase
      .split(' ') // splits each word with quotation marks
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  let myString = toTitleCase('the first letter of each word will be capitalised');
  //console.log(myString);

  console.log(toTitleCase('the first letter of each word will be capitalised'))

//SECTION 2
function truncate(str, max) {                                    
    if (str.length > max) {                                     
        const truncatedStr =  str.slice(0, max - 3) + '...';    // String starts at 0 and the max lendgh will be defined when the function is called -3
                               
        return truncatedStr;                                    
    } 
    else {
        const notChangedStr = str;     // If the string is shorter then the max allowed lengh.                   
        return notChangedStr;          // It returns the string in full                           
    }                                
}
console.log(truncate('This text will be truncated if it is too long', 30)); // The number at the end is the max string lengh. ( -3 for the "...")

//SECTION 3

const animals = ['Tiger', 'Giraffe','Horse']

animals.push("Lion", "Whale") // add to the end
//console.log(animals)

animals.unshift("Spider", "Snake") // add to the start
//console.log(animals)

console.log(animals.sort())

function replaceMiddleAnimal(newAnimal) {
    const middle = Math.floor(animals.length / 2); // finds the total lengh of the string and divides it by 2 to find the middle 
    animals.sort() // sorts the animals by a, b ,c ect...
    animals.splice(middle, 1, newAnimal); //animal in the middle, 1 - removes only that animal, New animal with a variable that will be declared later 
}
replaceMiddleAnimal('Elephant'); // value that we want to add instead.
//console.log(animals)


function findMatchingAnimals(beginsWith){
    return animals.filter(animals => animals.startsWith(beginsWith))
}

console.log(findMatchingAnimals("S"))


//SECTION 4

const camelCase = (myString) => {
    return myString
        .toLowerCase() // puts all letters in the string to lowercase
        //.replace("-"," ")// replaces the - with a space - not needed but still works.
        .split('-') // splits each word with the value in the brackets marks
        //This part would map over all of the words in the array. We want the first word to not start
        //with a capital letter, and have all other words start with a capital letter.
        //The map method can pass 3 arguments to your arrow function.
        //The first one is the item (in this case word) that is the item currently being processed
        //The second one is the index, the index of the item currently being processed
        //The third one is the array, the array map was called on
        //In this case we only need access to the word and the index parameters
        //If the index is 0, we'd want to return the word, otherwise we'd want to
        //return the word with the first character being uppercase
        //You can modify your map function below to do that like this:
        //.map((word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        //That would make sure only the first word starts with a non-capitalized letter, and every word
        //after it will.
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(''); // joins them back together without the space
      };

//console.log(camelCase('margin-left')) // marginLeft

const camelLoop =  (myLoop) => {
    const splitVar = myLoop.split("-") // splits values that have a - in them into a new array example ['margin', 'left']
    let resultString = ""
    for (const word of splitVar){ // constant is = to the value that comes out of my loop.splt
        if (resultString.length == 0) { // resultString will always = 0 as per line 74
                resultString += word // then return the word thats been split
        }
    else { // else = when the code above has finished  run the code in the else statement.
        resultString += word.charAt(0).toUpperCase() + word.slice(1);
    }  }  }

//console.log(camelLoop("margin-left"))


const camelLoop2 = (myLoop) => {
    const splitVar = myLoop.split("-") // splits values that have a - in them into a new array example ['margin', 'left']
    let resultString = "" // resultString is = to 0
    for (const word of splitVar){
     resultString.length == 0 ? resultString += word : resultString += word.charAt(0).toUpperCase() + word.slice(1);
    } return resultString;  }
    
console.log(camelLoop2("Largin-left-left"))

//SECTION 5
//let fixedTwenty = twentyCents.toFixed(2); // THESE ARE BOTH NOW STRINGS WITH THE VALUE OF '2'
//let fixedTen = tenCents.toFixed(2);
//console.log(fixedTwenty + fixedTen) //why is this not working?
// to fix converts the numbers to a string to avoid errors and you cant add strings together... the value in 2 is for the number of decimals? (unsure)

let twentyCents = 0.2
let tenCents = 0.1
    //let fixedTwenty2 = parseFloat(twentyCents.toFixed(2));
   // let fixedTen2 = parseFloat(tenCents.toFixed(2));
   // console.log(fixedTwenty2 + fixedTen2);

function currencyAddition(float1, float2) {
    const sum = float1 + float2;
    return parseFloat(sum.toFixed(2));
}
console.log(currencyAddition(0.2,0.01))

function currencyOperation(float1, float2, operation) {
    let number = 0
    switch (operation) {
        case "+":
            number = float1 + float2;
            break
        case "-":
            //The + should be changed to a - so it would do subtraction since the operation provided
            //is a - if this code is running
            number = float1 + float2;
            break
        case "/":
            //The + should be changed to a / so it would do subtraction since the operation provided
            //is a / if this code is running
            number = float1 + float2;
            break
        case "*":
            //The + should be changed to a * so it would do subtraction since the operation provided
            //is a * if this code is running
            number = float1 + float2;
            break
        default: return NaN
    } 
        number = parseFloat(number.toFixed(2));
        return number;
} 
console.log(currencyOperation(0.01,0.2,"+"))

//SECTION 6
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
const uniqueSet = new Set(duplicatesArray);
        return Array.from(uniqueSet)
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

//SECTION 7
const books = [ // books is an array because of the [] brackets
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
]; // there are 5 objects in this array
//variables are in round brackets () {} are used inside of a function
const getBookTitle = (bookId) => { 
    const findbook = books.find(findelement => findelement.id == bookId);
        return findbook.title;
} 
const getBookAuthor = (bookId) => { 
    const findbook = books.find(findelement => findelement.id == bookId);
        return findbook.author;
} 
const getBookyear = (bookId) => { 
    const findbook = books.find(findelement => findelement.id == bookId);
        return findbook.year;
} 
//console.log(getBookyear(2))
//console.log(getBookAuthor(2))
//console.log(getBookTitle(2))
const getBookTitle2 = (functionauthorid) => { 
    const findbook = books.find(findelement => findelement.author == functionauthorid);
        return findbook.title;
} 
const getBookAuthor2 = (functionauthorid) => { 
    const findbook = books.find(findelement => findelement.author == functionauthorid);
        return findbook.author;
} 
const getBookyear2 = (functionauthorid) => { 
    const findbook = books.find(findelement => findelement.year == functionauthorid);
        return findbook.author;
}
//console.log(getBookyear2('Harper Lee'))
//console.log(getBookAuthor2('Harper Lee'))
//console.log(getBookyear2(1960))
const getOldBooks =  () => {
     const findbook = books.filter(findelement => findelement.year < 1950);
     return findbook;
}
//console.log(getOldBooks())
const addGenre = () => {
    const addGenre = books.map(findbooks => ({...findbooks,genre:'Classic'}));
    return addGenre;
}
//console.log(addGenre())

//finds the books array filters it to the first initial of the author then returns the title of the book.
const authorTitles = (authorIntial) => {
    const findbooks = books.filter(findelement => findelement.author.startsWith(authorIntial));
    const findtitle = findbooks.map(findelement => findelement.title);
    return findtitle;
}

//console.log(authorTitles('J'))

const printauthor = (titleIntial ) => {
    // finds the title in the books array based on the inital 'B'
    const findbooks = books.filter(findelement => findelement.title.startsWith(titleIntial));
    //once it finds a title that starts with B, it returns the author name.
    return findbooks.map(books => books.author);
}

//console.log(printauthor('B'))

// 1925, 1960, 1949, 1932, 1951
const lastestBook = () => {
    let latestYear = null; // latest year = 1960
        books.forEach(books => {
            if (books.year > latestYear) // if the book year is greater then 0. latest year will change as the if statement loops through. 
                {
                    latestYear = books.year;
                }
        })
        //This would return the latest year, but we'd want the book object with the most recent publication
        //date. We can do that with the find method like so:
        //return books.find(book => book.year === latestYear)
        return latestYear;
} 

console.log(lastestBook());


//SECTION 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
//console.log(phoneBookABC)

const phoneBookDEF = new Map(); // just creates a new map of an empty array

const keyValuesDEF = [
    //An error will be thrown here since there are no commas after the first and second items
    ['David', '021441234']
    ['Edward', '210215701']
    ['Fred', '21247412']
];
const phoneBookDEF2 = new Map(keyValuesDEF); // creats a new map of the keyvaluesdef

phoneBookABC.set('Caroline','04NewNumbers07');
//console.log(phoneBookABC)

function printPhoneBook(contacts) { // assumes the value in the console.log
    for (const contact of contacts){ // loops through the conacts variable and returns each value in the map
    console.log(contact)
} }

//printPhoneBook(phoneBookDEF2)

let combinedMap = new Map([...keyValuesDEF, ...phoneBookABC])

//printPhoneBook(combinedMap)
//console.log(combinedMap)

//SECTION 9
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

function sumSalaries(salaries) {
    let num = 0; // sets the value of num to 0 so the loop has a start point
        for (const salary of Object.values(salaries)) {
        num += salary // 
            
        }
        return num
};

console.log(sumSalaries(salaries))


function topEarner(salaries) {
    let highestSalary = 0;           //when
    let topEarnerName = '';
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary;
            topEarnerName = name;
        }
    }
    return topEarnerName;
}
*/
//SECTION 10

/*
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
//today.getMinutes() will only get minutes within the hour, and today.getSeconds() will only get
//seconds within the minute. To get the minutes passed today you'd multiply the hours by 60
//to get minutes and get the current hour's minutes like this:
//today.getHours() * 60 + today.getMinutes()
//and to get the seconds, you'd multiply hours by 60 * 60 to get seconds, multiply minutes
//by 60 to get seconds, and add seconds like this:
today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds()
console.log(today.getMinutes() + ' hours have passed so far today')
console.log(today.getSeconds() + ' hours have passed so far today')
*/
    const today = new Date();
    const birthDate = new Date(1992,9,13);
    
    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDay() - birthDate.getDay()

    if (days < 0) months= months -1
    if (months < 0) years = years - 1 

// Quick way to print on console
    //console.log(birthDate.getMonth())
    //console.log(birthDate.getFullYear())
    //console.log(birthDate.getDate())
    //console.log(Math.floor(ageinDays))

    //console.log( "I am " + (Math.floor(ageInYears))+" Years Old")

    months = Math.abs(months + 12) % 12
    days = Math.abs(days + 30) % 30

console.log("I am currently " + years +" Years," + months + " Months and " + days + " Days Old.")

//The daysInBetween function is missing from this file. To make the daysInBetween function
//get the days in between 2 dates, you'd do this:
/*
function daysInBetween(date1, date2) {
    const differenceMS = date2 - date1;
    const msPerDay = 24 * 60 * 60 * 1000
    const differenceDays = Math.floor(differenceMS / msPerDay)
    return Math.abs(differenceDays) //If the number is a negative, make it a positive number
}
daysInBetween(new Date('2000-01-01'), new Date()) //Get number of days between now and January 1st 2000
*/