// tady je místo pro náš program

// Cviceni REALITKA
/*
const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

document.body.innerHTML += "<p>Dispozice: "+ apartment.disposition +"</p>"
document.body.innerHTML += "<p>Najem bez poplatku: "+ apartment.price.rent +"</p>"
document.body.innerHTML += "<p>Vymera bytu: "+ apartment.area.floorage + apartment.area.units +"</p>"

const city = apartment.city
const disctrict = apartment.district;

document.body.innerHTML += "<p>Mesto: "+ city +"</p>"
document.body.innerHTML += "<p>Mestska cast: "+ district +"</p>"


apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>"

*/

// Cviceni KNIHOVNA

/*
const book = {
	title: 'Forever Home',
	author: 'Graham Norton',
	pages: 462,
	published: 2022,
	language: 'English',
	publisher: {
		name: 'ABC Press',
		address: '221B Baker Street, London'
	}
}

book.title = "The Thursday Murder Club",
book.author = "Richard Osman",
book.pages = 563,
book.published = 2020
book.publisher.name = "DEF Press"
book.publisher.address = "10 Downing Street, London"


const book2 = {
	
}
*/

// Cviceni OCKOVANI

let vstupJmeno = prompt ("jmeno")
let vstupVek = Number(prompt('Vek'))

const person = {
    name: vstupJmeno,
    age: vstupVek,
}

document.body.innerHTML = "<p> Jmeno: " + person.name + "</p>"
document.body.innerHTML = "<p> Vek: " + person.age + "</p>"

