// var keyword is functional scoped
/*function greetPerson(name) {
    if (name=="Aadil") {
        var greet = "Hello Aadil"
        console.log("a")
    }
    else {
        var greet = "Hi"
        console.log("b")
    }
    console.log(greet)
}
greetPerson("abc") */

//let is block scoped
/* function greetPerson (name) {
    let greet; //It is defined here because it has block level scope
    if (name=== "Aadil") {
        greet = "Hello Aadil"
    }
    else {
        greet = "Hi"
    }
    console.log(greet);
}
greetPerson("Aadil") */


// var a =1;
// var b = 2;
// if(a===1) {
//     var a=10;
//     let b = 20;
//     console.log(a+" "+b)
// }
// console.log(a+" "+b)

// for (let i = 0; i<5; i++) {
//     setTimeout(function(){console.log(i)},1000)
// }

// CLOSURES

// function init() {
//     var name = "Aadil";
//     function display() {
//         console.log(name);
//     }
//     display();
// }
// init();

// function makeAdder(x) {
//     return function(y) {
//         return x+y;
//     }
// }
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// console.log(add5(2));
// console.log(add10(2));

//CLOSURES SCOPE CHAIN
// var e = 5;
// function sum(a){
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 return (a+b+c+d+e);
//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4));

//second method
// var e = 5;
// function sum(a) {
//     return function ab(b) {
//         return function bc(c) {
//             return function cd(d) {
//                 return a+b+c+d+e;
//             }
//         }
//     }
// }
// var s = sum(4);
// var s1 = s(3);
// var s2 = s1(2);
// var s3 = s2(1);
// console.log(s3);

//ARROW FUNCTION
// var getRegularValue = function() {
//     return 10;
// }
// console.log(getRegularValue())
// //get regular function value


// // const getArrowValue = () => 10;
// const getArrowValue = a => 10*a
// console.log(getArrowValue(5));
// console.log(typeof getArrowValue)
// // get arrow function value

// Arrow function resolve this keyword problem because it does not use this keyword
// var employee = {
//     id: 1,
//     greet: function() {
//         setTimeout(
//             function() {console.log(this.id)},1000
//         );
//     }
// }
// employee.greet();

// var employee = {
//     id: 1,
//     greet: function() {
//         self = this
//         setTimeout(
//             function() {console.log(self.id)},1000
//         );
//     }
// }
// employee.greet();

// var employee = {
//     id: 1,
//     greet: function() {
//         setTimeout(() => {
//             console.log(this.id)
//         }, 1000);
//     }
// }
// employee.greet();

//DEFAULT PARAMETERS

// let getValue = function (val = 10, bonus = 5) {
//     console.log(val +" "+bonus)
// }
// getValue();
// getValue(1,1);
// getValue(undefined,2)
// percentBonus = () => 0.1
// let getValue = function (val = 10, bonus = val*percentBonus()) {
//     console.log(val +" "+bonus)
// }
// getValue();
// getValue(1,1);
// getValue(undefined,2)

// let getValue = function (val = 10, bonus = val*0.1) {
//     console.log(val +" "+bonus)
// }
// getValue();
// getValue(1,1);
// getValue(undefined,2)

//REST ARGUMENTS
// let display = function() {
//     console.log(message);
//     for (let i in arguments) {
//         console.log(arguments[i]);
//     }
// }
// let message = "Lists of Colors"
// display(message,"red");
// display(message,"red","blue")
// display(message,"red","blue","green")
//This will print multiple times message, in order to resolve this we use rest operator

// let display = function(message,...colors) {
//     console.log(message);
//     for (let i in colors) {
//         console.log(colors[i]);
//     }
// }
// let message = "Lists of Colors"
// display(message,"red");
// display(message,"red","blue")
// display(message,"red","blue","green")

//SPREAD OPERATOR
// let display = function(message,...colors) {
//     console.log(message);
//     for (let i in colors) {
//         console.log(colors[i]);
//     }
// }
// let message = "Lists of Colors"
// let colorsArray = ['yellow','white','green']
// display(message,...colorsArray);
// // NOTE: spread operator is specified in function call and rest operator is specified in arguments of function