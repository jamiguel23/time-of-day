'use strict'

// console.log('hello world')

var today = new Date();
var hourNow = today.getHours();
var greeting;

console.log(hourNow)

if (hourNow > 18) { 
    greeting = 'Good evening!';

} else if (hourNow > 12) {
    greeting = 'Good afternoon!';

} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');

  //https://tinyurl.com/dynamic-html-checker
  document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
  document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
