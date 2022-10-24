const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  const { value } = event.target;
  output.innerText = value ? value : "Anonymous";
});
