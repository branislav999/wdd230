const baseURL = "https://branislav999.github.io/wdd230";
const linksURL = "https://branislav999.github.io/wdd230/data/links.json";


async function getLinks(){
    const response = await fetch (linksURL);
    const data = response.json();
    console.log(data);
}