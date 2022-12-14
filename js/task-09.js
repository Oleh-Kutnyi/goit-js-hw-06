function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  color.innerHTML = hexColor;
});
