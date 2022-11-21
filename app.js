'use strict'

// console.log('hello world')

let myDate = new Date();
let myHour = myDate.getHours();
let myGreeting = '';


if (myHour > 12) {
    // alert('Good Afternoon!')
    myGreeting = 'Good Afternoon'
} else {
    // alert('NOT afternoon')
    myGreeting = 'Not Afternoon'

}

console.log(myGreeting)


document.write('<h3>' + myGreeting + '</h3>');

//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
