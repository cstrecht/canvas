let currentColor = "black";
let drawing = false;

let board = document.querySelector("#canvas");
let context = board.getContext("2d");

// Events:
document.querySelectorAll(".colors .color").forEach((item) => {
  item.addEventListener("click", colorClick);
});
board.addEventListener("mousedown", mouseDown);
board.addEventListener("mouseup", mouseUp);
// Functions:
function colorClick(e) {
  let color = e.target.getAttribute("id");
  console.log("color: " + color);
  currentColor = color;

  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}
function mouseDown() {
  drawing = true;
}
function mouseUp() {
  console.log("already clicked");
  drawing = false;
}
