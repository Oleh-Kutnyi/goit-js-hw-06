const categories = [...document.querySelector("#categories").children];

console.log(`Number of categories: ${categories.length}`);

for (const item of categories) {
  const heading = item.querySelector("h2").innerText;
  const list = item.querySelector("ul");

  console.log(`Category: ${heading}\nElements: ${list.children.length}`);
}
