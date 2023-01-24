const api={
 
    Key:"7e3f21edee540e6110af347b55eb1ab2",
    base:"https://api.openweathermap.org/data/2.5/"

}

const searchbox = document.querySelector(".search-box")
searchbox.addEventListener("keypress", setQuery)

 function setQuery(city)
{
    if(city.keyCode==13)
    getResults(searchbox.value)
} 

function getResults (city) {
    
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.Key}`)
      .then(weather => {
        return weather.json();
      }).then((response)=>{
        
        displayResults(response)});
  }

  function displayResults(weather)
  {
    
    let city=document.querySelector(".city")
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let date=document.querySelector(".date")
    let d= new Date()
    date.innerText=datebuilder(d)

    let temp = document.querySelector('.current .temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`
  
    let current_weather = document.querySelector('.current .weather')
    current_weather.innerText = weather.weather[0].main
  
    let minmax = document.querySelector('.hi-low')
    minmax.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`

  }



function datebuilder(d)
{

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear(); 
    return `${day} ${date} ${month} ${year}`;

}