'use strict'

// console.log('hello world')

let myDate = new Date();
let myHour = myDate.getHours();
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


if (myHour > 12) {
    // alert('Good Afternoon!')
    myGreeting = 'Good Afternoon'
    myColor = 'green'
    myPic = 'afternoon.jpg'
} else {
    // alert('NOT afternoon')
    myGreeting = 'Not Afternoon'
    myColor = 'white'
    myPic = ''


}

myPic = 'images/' + myPic

document.getElementById('my-greeting').innerHTML = myGreeting

document.querySelector("html").style.backgroundColor = myColor

document.getElementById('my-pic').src = myPic


//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
