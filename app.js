'use strict'

// console.log('hello world')

let myDate = new Date();
let myHour = myDate.getHours();
let myGreeting = '';
let myColor = '';



if (myHour > 12) {
    // alert('Good Afternoon!')
    myGreeting = 'Good Afternoon'
    myColor = 'green'
} else {
    // alert('NOT afternoon')
    myGreeting = 'Not Afternoon'
    myColor = 'white'


}

document.getElementById('my-greeting').innerHTML = myGreeting


// console.log(myGreeting)

//change the background color of the background element

document.querySelector("html").style.backgroundColor = myColor


//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
