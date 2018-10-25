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
            fetch("/api/postCell", {
                method: "POST",
                body: JSON.stringify({ cellID: cellid }),
                headers:{ "Content-Type": "application/json"}
            }).then(res => res.json())
            .then(response => console.log("Success:", json.stringify(response)));
            // update HTML
            fetch("/api/cellclick")
            .then(res => res.text())
            .then(body => {
                (this).innerHTML = body;
            });
		}
    }
    // check if winner or draw <---
}