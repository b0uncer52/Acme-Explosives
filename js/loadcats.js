"use strict";

	let loadCats = () => {

		return new Promise((didit, nope) => {
		var loader = new XMLHttpRequest();

		loader.addEventListener("load", (event) => {
			let cats = JSON.parse(event.target.responseText).categories;
			let dropdown = document.getElementsByClassName("dropdown-menu")[0];
			let dropString = "";
			for(var cat in cats){ //create a link for each category in the dropdown
				dropString += `<li class="category" id="cat${cat}"><a href="#">${cats[cat].name}</a></li>`;
			}
			dropdown.innerHTML = dropString;
			didit();
		});
		loader.addEventListener("error", () => {
			console.log("Error occurred loading file");
			nope();
		});
		loader.open("GET", "../categories.json");
		loader.send();
	});

};