alert("WELCOME TO SUPRITH'S TIC TAC TOE");
let xname = prompt("ENTER PLAYER 1 NAME IN CAPITAL");
let oname = prompt("ENTER PLAYER 2 NAME IN CAPITAL");
let board = [['1','2','3'],['4','5','6'],['7','8','9']];
let turn = 0,cont=false;
let xscore=0,oscore=0;
let bgcolor="white";

document.getElementById("xname").innerText=xname;
document.getElementById("oname").innerText=oname;
document.getElementById("xwin").innerText=xname+" WIN'S";
document.getElementById("owin").innerText=oname+" WIN'S";

function xory(turn){
    if(turn%2==0){
        return 'X';
    }
    return 'O';
}


function mode(){
    let element = document.querySelector(".main");
    let color = element.style.backgroundColor;
    let cells = document.querySelectorAll(".button");
    if(color=="white"){
        element.style.backgroundColor="black";
        document.getElementById("xwin").style.color="black";
        document.getElementById("owin").style.color="black";
        bgcolor="black";
        cells.forEach(element => {
            element.style.backgroundColor="black";
            element.style.border="1px solid white";
        });
    }
    else{
        element.style.backgroundColor="white";
        document.getElementById("xwin").style.color="white";
        document.getElementById("owin").style.color="white";
        bgcolor="white";
        cells.forEach(element => {
            element.style.backgroundColor="white";
            element.style.border="1px solid black";
        });
    }
}

function blue_or_red(xy){
    if(xy=='X'){
        return "blue";
    }
    return "red";
}

function check_win(){
    for(let i=0;i<3;i++){
		if((board[0][i]==board[1][i] && board[0][i]==board[2][i]) || (board[i][0]==board[i][1] && board[i][0]==board[i][2])){
			return true;
		}
	}
	if((board[0][0]==board[1][1] && board[0][0]==board[2][2]) || (board[0][2]==board[1][1] && board[0][2]==board[2][0])){
		return true;
	}
	return false;
}

function reset(){
    board = [['1','2','3'],['4','5','6'],['7','8','9']];
    turn = 0;
    cont=false;
    let cells = document.querySelectorAll(".button");
    cells.forEach(element => {
        element.innerHTML=" ";
        element.style.backgroundColor=bgcolor;
    });
    document.querySelector(".left").style.animation = "none";
    document.querySelector(".right").style.animation = "none";
}

function get(x,y,id){
    if(cont){
        alert("GAME OVER PLAY AGAIN");
        return;
    }
    let cell = document.getElementById(id);
    if(cell.innerHTML == 'X' || cell.innerHTML=='O'){
        alert("WRONG OPTION");
        return;
    }
    let x_y=xory(turn);
    board[x][y]=x_y;
    cell.innerHTML=x_y;
    cell.style.backgroundColor=blue_or_red(x_y);
    cell.style.opacity = "0.4";
    cell.style.opacity = "1";
    if(check_win()){
        if(turn%2==0){
            xscore++;
            document.getElementById("xscore").innerHTML=xscore;
            document.querySelector(".left").style.animation = "blink1 linear 3s";
        }
        else{
            oscore++;
            document.getElementById("oscore").innerHTML=oscore;
            document.querySelector(".right").style.animation = "blink2 linear 3s";
        }
        cont=true;
        return;
    }
    turn++;
    if(turn == 9){
        alert("DRAW");
    }
}