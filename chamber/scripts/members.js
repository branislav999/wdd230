async function fetchData() {
    
    const response = await fetch('https://branislav999.github.io/wdd230/chamber/data/members.json');
    const jsonData = await response.json();
    const members = jsonData.members; 

    const gridContainer = document.querySelector('.members'); 

    members.forEach(company => {
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
  


  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("article");
  
  
  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList); 
  
  function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
  }
  