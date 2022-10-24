function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxList = document.getElementById("boxes");
const controls = document.getElementById("controls");
const input = controls.querySelector("input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + boxList.children.length * 10;
    const item = document.createElement("div");
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.backgroundColor = getRandomHexColor();
    boxList.append(item);
  }
}

function destroyBoxes() {
  boxList.replaceChildren();
}

controls.querySelectorAll("button").forEach((el) =>
  el.addEventListener("click", (event) => {
    console.log(event.target.dataset);
    if (event.target.dataset.create !== undefined) {
      createBoxes(input.valueAsNumber);
    } else if (event.target.dataset.destroy !== undefined) {
      destroyBoxes();
      input.value = '';
    }
  })
);
