// Initial Grid
const container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(applyHoverEffect);

// Grid Created after Prompt
const button = document.getElementById('button');
button.addEventListener('click', () => {
  let numberOfSquares = prompt(
    'Enter the number of squares per side (max 100):',
    '16'
  );
  if (numberOfSquares !== null) {
    const size = parseInt(numberOfSquares);
    if (size > 0 && size <= 100) {
      container.innerHTML = '';
      for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
      }

      // Update CSS to adjust grid layout
      const squarePercentage = 100 / size;
      const newSquares = document.querySelectorAll('.square');
      newSquares.forEach((newSquare) => {
        newSquare.style.width = `${squarePercentage}%`;
        newSquare.style.height = `${squarePercentage}%`;
        newSquare.style.backgroundColor = 'white';
        applyHoverEffect(newSquare);
      });
    } else {
      alert('Please enter a valid number between 1 and 100.');
    }
  }
});

// Generating Random Colors
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Generating Square Colors Dynamically
function applyHoverEffect(square) {
  const randomColorToggle = document.getElementById('randomColorToggle');
  square.addEventListener('mouseover', () => {
    // Generate Random Color on hover if toggle is checked
    if (randomColorToggle && randomColorToggle.checked) {
      square.style.backgroundColor = getRandomColor();
    } else {
      square.style.backgroundColor = 'black';
    }
  });
}

// Clear Sketch Grid
function clearGrid() {
  const squares = document.querySelectorAll('.square'); // freshly select all squares
  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
  });
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearGrid);
