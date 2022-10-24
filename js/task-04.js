let counterValue = 0;
const span = document.getElementById("value");
span.innerText = `${counterValue}`;

document.querySelectorAll("#counter button").forEach((el) => {
  el.addEventListener("click", () => {
    if (el.dataset.action === "increment") {
      counterValue++;
    } else if (el.dataset.action === "decrement") {
      counterValue--;
    }
    span.innerText = `${counterValue}`;
  });
});
