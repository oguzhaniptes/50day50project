const jokeEl = document.getElementById("joke")
const jokeButton = document.getElementById("jokeBtn")

jokeButton.addEventListener('click', generateJoke)

generateJoke()
// ----------------------------------------THEN METHOD--------------------------------
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         jokeEl.innerHTML = data.joke
//     })
// }
// ------------------------------------------------------------------------------------------------

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        },
    }
    const res = await fetch("https://icanhazdadjoke.com", config)
    const data = await res.json();
    jokeEl.innerHTML = data.joke
   
}