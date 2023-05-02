const gameBoard = document.querySelector('#gameBoard');
const restartBtn = document.querySelector('#btn');
let arr = [''];


function game(){

    for(let i = 0; i < gameBoard.children.length; i++){
        let box = gameBoard.children[i];
        
        box.addEventListener('click', move);
        function move(e){  
            if(arr[0] == '' || arr[0] == 'O' && e.target.innerHTML != 'O'){
                e.target.innerText = 'X';
                arr.unshift('X');
                
            }else if(arr[0] == 'X' && e.target.innerText != 'X'){
                e.target.innerText = 'O';
                arr.unshift('O');

            };
            logic()
        };
    };
};
game()


function logic(){
    if(box1.innerText == box2.innerText && box1.innerText == box3.innerText && box1.innerText != ''){
        demo.style.backgroundColor = "red"
    }
    if(box4.innerText == box5.innerText && box4.innerText == box6.innerText && box4.innerText != ''){
        demo.style.backgroundColor = "red"
    }
    if(box7.innerText == box8.innerText && box7.innerText == box9.innerText && box7.innerText != ''){
        demo.style.backgroundColor = "red"
    }
        
}


restartBtn.onclick = function restart(){
    let allBox = document.getElementsByClassName('box');
    for(let i = 0; i < allBox.length; i++){
        let box = allBox[i];
        box.innerText = '';

    };
};