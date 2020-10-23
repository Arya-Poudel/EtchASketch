const container = document.getElementById("container");

let random;
let erase;
document.getElementById('btn2').onclick = function(){
  random = true;
  erase = false;
};

document.getElementById('btn3').onclick = function(){
  random = false;
  erase = false;
};

document.getElementById('btn5').onclick = function(){
  erase = true;
};



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = 'white';
    container.appendChild(cell).className = "grid-item";
  };

  //change color on hover
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.addEventListener('mouseover', () => {

     if (erase) {
         item.style.backgroundColor = 'white';
         return;
     }

     if (item.style.backgroundColor == 'white') {
        if (random) {
               item.style.backgroundColor = getRandomColor();
          }
        else{
              item.style.backgroundColor = 'black';
          }
      }
    }));
};

makeRows(50,50);


function makeNewGrid(){
	let x = prompt("How many grids? Not more than 100. ");
	console.log(x);
	x = Number(x);
	if (x>100 || x<1 || isNaN(x)) {
		alert("Pick a number between 1 and 120. Default is set to 50.")
		x = 50;
	}
  //remove existing grid items
	while(container.firstChild){
      container.removeChild(container.firstChild);
  }
	makeRows(x,x);
};


function clearGrid(){
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((element) => {
     element.style.backgroundColor = 'white';
  });
  erase = false;
  random = false;
};


function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
};
