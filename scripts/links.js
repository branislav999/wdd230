function displayLinks(weeks) {
    const weeksListItems = document.querySelectorAll('.weeks li');

    weeks.forEach((weekObj, index) => {
        const weekItem = weeksListItems[index];
        const weekLink = weekItem.querySelector('a:first-of-type');
        weekLink.textContent = weekObj.week + ":";

        const existingLinks = weekItem.querySelectorAll('a:not(:first-of-type)');
        existingLinks.forEach((link, linkIndex) => {
            if (weekObj.links[linkIndex]) {
                link.href = weekObj.links[linkIndex].url;
                link.textContent = weekObj.links[linkIndex].title;
            } else {
                link.remove();
            }
        });

        if (weekObj.links.length > existingLinks.length) {
            for (let i = existingLinks.length; i < weekObj.links.length; i++) {
                const newLink = document.createElement('a');
                newLink.href = weekObj.links[i].url;
                newLink.textContent = weekObj.links[i].title;
                weekItem.appendChild(newLink);
            }
        }
    });
}

const baseURL = "https://branislav999.github.io/wdd230";
const linksURL = "https://branislav999.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch (linksURL);
    const data = await response.json();
    displayLinks(data.weeks); 
}

getLinks();
