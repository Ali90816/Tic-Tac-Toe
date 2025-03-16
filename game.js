let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
]

const resetbutton =()=>{
    turnO = true
    enableBox()
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O"
            turnO = false
        } else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner()
    })
})

const disableBox = ()=>{
    for (let box of boxes){
        box.disabled= true
    }
}
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, the winner is ${winner}`
    msgcontainer.classList.remove("hide")
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;
        // console.log(pattern1, pattern2, pattern3);

        if (pattern1 !== "" && pattern2 !== "" && pattern3 !== "") {
            if (pattern1 === pattern2 && pattern2 === pattern3) {
                // console.log(`winner ${pattern1}`)
                showWinner(pattern1)
                disableBox()
            }

        }

    }
}

newbtn.addEventListener("click", resetbutton)
reset.addEventListener("click", resetbutton)
