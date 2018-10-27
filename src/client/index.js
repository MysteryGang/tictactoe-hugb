// index.js
const fetch = require('node-fetch');

// call function init when DOM loaded
document.addEventListener('DOMContentLoaded', init, false);

function init() { 
   
    initializeBoard();
    // execute when a cell is clicked
    cellClicked();
    newGame();
}

function cellClicked(){

    var cells = document.getElementsByTagName("td");
    var winnerMessage = document.getElementById("winner-message");
    var turnMessage = document.getElementById("player-turn");

        for (var i = 0; i < cells.length; i++) { 
    		cells[i].onclick = function(){
                // check if cell already clicked
                var cellid = (this).id;
                fetch("/api/checkCell/" + cellid)
                .then(res => res.text())
                .then(body => { 
                    // if cell is not already clicked
                    if(body == "false") {
                        fetch("/api/cellClick/" + cellid)
                        .then(res => res.text())
                        .then(body => {
                            // update HTML
                            (this).innerHTML = body;
                        });

                        // checkWinner 
                         fetch("/api/checkWinner")
                        .then(res => res.text())
                        .then(body => { 
                            winnerMessage.innerHTML = body;
                            if(body !== ""){
                                fetch("/api/registerWinner");
                            }
                        });

                        // update player turn message
                        fetch("api/currentPlayer")
                        .then(res => res.text())
                        .then(body => {
                            turnMessage.innerHTML = body + ", it's your turn!";
                        });
                    }
                });

    		}
        }
    
}

function initializeBoard() {

    fetch("/api/initializeBoard/");
}

function newGame() {
    var button = document.getElementById('new-game-button');

    button.onclick = function () {
        window.location.reload();
    }
}