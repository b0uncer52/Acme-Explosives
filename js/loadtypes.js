"use strict";

let loadTypes = (cat) => {
	return new Promise((resolve, reject) => {
		var loader = new XMLHttpRequest();
		var display = $("#display")[0];
		loader.addEventListener("load", (event) => {
			let types = JSON.parse(event.target.responseText).types;
			let displayString = "";
			for(var type in types){
				var x = types[type];
				if(types[type].category == cat) {
					displayString += `<div class="col-sm-12 type1">${x.name}-${x.description}<section class="type" id="id${x.id}"></section></div>`;
				}
			}
			display.innerHTML = displayString;
			resolve();
		});
		loader.addEventListener("error", () => {
			console.log("Error occurred loading file");
			reject();
		});
		loader.open("GET", "../types.json");
		loader.send();
	});
};