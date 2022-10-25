const displayWeather = (weather, degree) =>{
    
   
    //get ele

    document.getElementById('city').textContent=weather.name+',';
    document.getElementById('country').textContent=weather.sys.country;
    let kelvin = weather.main.temp;
    let temperature=convertTemp(kelvin, degree)
   
    document.getElementById('temperature').textContent=temperature+'\u00B0'+degree;
    let description=weather.weather[0].description
    description=convertCapital(description);
    
    
    document.getElementById('description').textContent=description;
    kelvin = weather.main.feels_like;
    temperature=convertTemp(kelvin, degree)
    document.getElementById('feelsLike').textContent='Feels Like: '+temperature+'\u00B0'+degree;
    kelvin = weather.main.temp_min;
    temperature=convertTemp(kelvin, degree)
    document.getElementById('minTemp').textContent='Min Temp: '+temperature+'\u00B0'+degree;
    kelvin = weather.main.temp_max;
    temperature=convertTemp(kelvin, degree)
    document.getElementById('maxTemp').textContent='Max Temp: '+temperature+'\u00B0'+degree;
    document.getElementById('humidity').textContent='Humidity: ' +weather.main.humidity;
    document.getElementById('pressure').textContent='Pressure: '+weather.main.pressure+' mb';
}
export default displayWeather;

const convertTemp=(kelvin, degree)=>{
    let temperature = kelvin - 273.15;
    if (degree == 'F'){
        temperature = (temperature*1.8);
        
        
    }
    temperature=temperature.toFixed(2);
    
    return temperature;

}

const convertCapital=(description)=>{
    
    const words = description.split(" ");
    

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");

}
