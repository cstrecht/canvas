let actualColor = "black";
let drawing = false;

let board = document.querySelector("#canvas"); // selecting the drawing board
let context = board.getContext("2d"); // this variable will give rendering in 2D to the <canvas> element
// When I click and hold (mousedown), the drawing mode will be activated!
// Events:
document.querySelectorAll(".colors .color").forEach((item) => {
  item.addEventListener("click", colorClick);
});
board.addEventListener("mousedown", mouseDown);
// Functions:
function colorClick(e) {
  let color = e.target.getAttribute("id");
  console.log("color: " + color);
  actualColor = color;

  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}
function mouseDown() {
  console.log("clicked");
  drawing = true;
}
