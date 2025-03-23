const weatherData = {  
    "Hà Nội": {  
        temperature: 25,  
        humidity: 70,  
        windSpeed: 5,  
        description: "Có mây",  
        icon: "☁️"  
    },  
    "Hồ Chí Minh": {  
        temperature: 32,  
        humidity: 75,  
        windSpeed: 7,  
        description: "Nắng",  
        icon: "☀️"  
    },  
    "Đà Nẵng": {  
        temperature: 28,  
        humidity: 82,  
        windSpeed: 12,  
        description: "Mưa rào",  
        icon: "🌧️"  
    }  
}

function searchWeather() {  
    let cityInput = document.getElementById('cityInput').value
    let weatherInfo = document.getElementById('weatherInfo')
    if(weatherData[cityInput]) {  
        let data = weatherData[cityInput];  
        weatherInfo.innerHTML = `  
            <div class="weather-card">  
                <h2>${cityInput}</h2>  
                <div class="weather-content">
                    <p class="temperature">${data.icon} ${data.temperature}°C</p>  
                    <div class="weather-details">
                        <p>${data.description}</p>  
                        <p>Độ ẩm: ${data.humidity}%</p>  
                        <p>Tốc độ gió: ${data.windSpeed} km/h</p>
                    </div>
                </div>
            </div>  
        `;  
    } else {  
       alert("Không tìm thấy thành phố. Hãy kiểm tra lại! ")
    }  
}