const input = document.getElementById("validation-input");

input.addEventListener("blur", (event) => {
  const { dataset, value } = event.target;
  if (value.length < +dataset.length) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
});
