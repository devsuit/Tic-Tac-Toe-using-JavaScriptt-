let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");


let turn0 = true; //Playerx, Player0

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame  = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hidden")
    box.classList.remove("cursor-not-allowed", "opacity-50", "bg-gray-200");
};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.classList.add("cursor-not-allowed", "opacity-50", "bg-gray-200");
    box.disabled = true;
    //    box.removeEventListener('click', handleBoxClick);
    checkWinner();
  });
});

const disableBoxes = () =>{
    for (let box of boxes) {
        box.disabled= true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes) {
        box.disabled= false;
        box.innerText = "";
        box.classList.remove("cursor-not-allowed", "opacity-50", "bg-gray-200");
    }
};

const showWinner = (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove ("hidden");
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
//     console.log(pattern[0], pattern[1], pattern[2]);
//     console.log(boxes[pattern[0]].innerHTML, boxes[pattern[1]].innerHTML, boxes[pattern[2]].innerHTML);
//  
let pos1val = boxes[pattern[0]].innerHTML;
let pos2val = boxes[pattern[1]].innerHTML;
let pos3val = boxes[pattern[2]].innerHTML;

if (pos1val !="" && pos2val!= "" && pos3val !="") {
    if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner" + pos1val)
        showWinner(pos1val);
    }
}

 }
};

// boxes.forEach((box) => {
//     box.addEventListener("click", handleBoxClick);
//   });

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

