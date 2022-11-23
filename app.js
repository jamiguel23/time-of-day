'use strict'

// console.log('hello world')

let myDate = new Date();
let myHour = myDate.getHours();
let thisYear = myDate.getFullYear();
// let myHour = 4
let myGreeting = '';
let myColor = '';
let myPic = '';


// Deliverable: Create a web page that uses JavaScript to determine the current hour,
//  and presents a different image, custom message, 
// and color based on each of the following times of day:

// Morning (5am to 12 noon)
// Afternoon (12 noon to 6pm)
// Evening (6pm to 11pm)
// Night (11pm to 5am)


if (myHour >= 12 && myHour <= 18) {
    // alert('Good Afternoon!')
    myGreeting = 'Good Afternoon'
    myColor = 'green'
    myPic = 'afternoon.jpg'
} else if (myHour >= 5 && myHour <= 12){
    // alert('NOT afternoon')
    myGreeting = 'Good Morning'
    myColor = 'orange'
    myPic = 'morning.jpg'
} else if (myHour >= 18 && myHour <= 23){
    // alert('NOT afternoon')
    myGreeting = 'Good Evening'
    myColor = 'red'
    myPic = 'evening.jpg'
} else if (myHour <= 5){
    // alert('NOT afternoon')
    myGreeting = 'Good Night'
    myColor = 'blue'
    myPic = 'night.jpg'
} 

myPic = 'images/' + myPic

document.getElementById('my-greeting').innerHTML = myGreeting

document.querySelector("html").style.backgroundColor = myColor

document.getElementById('my-pic').src = myPic


//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 



document.getElementById("this-year").innerHTML = thisYear;

let day = myDate.getDay();
// let day = 6
console.log(day);

switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

document.getElementById("today").innerHTML = "Today is " + day;
