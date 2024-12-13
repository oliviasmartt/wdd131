
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

//--------------------------------------------------------
// Using the ".show" class definition from templs.css
//--------------------------------------------------------
menu.addEventListener('click', () => {
	// menu.classList.toggle('show');
	// layout.classList.toggle('show');
	toggleMenuButton();
});
// ABOVE - Add a click event listener to the hamburger button and use a callback
//         function that toggles the element's list of classes.

function toggleMenuButton() {
	menu.classList.toggle('show');
	layout.classList.toggle('show');
};	

hambutton.addEventListener('click', () => {
})

function toggleActive(element) {

 }

let pagename = "Temples";

const temples = [
	{
		templeName: "Redlands California",
		location: "Redlands, California, United States",
		dedicated: "2003, Septemember, 14",
		area: 11500,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/redlands-california-temple/redlands-california-temple-37300.jpg"
	},
	{
		templeName: "Laie Hawaii",
		location: "Laie, Hawaii, United States",
		dedicated: "2010, November, 2010",
		area: 74792,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Pocatello Idaho",
		location: "Pocatello, Idaho, United States",
		dedicated: "2021, November, 7",
		area: 6861,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23276-main.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Fort Lauderdale Florida",
		location: "Fort Lauderdale, Florida, United States",
		dedicated: "2014, May, 4",
		area: 9600,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-3792-main.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4058.jpg"
	},

	{
		templeName: "Kansas City Missouri",
		location: "Kansas, Missouri, United States",
		dedicated: "1989, August, 19",
		area: 80500,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/kansas-city-missouri-temple/kansas-city-missouri-temple-36983-main.jpg"
	},
	{
		templeName: "Provo City Center",
		location: "Provo, Utah, United States",
		dedicated: "2016, March, 20",
		area: 85084,
		imageUrl: 
			"https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-38167-thumb.jpg"
	},
	{
		templeName: "Okinawa Japan",
		location: "Okinawashi, Okinawaken, Okinawa, Japan",
		dedicated: "2023, November, 12",
		area: 110000,
		imageUrl: 
			"https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-9974.jpg"
	},
	{
		templeName: "Grand Rapids Michigan",
		location: "Grand Rapids, Michigan, United States",
		dedicated: "2024, November, 7",
		area: 110000,
		imageUrl: 
			"https://churchofjesuschristtemples.org/assets/img/temples/grand-rapids-michigan-temple/grand-rapids-michigan-temple-54994-main.jpg"
	},
	{
		templeName: "Deseret Peak Utah",
		location: "Tooele, Utah, United States",
		dedicated: "2024, November, 10",
		area: 110000,
		imageUrl: 
			"https://churchofjesuschristtemples.org/assets/img/temples/deseret-peak-utah-temple/deseret-peak-utah-temple-8962.jpg"
	},
];

// Call the createTempleCard() function (defined below)
createTempleCard(temples, "Starting Home Page");

const homelink = document.querySelector("#home");
const oldlink = document.querySelector("#old");
const utahlink = document.querySelector("#california");
const nonutahlink = document.querySelector("#noncalifornia");
const newlink = document.querySelector("#new");
const largelink = document.querySelector("#large");
const smalllink = document.querySelector("#small");

// Anonymous () function definitions
// Home button - get all temples
homelink.addEventListener('click', () => {
	let hometemple = temples;
	createTempleCard(hometemple, "Temples Home Page");
})

californialink.addEventListener('click', () => {
	let california = temples.filter(temples => temples.location.includes("California"));
	createTempleCard(california, "California Temples");
})

noncalifornialink.addEventListener('click', () => {
	let noncalifornia = temples.filter(temples => !temples.location.includes("California"));
	createTempleCard(noncalifornia, "Non-California Temples");
})

newlink.addEventListener('click', () => {
	let newtemple = temples.filter(temples => (new Date(temples.dedicated).getFullYear() > 2000));
	createTempleCard(newtemple, "New Temples");
})

oldlink.addEventListener('click', () => {
	let oldtemple = temples.filter(temples => (new Date(temples.dedicated).getFullYear() < 1990));
	createTempleCard(oldtemple, "Old Temples");
})

largelink.addEventListener('click', () => {
	let largetemple = temples.filter(temples => temples.area > 90000);
	createTempleCard(largetemple, "Larger Temples");
})

smalllink.addEventListener('click', () => {
	let smalltemple = temples.filter(temples => temples.area < 100000);
	createTempleCard(smalltemple, "Smaller Temples");
})

function createTempleCard(filteredTemples, pagename) {
	// clear out last selected list of temples
	document.querySelector(".container").innerHTML="";
	document.querySelector("#pagename").innerHTML="";

	// Add page Title
	// let pagename = "Home Page";
	let h2Title = document.createElement("h2");
	h2Title.innerHTML = `<h2 class="stdlf">${pagename}</h2>`;
	document.querySelector("#pagename").appendChild(h2Title);

	// Foreach temple in the temples Array, do the following
	filteredTemples.forEach(temple => {
		let card       = document.createElement("div");
		card.classList.add("card");
		// Above - add class="card" to the above <div class="card">
		// Since img is part of <div>, it will use the class: .card img

		let name       = document.createElement("h3");
		let location   = document.createElement("p");
		let dedication = document.createElement("p");
		let area       = document.createElement("p");
		let img        = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML   = `<span class="label">Location: </span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML       = `<span class="label">Size:     </span> ${temple.area} sq ft`;
		img.setAttribute("src",     temple.imageUrl);
		img.setAttribute("alt",     `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width",   "398");
		img.setAttribute("height",  "250");

		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);

		document.querySelector(".container").appendChild(card);
	})
}