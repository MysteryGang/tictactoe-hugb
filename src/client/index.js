// index.js
const fetch = require('node-fetch');
const board = require('../logic/tictactoe');
document.addEventListener('DOMContentLoaded', init, false);

function init() { 
    initializeBoard();
    cellClicked();
}

function initializeBoard() {

    var result = "<table border=1>";

    for(var i = 0; i < board.length; i++) {
        result += "<tr>";

        for(var j = 0; j < board[i].length; j++) {
            result += "<td>" + board[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    fetch("api/initialize")
    .then(res => res.text())
    .then(body => {
        console.log('hi');
        result = body;
    })
}

function cellClicked(){

    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) { 
		cells[i].onclick = function(){
            // check if cell already clicked

            // update HTML
            fetch("/api/cellclick")
            .then(res => res.text())
            .then(body => {
                if((this).innerHTML == 'X' || (this).innerHTML == 'O') {
                    return;
                }
                (this).innerHTML = body;
            });
		}
    }
    // check if winner or draw <---
}