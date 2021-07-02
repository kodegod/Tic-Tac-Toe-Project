import Game from "./Game.js"
import GameView from "./GameView.js"

let game= new Game();
let gameView=new GameView();

gameView.updateBoard(game);


let newgame=document.querySelector(".restart");
newgame.addEventListener("click", ()=>{
    onRestartClick();
})

let tiles=document.querySelectorAll(".board-tile");
tiles.forEach((tile)=> {
    tile.addEventListener("click", ()=> {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    //make a move
    //update board
    game.makeMove(i);
    gameView.updateBoard(game);
    
}

function onRestartClick(){
    game= new Game();
    gameView.updateBoard(game);
}

