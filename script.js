/*console.log("I like Pizza")
console.log("we like three pizzas")


window.alert("I REALLY LIKE PIZZA")
//this is a comment. practicing js before i start angular next week
let firstName ="Liz"//sting
let age;
age=21;//number
let student=true//boolean
console.log(firstName)
console.log(age);
console.log(student);  
console.log("hello", firstName)
console.log("you are", age, "years old")
console.log("enrolled:", student)

document.getElementById("p1").innerHTML ="hello " + firstName;
document.getElementById("p2").innerHTML= "you are " +age + " years old";
document.getElementById("p3").innerHTML="Enrolled: " + student;


arithmetic expression is a combination of ...
operands (value,variable,etc,)
operators (+ - * / %)
That can be evaluated to a value
ex. y= x+5;


//let students = 20
/*students= students+1*/
/*students= students-1*/
/*students=students *2*/
/*students=students /2 */
//let extraStudents=students %3

//augmented assignemt operators
//students+=1
//students-=1
//students*=2
//students/=2
/*

console.log(students);

How to accept user input

 Easy with a window prompt
let userName= window.prompt('whats your name')
console.log(userName); 
*/


//Difficult with html textbox
/*let userName;

document.getElementById("myButton").onclick = function(){

    userName= document.getElementById("myText").value;
    console.log(userName);
}
*/


//Type conversion =change the datatype of a value to another 
//                   (strings,numbers,booleans)

/*let age =window.prompt("how old are you?")
age=Number(age)
age += 1;

console.log("Happy Birthday! you are " + age); */

//const = a variable that can't be changed

/*let pi =3.14159;
let radius;
let circumference;

radius =window.prompt("enter radius of a circle");
radius =Number(radius);

circumference = 2*pi*radius;

console.log("The circumference is : ",circumference);
*/


/*let x = 3.14;
let y=5;
let z=9;
let maximum;
let minimum;

//x=Math.round(x)
//x=Math.floor(x)
//x=Math.cell(x)
//x=Math.pow(x,2)
//x= Math.sqrt(x)
//x=Math.abs(x)

//maximum= Math.max(x,y,z)
//minimum = Math.min(x,y,z)

x=Math.PI

console.log(x)*/

//program to calculate hypotenus
/*
let a;
let b;
let c;

a=window.prompt("enter side a");
a=Number(a);
b=window.prompt("enter side b");
b=Number(b);

c= Math.pow(a,2) + Math.pow(b,2)
c=Math.sqrt(c);

console.log("side C:",c);*/

/*
document.getElementById("submitButton").onclick = function(){
  a =document.getElementById("aTextBox").value;
  a=Number(a)

  b=document.getElementById("bTextBox").value;
  b=Number(b)

  c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

  document.getElementById("clabel").innerHTML ="side C: " + c

}*/
/*
let count =0;

document.getElementById("decreaseBtn").onclick = function (){
  count-=1;
  document.getElementById("countlabel").innerHTML=count;

}
document.getElementById("resetBtn").onclick =function(){
  count=0;
  document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("increaseBtn").onclick =function(){
  count+=1;
  document.getElementById("countlabel").innerHTML=count;
}*/
/*
//useful string properties &methods

let userName= "Elizabeth Adhiambo"
let phoneNumber="123-456-7890"

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName=userName.trim();
//userName=userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber=phoneNumber.replaceAll("-", "/")
console.log(phoneNumber);
*/

/*

//slice() extracts a section of a string and returns it as a new string without mosifying the original string

let fullName = "Elizabeth Adhiambo";
let firstName;
let secondName;

//firstName = fullName.slice(0,9);
//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
secondName = fullName.slice(fullName.indexOf(" ") +1);
console.log(firstName);
console.log(secondName);
*/


//method chaining = calling one method after another in one continous line of code
/*

let userName="elizabeth"

//let letter =userName.charAt(0);
//letter=letter.toUpperCase();
//console.log(letter);

//method chain
let letter =userName.charAt(0).toUpperCase().trim;
console.log(letter);
*/

//if statement
/*
let age = -1;

if(age>=21){
  console.log("you are an adult");
}
else if (age<0){
  console.log("You Haven't been born yet!");
}
else if (age){
  console.log("you are a child!");
}*/
/*
let online=false;
if (online){
  console.log("You are online")
}
else{
  console.log("You are Offline!")
}
*/


/*
document.getElementById("myButton").onclick = function(){
const myCheckbox=document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn =document.getElementById("mastercardBtn");
const paypalBtn =document.getElementById("paypalBtn");


  if (document.getElementById("myCheckbox").checked == true){
    console.log("You are sunscribed!")
    
  }
  else{
    console.log("You are NOT subscribed!")

  }
  if (visaBtn.checked){
    console.log("you are paying with a visa")

  }
  else if(mastercardBtn.checked){
    console.log("you are paying with a mastercard")
  }
  else if(paypalBtn.checked){
    console.log("you are paying with a Paypal")
  }
  else{
    console.log("you must select radio button")
  }
}
*/


//switch = statement that examins a value
//         for a match against many case clauses
//         more than many "else if" statements

/*
let grade = "D";

switch (grade) {
  case "A":
    console.log("You did great");
    break;
  case "B":
    console.log("You did fairly well")
    break;
  case "C":
    console.log("You are average");
    break;
  case "D":
    console.log("you should aim higher");
    break;
  default:
    console.log("grade is not a letter")
}
*/

/*
let grade = 45
switch (true){
  case grade >=90:
    console.log("You passed!")
    case grade >=80:
    console.log("You did great");
    break;
    case grade >=70:
    console.log("You did fairly well")
    break;
    case grade >=60:
    console.log("You are average");
    break;
    case grade <=50:
    console.log("you should aim higher");
    break;
  default:
    console.log("grade is not a Number")
}
*/

//&& and (both condition must be true)
//|| or (either condition can be true)

/*

let temp = -15;
if (temp> 0 && temp <30){
  console.log("the weather is good")

}
else{
  console.log("The weather is bad")
}
/
let temp = -15;
if (temp> 0 && temp <30){
  console.log("the weather is good")

}
else{
  console.log("The weather is bad")
}
*/

/*
let temp = 15;
let sunny = true
if (temp<= 0 || temp >=30 && sunny){
  console.log("the weather is bad!")

}
else{
  console.log("The weather is good!")
}
*/

// ! Not logical operator
//Typivally used to reverse a condition's boolean value 
//true ->false false->true

/*
let temp=15;
let sunny=false;
if(!(temp >0)){
  console.log("Its cold outside");

}
else{
  console .log("It's warm outside");
}

if(!sunny){
  console.log("Its cloudy outside")
}
else{
  console.log("It's sunny outside")
}
*/
/*

//while loop = repeat some code while some condition is true
//       potentially infinite
let username = "";
while (username== ""|| username== null){
  username = window.prompt("Enter Your Name")
}

console.log("Hello", username);

*/

/*
// do while loop = do something, then check the condition,
//                 repeat if the condition is true
let username;
do{
  username = window.prompt("Enter Your Name")
}while (username== ""|| username== null)

console.log("Hello", username);

*/

//for loop =repeat some code for a certain number of times




