let container = document.getElementById('cont1')


createInput(4)
createDiv(4);
function createInput(howMany) {

    for (let index = 1; index < howMany + 1; index++) {
        let input = document.createElement("input");
        input.id = "inputer" + index;
        input.type = "number"
        input.max = "9";
        input.min = "0";
        input.className = "inputer"
        input.style.width = "45px";
        input.style.height = "50px";
        input.style.backgroundColor = "yellow";
        input.style.fontSize = "30px"
        container.appendChild(input);
    }
}
function createDiv(howMany) {
    for (let index = 1; index < howMany + 1; index++) {
        let div = document.createElement("div");
        div.id = 'div' + index;
        div.className = "divs";
        div.style.width = "45px";
        div.style.height = "25px";
        div.style.backgroundColor = "white";
        div.style.borderStyle = "solid"
        div.style.borderColor = "yellow"
        div.style.borderWidth = "1px"
        container.appendChild(div);
    }

}