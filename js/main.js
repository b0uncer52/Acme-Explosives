"use strict";

function loadStuff(id) {
	loadTypes(id).then(
		loadProds(),
		() => {console.log("oopsy poopsy");}
	);
}

//load categories then attach listeners to the dropdown items created in 'loadCats()'
loadCats().then(
	() => {
		$(".category").click(function () {
			let id = ($(this)[0].id).replace("cat", "");
			loadStuff(id);
		});
	},
	() => {console.log("we didn't do it");}
);

