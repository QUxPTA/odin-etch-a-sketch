const container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});

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
        newSquare.addEventListener('mouseover', () => {
          newSquare.style.backgroundColor = 'black';
        });
      });
    } else {
      alert('Please enter a valid number between 1 and 100.');
    }
  }
});
