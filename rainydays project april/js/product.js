const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
async function getProduct() {
    try {
    const response = await fetch(url);
    const details = await response.json();

for (let i = 0; i < details.length; i++) {
    console.log(details[i]);
    
    document.title = details[i].name;

}

getProduct();

function createHTML(details)  {
    container.innerHTML = `<div class="imagecontainer"><img src="${details.images[0].src}"></div>
    <div class="productinfo">
    <h3>${details.name}</h3>
    <p>${details.prices.price}
    ${details.prices.currency_symbol}</p>
    <p>${details.short_description}</p></div>
    `;
}