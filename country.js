// Code Here
const info2 = new URLSearchParams(window.location.search);
const info = info2.get("name");
const URL = "https://restcountries.com/v3.1/name/";
const img = document.querySelector("#img");
const $name = document.querySelector("#name");
const originalName = document.querySelector("#originalName");
const population = document.querySelector("#population");
const region = document.querySelector("#region");
const subRegion = document.querySelector("#subRegion");
const capital = document.querySelector("#capital");
const topleveldomain = document.querySelector("#top-level-domain");
const curencies = document.querySelector("#currencies");
const language = document.querySelector("#langue");
const contain = document.querySelector("#contain");
document.addEventListener("DOMContentLoaded", () => {
	searchcountry();
});
async function searchcountry() {
	const response = await fetch(URL + info);
	const responseJS = await response.json();
	console.log(responseJS);
	for (let i = 0; i < responseJS.length; i++) {
		img.setAttribute("src", responseJS[i].flags.png);
		$name.textContent = responseJS[i].name.common;
		originalName.textContent = responseJS[i].name.official;
		population.textContent = responseJS[i].population;
		region.textContent = responseJS[i].region;
		subRegion.textContent = responseJS[i].subregion;
		capital.textContent = responseJS[i].capital;
		topleveldomain.textContent = responseJS[i].tld;
		curencies.textContent = responseJS[i].currencies;
		language.textContent = responseJS[i].languages;
		for (let j = 0; j < responseJS[i].borders.length; j++) {
			const border = document.createElement("a");
			// border.classList.add("border-countries");
			border.textContent = responseJS[i].borders[j];
			contain.append(border);
		}
	}
}
