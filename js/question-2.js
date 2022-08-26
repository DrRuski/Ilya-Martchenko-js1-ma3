const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=78f87aa1a06a43ce94a6b3831596e5c4";
const library = document.querySelector(".gameLibrary");

async function gameLibrary() {
  try {
    const response = await fetch(url);
    const dataResult = await response.json();
    const dataList = dataResult.results;

    library.innerHTML = "";

    for (let i = 0; i < dataList.length; i++) {
      const gameInformation = dataList[i];

      if (gameInformation === 8) {
        break;
      }
      library.innerHTML += `
            <div class="game">
            <p>Name: ${gameInformation.name}</p>
            <p>Rating: ${gameInformation.rating}</p>
            <p>Tags: ${gameInformation.tags.length}</p>
            </div>`;
    }
  } catch (error) {
    console.log("Something Went Wrong", error);
  }
}

gameLibrary();
