let actualColor = "black";
let drawing = false;
let mouseX = 0;
let mouseY = 0;

let board = document.querySelector("#canvas");
let context = board.getContext("2d");

// Events:
document.querySelectorAll(".colors .color").forEach((item) => {
  item.addEventListener("click", colorClick);
});
board.addEventListener("mousedown", mouseDown);
board.addEventListener("mousemove", mouseMove);
board.addEventListener("mouseup", mouseUp);

// Functions:
function colorClick(e) {
  let myColor = e.target.getAttribute("id");
  actualColor = myColor;

  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}
function mouseDown(e) {
  drawing = true;
  mouseX = e.pageX - board.offsetLeft;
  mouseY = e.pageY - board.offsetTop;
}
function mouseMove(e) {
  if (drawing) {
    draw(e.pageX, e.pageY);
  }
}
function mouseUp() {
  drawing = false;
}
function draw(x, y) {
  let pointX = x - board.offsetLeft;
  let pointY = y - board.offsetTop;

  context.beginPath();
  context.lineWidth = 8;
  if (actualColor === "rgb(72, 117, 72)") {
    context.lineWidth = 50;
  }
  context.lineJoin = "round";
  context.moveTo(mouseX, mouseY);
  context.lineTo(pointX, pointY);
  context.closePath();
  context.strokeStyle = actualColor;
  context.stroke();

  mouseX = pointX;
  mouseY = pointY;
}
