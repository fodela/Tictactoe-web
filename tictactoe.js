console.log('connected')
// Restart button shoulder have a hover event
var Rb = document.querySelector("#restart")
Rb.addEventListener("mouseover",function(){
    Rb.textContent = "RESTART!"
})

Rb.addEventListener("mouseout",function() {
    Rb.textContent = "Restart!"
})

// set box variable
var box = document.querySelectorAll("td")

// clear board 
function clearBoard() {
    for (var i = 0; i < box.length; i++) {
        box[i].textContent = " "
    }
}

// set restart button to clear a board
Rb.addEventListener('click', clearBoard)


// set markerchanger
function markerChanger() {
    if (this.textContent === " ") {
        this.textContent = "X"
    }else if (this.textContent === "X") {
        this.textContent = "O"
    }else {
        this.textContent = " "
    }
}

for (var i = 0; i < box.length;i++) {
    box[i].addEventListener('click',markerChanger)
}