const gridBox = document.getElementById("divGridBox");
//Create the grid based on user input
let makeGrid = (numSize) => {
    gridBox.innerHTML = (""); //Reset the grid
    for (i = 0; i < numSize * numSize; i++) {
        let gridSquare = document.createElement("div"); //add new square
        gridSquare.classList.add('gridSquare'); //assign css class
        gridBox.appendChild(gridSquare);
    }
    setSquareSize(numSize);
    document.getElementById("divGridBox").style.visibility = "visible";
}
//get user input for grid size
let gridSize = () => {
    let gridParam = '';
    gridParam = prompt("How many Rows and Columns would you like? Maximum is 100. ");
    while (isNaN(gridParam) || gridParam <= 0 || gridParam>100) {
        alert("Please enter a valid value.")
        gridParam = prompt("How many Rows and Columns would you like?");
    }
    return gridParam;
}

//Set size for grid squares based on user input, to be called in makeGrid
let setSquareSize = (numSize) => {
    let baseSquare = document.getElementsByClassName("gridSquare");
    let i;
    for (i = 0; i < baseSquare.length; i++) {
        baseSquare[i].style.height = (749 / numSize) + "px";
        baseSquare[i].style.width = (749 / numSize) + "px";
    }
}

//Square fills: To be called by buttons, black is the default.
let etchBlack = () => {
    document.getElementById("divContainer").classList.remove("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background = "black";
        });
    });
}
//Fill in the squares based on user's chosen color
let etchColor = (color) => {
    document.getElementById("divContainer").classList.remove("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background = color.rgbaString;
        });
    });
}
//Erase squares (back to the default background)
let etchErase = () => {
    document.getElementById("divContainer").classList.remove("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (t) => {
            t.target.style.background = "";
        });
    });
}
//Clear the entire grid, retaining size and last picked fill
let etchClear = () => {
    document.getElementById("divContainer").classList.remove("shake");
    document.getElementById("divContainer").classList.add("shake");
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => {
        gridSquare.style.background = "";
        gridSquare.style.opacity="1";
    });
}
//Increase opacity on each pass 
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
//Fill the grid with unpopped "bubble wrap" that pops
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


//Button listeners
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
