function makeGrid(height, width) {
  var table = document.getElementById("pixelCanvas");
  var grid = '';

  // loop for each row
  for (var i = 0; i < height; i++){
    grid += '<tr class="row_' + i + '">';
    // loop for each cell
    for (var j = 0; j < width; j++){
      grid += '<td class="cell" id="row_' + i + '-cell_' + j + '"></td>';
    }
    grid += '</tr>';
  }

  // adding grid into the table element
  table.innerHTML = grid;

  // adding click event to the grid cells after the creation of the table grid
  addClickEventToCells();
}

// getting values for height and width from form and uses them to call makrGrid()
function formSubmission() {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// adding click events to all cells
function addClickEventToCells() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}

// on color selection return color:
var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value; // sets color to defaul(black);
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);

// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};
