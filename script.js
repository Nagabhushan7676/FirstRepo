// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'e0d9f1652amsh0e8d77bdfac922ep15158ajsn51bbac684f1f',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// const getweather=(city)=>{
//     cityName.innerHTML=city;
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//     .then(response => response.json())
//     .then(response =>         {

//         console.log(response)
//         // cloud_pct = response.cloud_pct
//         temp.innerHTML = response.temp
//         feels_like.innerHTML = response.feels_like
//         humidity.innerHTML = response.humidity
//         // // min_temp = response.min_temp
//         // // max_temp = response.max_temp
//         wind_speed.innerHTML = response.wind_speed
//         // wind_degrees = response.wind_degrees
//         // sunrise = response.sunrise
//         // sunset = response.sunset

//     })
//     .catch(err => console.error(err));
// }
// submit.addEventListener("click",(e)=>{
//     e.preventDefault();
//     getweather(city.value)
    
// })

// getweather("bangalore")


const city = document.getElementById('city');
const flag = document.getElementById('flag');




showWeatherData = (weatherData) => {
    document.getElementById("cityName").innerText = weatherData.name
    document.getElementById("weather-type").innerText = weatherData.weather[0].main
    document.getElementById("temp").innerText = (weatherData.main.temp)
    document.getElementById("min-temp").innerText =( weatherData.main.temp_min)
    document.getElementById("max-temp").innerText = ( weatherData.main.temp_max)


  }
  
  submit.addEventListener("click",(e)=>{
        e.preventDefault();
        searchCity();
        
    })
    
const searchCity=async()=>{
     let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=71f6779186cc32448b4c412eea65b982&units=metric`)
     let data=await response.json()
     console.log(data)
     showWeatherData(data)
}