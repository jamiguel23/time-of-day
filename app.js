'use strict'

// console.log('hello world')

  //https://tinyurl.com/dynamic-html-checker
  document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
  document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 