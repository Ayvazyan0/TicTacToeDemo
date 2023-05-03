let arr = [''];

function game(){
    for(let i = 0; i < gameBoard.children.length; i++){
        let boxs = gameBoard.children[i];
        boxs.addEventListener('click', move);
        function move(e){  
            if(arr[0] == '' || arr[0] == 'O' && e.target.innerHTML != 'O'){
                e.target.innerText = 'X';
                arr.unshift('X');
                info.innerText = 'Turn O';
                
            }else if(arr[0] == 'X' && e.target.innerText != 'X'){
                e.target.innerText = 'O';
                arr.unshift('O');
                info.innerText = 'Turn X';
                
            };
            logic();
        };
    };
};
game();

let box = document.getElementsByTagName('div');
function getWinner(a,b,c){
    if(box[a].innerText == box[b].innerText && box[a].innerText == box[c].innerText && box[a].innerText != ''){
        if(box[a].innerText == "X"){
            info.innerText = 'X win Press try again';
            gameEnd();
            score();
            
        }else if(box[a].innerText == "O"){
            info.innerText = 'O win Press try again';
            gameEnd();
            score();
        };
    };
};


function logic(){
    getWinner( 0, 1, 2);

    getWinner( 3, 4, 5);

    getWinner( 6, 7, 8);

    getWinner( 0, 3, 6);

    getWinner( 1, 4, 7);

    getWinner( 2, 5, 8);

    getWinner( 0, 4, 8);

    getWinner( 2, 4, 6);

    if(arr.length > 9 && info.innerText != 'X' || arr.length > 9 &&  info.innerText != "O"){
        info.innerText = 'DRAW';
    };
        
};

let a = 0;
let b = 0;
function score(){
    if(info.innerText == 'X win Press try again'){
        a++;
        X.innerText = a;
    }else if(info.innerText == 'O win Press try again'){
        b++;
        O.innerText = b;
    };
};


function gameEnd(){
    gameBoard.style.display = 'none';
};


tryAgainBtn.onclick = function tryAgain(){
    let allBox = document.getElementsByClassName('box');
    for(let i = 0; i < allBox.length; i++){
        let allboxs = allBox[i];
        allboxs.innerText = '';
    };
    arr.splice(0, arr.length-1);
    info.innerText = 'Click for play';
    gameBoard.style.display = 'flex';
};

