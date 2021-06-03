const body = document.body.style.background = "green"


function addNode() {
    //Variables
    let divNode = document.createElement("div");
    let paragraphNode = document.createElement("p");
    let textNode = document.createTextNode("hello");
    let button = document.createElement("button")

    //Styles
    divNode.style.backgroundColor = "red";
    divNode.style.height = "400px";
    divNode.style.width = "700px";
    divNode.style.marginTop = "200px"

    paragraphNode.style.color = "white"
    paragraphNode.style.fontFamily = "Varela Round, sans-serif"
    paragraphNode.style.fontSize = "2rem"
    paragraphNode.style.textAlign = "center"
    paragraphNode.style.margin = "100px"

    button.style.height = "100px";
    button.style.width = "300px";
    button.style.marginTop = "20px"
    button.style.fontFamily = "Varela Round, sans-serif";
    button.style.textAlign = "center";
    button.innerText = "Press for a Joke"


    //Insert
    document.body.appendChild(divNode);
    document.body.appendChild(button)
    paragraphNode.appendChild(textNode);
    divNode.appendChild(paragraphNode);


    //Get Jokes Function



}

addNode();