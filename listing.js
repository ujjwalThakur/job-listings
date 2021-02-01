
const list = document.querySelectorAll(".item");

function filter(filters){
	if(filters.length){
		filterBar.classList.remove("invisible");
	}
	for (let k = 0; k < filters.length; k++) {
		for(let j=0; j<list.length; j++){
		    let text = list[j].querySelector(".tags").innerText;
		    if(text.indexOf(filters[k]) == -1){
		    	list[j].classList.add("hidden");
		}
  	
    }
  }
}

const filterBar = document.querySelector(".filterBar");
let filters = [];

// function createFilterTag(text){
// 	let element = document.createElement('span');
// 	filters = filters + text + " ";
// 	console.log(filters)

// 	element.innerHTML = text;
// 	element.classList.add("tag");
// 	filterBar.appendChild(element);
// }

var num = 1;

function createInnerHtml(text) {

	filters.push(text) ;
	console.log(filters);

	newFilter = `<span class="tag num${num}"> <span>${text}</span> &nbsp <span class="cross num${num}">&#10005</span> </span>`;
	currentHtml = filterBar.querySelector("div").innerHTML
	filterBar.querySelector("div").innerHTML = currentHtml + newFilter;

	let crosses = document.querySelectorAll(".cross");

	for (let i = 0; i < crosses.length; i++) {
		crosses[i].addEventListener("click", function() {
			let tag = document.querySelector("."+this.classList[1]);
			let filterIndex = filters.indexOf( tag.innerText.split(" ",1)[0] );

			filters.splice(filterIndex, 1);

			tag.remove();
			clearFilters();
			filter(filters);
		})
	}
	num += 1;
}

const tags = document.querySelectorAll(".tags");
for (var i = 0; i < tags.length; i++) {
	var children = tags[i].children;
	for (var j = 0; j < children.length; j++) {
		children[j].addEventListener("click", function() {
			let text = this.innerText;
			if (filters.indexOf(text) == -1){
				// createFilterTag(text);
				createInnerHtml(text);
			}
			filter(filters);
		});
	}
}


const clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
	filterBar.querySelector("div").innerHTML = "";
	filters = [];
	clearFilters();
});

function clearFilters() {
	for (let i = 0; i < list.length; i++) {
		list[i].classList.remove('hidden');
	filterBar.classList.add("invisible")
		
	}
}

for (var item of list){
	if(item.querySelector('.featured') != null){
	  item.classList.add('blueBorder')
	}
  }
