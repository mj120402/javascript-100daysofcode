// concatinations of strings

var number="1";

var string = 1;

//console.log(typeof(number));
console.log("the variable called number is a " + typeof(number))
 
//^^ that console log will add on the typeof sicne its a string 


//learning how to create sentences by creating 2 diff variables called sentence and name 

var sentence = "Hi My name is"

var name = " Mohammud"
var age = "20"

console.log(sentence+name);

console.log(name.length);

//^^.length would add all the characters within that variable 

console.log(sentence + " " + name + ". I am " + age + " years old")

//^^ will manipulate the console log to add in a space

let array=[1,2,3,4,5,6,8, "hello", "world", "apple", "banana", "pear", "grapes", "peach", "guava", "avocado", null, true, false]

console.log(array);

/* ^^ array is a list.
 it isnt specifically tied to a string
 anything inside the square brackets */
 

 // console.log(array[0]); allows to print positions like example below
 
 console.log(array[3]);

 // to print specific positions, it would be console.log(array.slice(7,9));

 console.log(array.slice(7,9));
