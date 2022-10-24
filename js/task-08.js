const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = [...event.target.elements];
  const formValue = {};
  for (const item of inputs) {
    if (item.type === "password" || item.type === "email") {
      if (!item.value) return alert("All fields must be filled in.");
      formValue[item.name] = item.value;
    }
  }
  console.log(formValue);
  event.target.reset();
});
