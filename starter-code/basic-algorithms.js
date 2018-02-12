var hacker1 = "Debora";
var hacker2 = prompt("What's navigator's name?");
console.log("The driver's name is " + hacker1 + " and the navigator name is: " + hacker2);


//Depending on which name is longer, print:
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has "  + " "  + hacker1.length + " " + " characters");
}else if(hacker1.length < hacker2.length){
  console.log("The Navigator has the longest name, it has " + " " + hacker2.length +  " " + " characters");
}else{
  console.log("Wow, you both got equally long names it has " +
  hacker2.length + " characters!!");
}


//Print driver's name, separated by a space and Upper case
//Print navigator's name, in reverse order 
for (var i = 0; i < 1; i++) {
  console.log(
    hacker1
      .split("")
      .join(" ")
      .toUpperCase()
  );
}

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
for (var i = 0; i < 1; i++) {
  console.log(
    hacker1
      .split("")
      .reverse(" ")
      .join("")
  );
}

//  --------------------------------------
var n = hacker1.localeCompare(hacker2);
if (n === 1) {
  console.log("The driver's name goes first");
} else if (n === -1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
console.log(n);


//palindrome
var myString = prompt("Enter a phrase to check if it is a palidrome: ");

function palindrome(myString){

/* remove special characters, spaces and make lowercase*/
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
if(removeChar === checkPalindrome){
  
 console.log(myString + " is a Palindrome");
}else{
  
console.log(myString + " is not a Palindrome");
}
}
palindrome(myString);

var str = "Vestibulum ac diam sit amet quam et vehicula elementum et  sed sit amet dui. Sed et porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet et ligula.";

  var checkedStr = str.split(" ");
  console.log("text has: " + checkedStr.length + " characters");
  
    var count = 0;
      for(var i = 0; i < checkedStr.length; i++){
         if(checkedStr[i] === "et"){
         count++;
       }
      }
       
    console.log("The word et was found: " + count);