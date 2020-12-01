let gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
let playerTurn = 0;
let turn = 0;
console.log(gameBoard[1][1]);
function check3Equal(a,b,c){
    if(gameBoard[Math.floor((a-1)/3)][(a-1)%3] == gameBoard[Math.floor((b-1)/3)][(b-1)%3] && 
        gameBoard[Math.floor((a-1)/3)][(a-1)%3] == gameBoard[Math.floor((c-1)/3)][(c-1)%3]) return true;
    return false;
}
function checkWinner(){
    if(check3Equal(1,2,3)) return gameBoard[0][0];
    if(check3Equal(4,5,6)) return gameBoard[1][0];
    if(check3Equal(7,8,9)) return gameBoard[2][0];
    if(check3Equal(1,4,7)) return gameBoard[0][0];
    if(check3Equal(2,5,8)) return gameBoard[0][1];
    if(check3Equal(3,6,9)) return gameBoard[0][2];
    if(check3Equal(1,5,9)) return gameBoard[1][1];
    if(check3Equal(3,5,7)) return gameBoard[1][1];
    return 0;
}
function fillboard(a,b){
    if(document.getElementById(String(a) + "-" + String(b)).innerHTML != "Empty!") alert("Da dung o nay roi!");
    else{
        gameBoard[a-1][b-1] = playerTurn+1;
        switch(checkWinner()){
            case 1:
                alert("Chuc mung nguoi choi 1 da chien thang!");
                turn = 10;
                break;
            case 2:
                alert("Chuc mung nguoi choi 2 da chien thang!");
                turn = 10;
                break;
        }
        document.getElementById(String(a) + "-" + String(b)).innerHTML = playerTurn ? "X" : "O";
        playerTurn = !playerTurn;
        turn++;
        if(turn==9){
            alert("Game nay hoa nhe uwu");
        }
    }
}
function reload(){
    location.reload();
}