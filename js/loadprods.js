"use strict";

let loadProds = () => {
	return new Promise((resolve, reject) => {
		var loader = new XMLHttpRequest();

		loader.addEventListener("load", (event) => {
			let prods = JSON.parse(event.target.responseText).products[0];
			let displayString = "";
			for(var prod in prods){
				let x = prods[prod];
				let id = "#id" + x.type + ".type";
				var text = $(`${id}`).html();
				$(`${id}`).html(text + `<div class="col-sm-4 prod">${x.name}<br>${x.description}</div>`);
			}
			resolve();
		});
		loader.addEventListener("error", () => {
			console.log("Error occurred loading file");
			reject();
		});
		loader.open("GET", "../products.json");
		loader.send();
	});
};

// $(this)[0].id