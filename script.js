const container = document.querySelector(".container");
const button = document.querySelector("button");
const containerArea = 480 * 480;
const initialSquareSide = 24;

const paintSquare = (e) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = "#" + randomColor;
  e.target.removeEventListener("mouseover", paintSquare);
};

const createNewGrid = () => {
  let gridSize = Number(prompt("Please enter new size of grid", 16));

  if (!Number.isInteger(gridSize) || gridSize > 40 || gridSize < 1) {
    alert("Please type an intenger number (min 1, max 40)");
    return "ERROR";
  }
  const numberOfSquares = gridSize * gridSize;
  const sideOfSquare = Math.sqrt(containerArea / numberOfSquares) - 6; // minus 6 because of margin + border

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = sideOfSquare + "px";
    square.style.height = sideOfSquare + "px";
    square.addEventListener("mouseover", paintSquare);
    container.appendChild(square);
  }
};

//inital state
for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.style.width = initialSquareSide + "px";
  square.style.height = initialSquareSide + "px";
  square.addEventListener("mouseover", paintSquare);
  container.appendChild(square);
}

button.addEventListener("click", createNewGrid);
