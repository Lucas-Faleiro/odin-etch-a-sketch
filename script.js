const container = document.querySelector(".container");

const paintSquare = (e) => {
  e.target.style.backgroundColor = "black";
};

for (let i = 0; i < 16; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.addEventListener("mouseover", paintSquare);
  container.appendChild(square);
}
