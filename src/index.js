import './style.css';

import fetchWeather from './fetchWeather'
import Weather from './Weather'

//retrieve from weather site
    //display
//event delegation
    //if city clicked search for city in weather site
        //display
    //if farenheit/celsius clicked
        //display farenheit/celsius

//initial variables
let city='warsaw'
let degree='C'


//initial load
fetchWeather(city, degree);
/*
//event delegation
//click event delegation, main logic
const button = document.getElementById('button');
button.addEventListener('click',function(e){
    //get city
   
    city=document.getElementById('cityInput').value;
    //fetchWeather
    fetchWeather(city, degree);
});
*/
//enter, trigger click
const input = document.getElementById('cityInput');
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("button").click();
    }
  });

//event delegation, main logic
document.addEventListener('click',function(e){
    
    switch (e.target.id) {
        case 'button':
            city=document.getElementById('cityInput').value;
            //fetchWeather
            fetchWeather(city, degree);
            break;
        case 'F':
            fetchWeather(city, 'F');
            break;
        case 'C':
            fetchWeather(city, 'C');
            break;
        }
    
});