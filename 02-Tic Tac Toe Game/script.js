const textBtn = document.querySelectorAll(".text_btn")

let currentPlayer = "X";

textBtn.forEach(textBtn => {
    textBtn.addEventListener("click", () => {
        if (textBtn.innerText === "") //two time click the button but not a change value to use
            textBtn.innerText = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
         

        const winningArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]

]









        // if else bhi use thay 

        // if (currentPlayer === "X") {
        //     textBtn.innerHTML = currentPlayer = "O"
        // } else {
        //     textBtn.innerHTML = currentPlayer = "X"
        // }
    })
})