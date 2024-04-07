const button = document.querySelector("#menu");
const navigation = document.querySelector("nav");


button.addEventListener("click",() =>{
    navigation.classList.toggle('open');
    button.classList.toggle('open'); 

})



document.getElementById('last-modified').textContent += document.lastModified;

const dark = document.querySelector("#dark");
const main = document.querySelector('main')

dark.addEventListener("click", () => {
    main.classList.toggle('change');
    dark.classList.toogle('change');
})


const visits = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
visits.textContent += numVisits;

numVisits++;

localStorage.setItem("numVisits", numVisits);


const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.81&lon=20.46&units=metric&appid=70ad457d3e1844c98c59e04853e6b079"


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
    currentTemp.innerHTML = `${data.main.temp}&deg;C`; 
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
    let desc = data.weather[0].description; 
    weatherIcon.setAttribute('src', iconsrc); 
    weatherIcon.setAttribute('alt', desc); 
    captionDesc.textContent = `${desc}`; 
}


const currentYear = new Date().getFullYear();

const copyrightElement = document.querySelector('footer p:first-child');
copyrightElement.textContent += `${currentYear} Branislav Bogosavac, Serbia`;
