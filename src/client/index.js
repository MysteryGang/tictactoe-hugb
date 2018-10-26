// index.js
const fetch = require('node-fetch');

// call function init when DOM loaded
document.addEventListener('DOMContentLoaded', init, false);

function init() { 
   
    initializeBoard();
    // execute when a cell is clicked
    cellClicked();
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
                            console.log(body);
                            winnerMessage.innerHTML = body;
                        });
                    }
                });

    		}
        }
    
}

function initializeBoard() {

    console.log('hi');

    fetch("/api/initializeBoard/")
    .then(res => res.text())
    .then(body => {
        console.log(body);
    });
}