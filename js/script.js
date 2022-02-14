// Question 1 //
const getRemainder = (a, b) => {
    return a % b;
  };
  
  console.log(getRemainder(396, 3223));

  // Question 2 //
  const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=135a0fcbaf9f4082a565c3345d2fc560";

async function createGames() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const arrayOfGames = result.results;

    const gamesContainter = document.querySelector(".games-container");
    let games = "";

    for (let i = 0; i < 8; i++) {
      gamesContainter.innerHTML = "";
      games += `<div class="game-card")>
     <h2 class="name" >Name: ${arrayOfGames[i].name}</h2>
     <h2 class="rating">Rating: ${arrayOfGames[i].rating}</h2>
     <h2 class="tags">Tags: ${arrayOfGames[i].tags.length}</h2>
     
     </div>`;
    }
    gamesContainter.classList = "after";
    gamesContainter.innerHTML = games;
  } catch {
    const loading = document.querySelector(".loader");
    loading.classList = "error";
    loading.innerHTML = `There was an error loading the games`;
  }
}

createGames();