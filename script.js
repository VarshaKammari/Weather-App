const apiKey="f9a40574efcfae29ed93f3cb79ae2486";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-icon");

async function checkWeather(city){
    const res=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await res.json();
    // console.log(data);
    document.querySelector(".city").innerHTML=data.name;    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°c';
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    if(data.weather[0].main =="Clouds"){
        weatherImg.src="images/clouds.png";
    }else if(data.weather[0].main =="Clear"){
        weatherImg.src="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/rain.png";
    }else if(data.weather[0].main =="Drizzle"){
        weatherImg.src="images/drizzle.png";
    }else if(data.weather[0].main =="Mist"){
        weatherImg.src="images/mist.png";
    }else if(data.weather[0].main =="Snow"){
        weatherImg.src="images.snow.png";
    }

    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click",()=>checkWeather(city.value));
