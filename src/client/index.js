// index.js
const fetch = require('node-fetch');

// call function init when DOM loaded
document.addEventListener('DOMContentLoaded', init, false);

function init() { 
    // execute when a cell is clicked
    initializeBoard();
    cellClicked();
}

function cellClicked(){

    var cells = document.getElementsByTagName("td");
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
                }
            });
            // checkWinner 
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