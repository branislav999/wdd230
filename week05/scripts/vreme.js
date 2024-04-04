const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#caption-desc");

const url = "https://api.openweathermap.org/data/2.5/forecast?q=belgrade&units=metric&appid=70ad457d3e1844c98c59e04853e6b079";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const today = new Date().getDate();
    const currentDayOfWeek = new Date().getDay(); // Get the current day of the week
    let count = 0;
    for (let i = 0; i < data.list.length; i++) {
        const dayData = data.list[i];
        const date = new Date(dayData.dt * 1000); 
        const dayOfMonth = date.getDate();
        const temp = dayData.main.temp;
        const iconSrc = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;
        const desc = dayData.weather[0].description;

        if (dayOfMonth === today || dayOfMonth === today + 1 || dayOfMonth === today + 2 || dayOfMonth === today + 3) {
            const forecastItem = document.createElement("div");
            forecastItem.innerHTML = `
                <h3>${getDayOfWeek(currentDayOfWeek + count)}</h3>
                <p>${temp}&deg;C</p>
                <img src="${iconSrc}" alt="${desc}">
                <p>${desc}</p>
            `;
            document.body.appendChild(forecastItem);

            count++;
        }

        if (count >= 4) {
            break; 
        }
    }
}

// Function to get the day of the week from its index
function getDayOfWeek(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex % 7];
}