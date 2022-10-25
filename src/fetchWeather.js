import displayWeather from './displayWeather'

const fetchWeather = (city, degree)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2cc2ae051e44f1f095b627e00f3b9aa8`, {mode: 'cors'})
    
        .then(function(response) {
            if (response.ok){
                
                return response.json();
            }else{
                return Promise.reject('error')
            }
        })
        .then(function(response) {
            const weather = response;
            displayWeather(weather, degree);
            return weather;

        })

       
        //if error default warsaw
        .catch(function(){
            city='warsaw'
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2cc2ae051e44f1f095b627e00f3b9aa8`, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                const weather = response.json();
                displayWeather(weather, degree);
                return weather;

            })
        })
        
    
}
export default fetchWeather;