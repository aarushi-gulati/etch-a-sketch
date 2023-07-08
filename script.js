let container = document.querySelector(".container");

let slider = document.querySelector("input")

let n = 16;

slider.addEventListener('change', () => {
    n = slider.value;
    container.textContent = " ";
    for (let i = 0; i < n * n; i++){
        let square = document.createElement("div");
        square.classList.add("chhotu")
        square.style.height = `${800/n}px`;
        square.style.width = `${800/n}px`;
        container.appendChild(square)
    }

    let dabbe = document.querySelectorAll(".chhotu")

    dabbe.forEach((dabba) => {
        dabba.addEventListener('mouseover', () =>{
            dabba.classList.add("hovered");
        })
    })
})

function createBoard(){
    for (let i = 0; i < 256; i++){
        let square = document.createElement("div");
        square.classList.add("chhotu")
        square.style.height = "50px";
        square.style.width = "50px";
        container.appendChild(square)
    }
}

createBoard();

let dabbe = document.querySelectorAll(".chhotu")

dabbe.forEach((dabba) => {
    dabba.addEventListener('mouseover', () =>{
        dabba.classList.add("hovered");
    })
})