function makeGrid() {
    let height = document.getElementById('inputHeight'); // JS variable for grid height value
    let width = document.getElementById('inputWidth'); // JS variable for grid width value
    const canvas = document.getElementById('pixelCanvas'); // JS variable for the table grid

    canvas.innerHTML = ''; // clears the previous grid
    for (let i = 0; i < height.value; i++) {
		const rows = canvas.insertRow(i); // a for loop that constructs row(s)
		for (let j = 0; j < width.value; j++) {
			const cell = rows.insertCell(j); // a for loop that constructs cell(s) 
            
			cell.addEventListener("pointerdown", e => { // pointer event is utilized for touch-enabled compatilibty
				let color = document.querySelector("#colorPicker"); // JS variable for the color value
				e.target.style.backgroundColor = color.value; // Adds color when cell is clicked
			});
		}
	}
}

function submitGrid() { // submitGrid() function is called when 'create' button is clicked
	makeGrid(); // makeGrid() function is called
}