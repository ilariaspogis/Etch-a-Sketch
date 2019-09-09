const gridBox = document.getElementById("divGridBox");
let makeGrid = (numSize) => {
    gridBox.innerHTML = (""); 
    for (i = 0; i < numSize * numSize; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('gridSquare');
        gridBox.appendChild(gridSquare);
    }
    setSquareSize(numSize);
    document.getElementById("divGridBox").style.visibility = "visible";
}
let gridSize = () => {
    let gridParam = '';
    gridParam = prompt("How many Rows and Columns would you like? Maximum is 100. ");
    while (isNaN(gridParam) || gridParam <= 0 || gridParam>100) {
        alert("Please enter a valid value.")
        gridParam = prompt("How many Rows and Columns would you like?");
    }
    return gridParam;
}

let setSquareSize = (numSize) => {
    let baseSquare = document.getElementsByClassName("gridSquare");
    let i;
    for (i = 0; i < baseSquare.length; i++) {
        baseSquare[i].style.height = (749 / numSize) + "px";
        baseSquare[i].style.width = (749 / numSize) + "px";
    }
}

let etchBlack = () => {
    document.getElementById("divContainer").classList.remove("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background = "black";
        });
    });
}

let etchColor = (color) => {
    document.getElementById("divContainer").classList.remove("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background = color.rgbaString;
        });
    });
}

let etchErase = () => {
    document.getElementById("divContainer").classList.remove("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background = "";
        });
    });
}

let etchClear = () => {
    document.getElementById("divContainer").classList.remove("shake");
    document.getElementById("divContainer").classList.add("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.style.background = "";
        gridSquare.style.opacity="1";
    });
}

let etchGreyscale = () => {
    document.getElementById("divContainer").classList.remove("shake");
    etchClear();    
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        document.getElementById("divGridBox").style.background = "#fae6f0";
        gridSquare.style.opacity="0";
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background="black";
            t.target.style.opacity = `${Number(t.target.style.opacity) + 0.1}`;
        });
    });
}

let etchBubble = () => {
    document.getElementById("divContainer").classList.remove("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.style.background = "url('images/bubble.png')";
        gridSquare.style.backgroundSize = "100%, 100%";
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background = "url('images/popbubble.png')";
            t.target.style.backgroundSize = "100%, 100%";
        });
    });
}

btnBlack.addEventListener('click', function () { makeGrid(gridSize()) });
btnBlack.addEventListener('click', function () { etchBlack() });
btnGreyscale.addEventListener('click', function () { etchGreyscale() });
btnEraser.addEventListener('click', function () { etchErase() });
btnClear.addEventListener('click', function () { etchClear() });
btnBubble.addEventListener('click', function () { etchBubble() });
//Color picker code and listener
let btnColor = document.querySelector('#btnColor');
let colorPicker = new Picker(btnColor);

colorPicker.onDone = function (color) {
    etchColor(color);
}
