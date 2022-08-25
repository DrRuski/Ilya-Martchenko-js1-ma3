
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b560cfe448e24c49aaa9380d90353667"
const library = document.querySelector(".gamesLibrary");



async function gameLibrary(){
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        
        library.innerHTML = "";

        for (let i = 0; i < result.length; i++){
            const test = result[i];
            if(test === 8){
                library.innerHTML = `<div><p>${test.name}</p></div>`;
            }
        }
    }
    catch(error) {
        console.log("Something Went Wrong", error);
    }
    
}

gameLibrary();