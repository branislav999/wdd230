const button = document.querySelector("#menu");
const navigation = document.querySelector("nav");


button.addEventListener("click",() =>{
    navigation.classList.toggle('open');
    button.classList.toggle('open'); 

})


const dark = document.querySelector("#dark");
const main = document.querySelector('main')
const footer = document.querySelector('footer')

dark.addEventListener("click", () => {
    main.classList.toggle('change');
    dark.classList.toogle('change');
})


const visits = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
visits.textContent += numVisits;

numVisits++;

localStorage.setItem("numVisits", numVisits);