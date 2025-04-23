// var name = "Jack";
// var age = 23;
// var shootingScore = 45.6

// var message = "Hi, my name is " + name + " and I am " + age + " years old!";

// console.log(message)


// var firstName = "John";
// var lastName = "JacobJingleHeimerSmith";
// var dateOfBirth = "10-09-82";
// var age = 23;
// var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";

// var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";

// console.log(loginWelcomeMessage);


// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;

// var msg = "10 / 3 = 3 with a remainder of " + mod;
// var result = 10 * ((5 + 3) - 4) - 500;

// console.log(result);


// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 500;


// var age = 23;
// var joesAge = "23";
//  if (age !== joesAge) {
//     console.log("Not Equal!!!");
//  } else {
//     console.log("They are equal!!!");
//  }

// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes;
//     console.log("We just bought some dope shoes!");
//     console.log("Account Balance: " + myAccountBalance);
// } else if ((nikeSBShoes - coupon) <= myAccountBalance) {
//     console.log('We just bought some dope shoes with a coupon!');
//     myAccountBalance -= nikeSBShoes - coupon;
//     console.log("Account Balance: " + myAccountBalance);
// } else {
//     console.log("You too broke fo shoes bra!");
// }


// if (1 === 1 && 2 === 2) {
//     console.log("These are both true!");
// }


// var studentNames = ["Timmy", "Jannesa", "Arun"];

// var naughtyList = [];
// naughtyList.push(studentNames[0]);

// var index = naughtyList.indexOf("Timmy");
// console.log(naughtyList)

// if (index > -1) {
//     naughtyList.splice(index, 1);
// } 

// console.log(naughtyList);


// var total = 10;
// for (var x = 0; x < total; x++) {
//     console.log(x);
    
// }

// var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];

// for (var index = 0; index < students.length; index++) {
//     console.log(students[index]);
// };


// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;
// console.log(area1);    

// function area(length, width) {
//     return length * width;
// }

// var rectanglesAreas = [];
// rectanglesAreas.push(area(10, 15));
// rectanglesAreas.push(area(14, 2));
// rectanglesAreas.push(area(4, 5));

// console.log(rectanglesAreas);

// var bankBalance = 500;

// function makeTransaction(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else {
//         console.log("Insufficient Funds");
//     }
// }

// console.log(bankBalance);
// makeTransaction(79.00);

// console.log(bankBalance);
// makeTransaction(2.32);

// console.log(bankBalance);
// makeTransaction(10.45);

// console.log(bankBalance);
// makeTransaction(450.00);

// var transaction = function(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else {
//         console.log("Insufficient Funds");
//     }
// }

// transaction(10);


// var student0 = {
//     firstName: "Jayne",
//     lastName: "Looo",
//     age: 8,
// };

// console.log(student0.greeting());

// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 7;

// var student2 = {};
// student2.firstName = "Zack";
// student2.lastName = "Bobo";
// student2.age = 5;

// var students = [];

// function Student(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greeting = function () {
//         return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//     }
// }

// students.push(new Student("Jenny", "Laga", 5));
// students.push(new Student("Timmy", "Turner", 8));
// students.push(new Student("Carl", "Jr", 4));

// var student = students[0];

// for (var key in student) {
//     console.log(student[key]);
// }

// var s1 = new Student("Jenny", "Laga", 5);
// console.log(s1)
// console.log(s1.greeting())

// students.push(student0, student1, student2);
// students.push(student0);
// students.push(student1);
// students.push(student2);

// for (var index = 0; index < students.length; index++) {
//     var student = students[index];
//     console.log(student.greeting());
// }


// Alex Brown's
this.car = "Honda Civic with Ugly Spoiler";

var marksGarage = {
    car: "Aston Martin",
    getCar: function () {
        return this.car;
    }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

// Now work is over and Mark wants his car

console.log(storeGetCarForLater());

// var theRealGetCarFunction = storeGetCarForLater.bind(marksGarage);
var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());