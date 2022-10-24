const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const item of ingredients) {
  const li = document.createElement("li");
  li.innerText = item;
  document.getElementById("ingredients").append(li);
}
