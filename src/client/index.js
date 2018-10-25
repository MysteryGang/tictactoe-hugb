// index.js
const fetch = require('node-fetch');
document.addEventListener('DOMContentLoaded', init, false);

function init() { 
    cellClicked();
}

function cellClicked(){

    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) { 
		cells[i].onclick = function(){
            // check if cell already clicked
            var cellid = (this).id;
            fetch("/api/postCell/" + cellid)
            .then(res => res.text())
            .then(body => { 
                if(body == "false") { // if cell is not already clicked, then execute /api/cellclick
                    // update HTML
                    fetch("/api/cellclick/" + cellid)
                    .then(res => res.text())
                    .then(body => {
                        (this).innerHTML = body;
                    });
                }
            });
            
            // checkWinner 
		}
    }
}