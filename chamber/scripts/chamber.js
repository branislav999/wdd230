


document.getElementById('last-modified').textContent += document.lastModified;

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
})

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
    const currentDayOfWeek = new Date().getDay(); 
    let count = 0;
    const weatherSection = document.getElementById('weather'); 
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
            weatherSection.appendChild(forecastItem); 

            count++;
        }

        if (count >= 4) {
            break; 
        }
    }
}

function getDayOfWeek(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex % 7];
}




async function fetchData() {
  const response = await fetch('https://branislav999.github.io/wdd230/chamber/data/members.json');
  const jsonData = await response.json();
  const members = jsonData.members.filter(company => company.membership_level === "Gold" || company.membership_level === "Silver");

  const gridContainer = document.querySelector('.members-index'); 

  members.sort(() => Math.random() - 0.5);
  
  const randomCompanies = members.slice(0, 2);

  randomCompanies.forEach(company => {
      const div = document.createElement('div');
      div.classList.add('company');

      const img = document.createElement('img');
      img.src = company.image;
      img.alt = company.name + ' logo';
      img.setAttribute('width', '100');

      const name = document.createElement('p');
      name.textContent = company.name;

      const address = document.createElement('p');
      address.textContent = company.address;

      const phone = document.createElement('p');
      phone.textContent = company.phone;

      const website = document.createElement('p');
      website.textContent = company.website;

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(address);
      div.appendChild(phone);
      div.appendChild(website);

      gridContainer.appendChild(div); 
  });
} 

fetchData();


const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
    const banner = document.querySelector('#banner');
    banner.style.display = 'block'; 

    
    const message = document.createElement('p');
    message.textContent = "You are warmly invited to our meet and greet on Wednesday at 7:00pm";

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.id = 'close-banner';
    
    closeButton.addEventListener('click', () => {
        banner.style.display = 'none'; 
    });

    banner.appendChild(message);
    banner.appendChild(closeButton);
}



