const button = document.querySelectorAll(".btn");
const result = document.querySelector(".result")



//button click event use to foreack loop
button.forEach(button => {
    button.addEventListener("click", () => {
        result.value += button.innerText;
    })
})

//clear btn
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    result.value = " ";
})


// eqal btn
const eqalBtn = document.querySelector(".enter_btn")

eqalBtn.addEventListener("click", () => {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "error";
    }
})