let characters = document.querySelector("#characters");

fetch("https://rickandmortyapi.com/api/character")
.then((response) => response.json())
.then((data) => {
  console.log(data.results);

  data.results.map((item) => {
    const content = document.createElement("div")
    content.innerHTML =
    `
    <h4>${item.name}</h4>
    `;
    characters.append(content);
  })
});