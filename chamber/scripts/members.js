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
      name.textContent = 'Name: ' + company.name;

      const address = document.createElement('p');
      address.textContent = 'Address: ' + company.address;

      const phone = document.createElement('p');
      phone.textContent = 'Phone: ' + company.phone;

      const website = document.createElement('p');
      website.textContent = 'Website: ' + company.website;

      const membershipLevel = document.createElement('p');
      membershipLevel.textContent = 'Membership Level: ' + company.membership_level;

      const otherInformation = document.createElement('p');
      otherInformation.textContent = 'Other Information: ' + company.other_information;

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(address);
      div.appendChild(phone);
      div.appendChild(website);
      div.appendChild(membershipLevel);
      div.appendChild(otherInformation);

      gridContainer.appendChild(div); 
    });
} 
  
  fetchData();
  