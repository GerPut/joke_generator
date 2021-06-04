const body = document.body.style.background = "#F65158"


function addNode() {
    //Variables
    let divNode = document.createElement("div");
    let paragraphNode = document.createElement("p");
    let textNode = document.createElement("div");
    let button = document.createElement("button")

    //Styles
    divNode.style.backgroundColor = "#FBDE45";
    divNode.style.height = "400px";
    divNode.style.width = "700px";
    divNode.style.border = "2px solid #28324B"
    divNode.style.marginTop = "200px"

    paragraphNode.style.color = "#28324B"
    paragraphNode.style.fontFamily = "Varela Round, sans-serif"
    paragraphNode.style.fontSize = "2rem"
    paragraphNode.style.textAlign = "center"
    paragraphNode.style.margin = "80px"

    button.style.height = "100px";
    button.style.width = "300px";
    button.style.marginTop = "20px"
    button.style.fontFamily = "Varela Round, sans-serif";
    button.style.textAlign = "center";
    button.style.borderRadius = "100px"
    button.style.border = " 2px solid #28324B"
    button.innerText = "Click me for a Joke"


    //Insert
    document.body.appendChild(divNode);
    document.body.appendChild(button)
    paragraphNode.appendChild(textNode);
    divNode.appendChild(paragraphNode);


    //Get Jokes Function
    button.addEventListener('click', generatejoke)

    generatejoke()

    async function generatejoke() {
        const res = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await res.json();
        textNode.innerHTML = data.value
    }


}

addNode();