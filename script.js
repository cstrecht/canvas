// Select a color, and save that choice:
let currentColor = "black"; // start always w/ black color

// Events:
document.querySelectorAll(".colors .color").forEach((item) => {
  item.addEventListener("click", colorClick);
});

// Functions:
function colorClick(e) {
  let color = e.target.getAttribute("id");
  console.log("color: " + color);
  actualColor = color;

  // remove active class from black, and put the active class in other color:
  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}
