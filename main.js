let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn'); 
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turnO = true;

const winPatterns = [ 
    [0, 1, 2],       
    [0, 3, 6],       
    [0, 4, 8],       
    [1, 4, 7],  
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
} 

boxes.forEach((box) => {
    box.addEventListener('click', clicked)
    function clicked (ev) {
        let count = 0;
        count++;
        function noWinner(){
            if (count === '4'){
                // if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
                    //     // msg.innerText = `Sorry! NO winner`;
                    // }
                    // document.body.style.backgroundColor = 'red'
                    console.log(count)
                }

        }
        console.log('box was clicked')
        if (turnO) {
            box.innerText = 'O'
            box.style.color = "orange"
            turnO = false;
        }else {
            box.innerText = 'X'
            box.style.color = 'brown'

            turnO = true
        }
        box.disabled = true;  

       

        checkWinner();
        noWinner();
        
        
       
        
    }
})

const disableBoxes = () =>{
     for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
     for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

function checkWinner(){
    for(let pattern of winPatterns){
        // console.log(pattern)
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                 console.log('Winner', pos1Val)
                 showWinner(pos1Val);
            }
        }
    }
}


newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);