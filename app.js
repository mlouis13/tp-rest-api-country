// Code Here
const URL = "https://restcountries.com/v3.1/name/";
const URL2 = "https://restcountries.com/v3.1/region/";

const $form = document.querySelector("#search");
const contain = document.querySelector("#container");
document.addEventListener("DOMContentLoaded", () => {
	searchall();
});
$form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = new FormData($form);
	const name = data.get("name");
	const region = data.get("region");
	console.log(name, region);
	if (name !== "" && region == "") {
		console.log("lol1");
		searchcountry(name);
	} else if (region !== "") {
		console.log("lol2");
		searchregion(region);
	} else if (region == "" && name == "") {
		searchall();
	}
});
async function searchcountry(name) {
	contain.innerHTML = "";
	const response = await fetch(URL + name);
	const responseJS = await response.json();
	for (let i = 0; i < responseJS.length; i++) {
		const card = document.createElement("div");
		card.style.backgroundColor = "white";
		card.style.boxShadow = " 0px 0px 7px 2px #00000008";

		const h2 = document.createElement("h2");
		h2.textContent = responseJS[i].name.common;
		const flag = document.createElement("img");
		flag.setAttribute("src", responseJS[i].flags.png);

		const population = document.createElement("p");
		const region = document.createElement("p");
		const capital = document.createElement("p");
		capital.textContent = responseJS[i].capital;
		region.textContent = responseJS[i].region;
		population.textContent = responseJS[i].population;
		card.append(flag, h2, population, region, capital);
		contain.appendChild(card);
	}
	console.log(responseJS);
}
async function searchregion(name) {
	contain.innerHTML = "";
	const response = await fetch(URL2 + name);
	const responseJS = await response.json();
	for (let i = 0; i < responseJS.length; i++) {
		const card = document.createElement("div");
		card.style.backgroundColor = "white";
		card.style.boxShadow = " 0px 0px 7px 2px #00000008";

		const h2 = document.createElement("h2");
		h2.textContent = responseJS[i].name.common;
		const flag = document.createElement("img");
		flag.setAttribute("src", responseJS[i].flags.png);
		const population = document.createElement("p");
		const region = document.createElement("p");
		const capital = document.createElement("p");
		capital.textContent = responseJS[i].capital;
		region.textContent = responseJS[i].region;
		population.textContent = responseJS[i].population;
		card.append(flag, h2, population, region, capital);
		contain.appendChild(card);
	}
	console.log(responseJS);
}
async function searchall() {
	contain.innerHTML = "";
	const response = await fetch(
		"https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region",
	);
	const responseJS = await response.json();
	for (let i = 0; i < responseJS.length; i++) {
		const card = document.createElement("div");
		card.style.backgroundColor = "white";
		card.style.boxShadow = " 0px 0px 7px 2px #00000008";

		const h2 = document.createElement("h2");
		h2.textContent = responseJS[i].name.common;
		const flag = document.createElement("img");
		flag.setAttribute("src", responseJS[i].flags.png);
		const population = document.createElement("p");
		const region = document.createElement("p");
		const capital = document.createElement("p");
		capital.textContent = responseJS[i].capital;
		region.textContent = responseJS[i].region;
		population.textContent = responseJS[i].population;
		card.append(flag, h2, population, region, capital);
		contain.appendChild(card);
	}
	console.log(responseJS);
}
