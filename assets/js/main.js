import {fetchGames} from "./fetchGames.js";

function init() {
    fetchGames().then(createTable);
}

function createTable(result) {

    //for-loop som skapar tabellen utifrån antalet matcher som hämtats från API
    for (let i = 0; i <= result.matches.length; i++) {
        var trElements = document.createElement("tr");
        document.getElementById("table").appendChild(trElements);

        var numbers = document.createElement("td");
        numbers.innerHTML = result.matches[i].gameNumber;
        trElements.appendChild(numbers);


        //Visa teams med länk till varje lags hemsida
        var teamOne = result.matches[i].opponents.one.name;
        var teamTwo = result.matches[i].opponents.two.name;
        var linkOne = teamOne.link(result.matches[i].opponents.one.homepage);
        var linkTwo = teamTwo.link(result.matches[i].opponents.two.homepage);
        var opponents = document.createElement("td");
        opponents.innerHTML = linkOne + ' -VS- ' + linkTwo;
        trElements.appendChild(opponents);

        var span = document.createElement("span");
        var kick = document.createElement("div");
        var stem = document.createElement("div");

        kick.setAttribute("class", "kick");
        stem.setAttribute("class", "stem");
        span.setAttribute("class", "checkmark");
        span.appendChild(stem);
        span.appendChild(kick);

        //Checkmarks för game outcomes
        if (result.matches[i].gameInfo.outcome == "2") {

            var checkmark1 = document.createElement("td");
            var checkmarkX = document.createElement("td");
            var checkmark2 = document.createElement("td");

            checkmark2.appendChild(span);
            trElements.appendChild(checkmark1);
            trElements.appendChild(checkmarkX);
            trElements.appendChild(checkmark2);

        } if (result.matches[i].gameInfo.outcome == "X") {

            var checkmark1 = document.createElement("td");
            var checkmarkX = document.createElement("td");

            checkmarkX.appendChild(span);
            trElements.appendChild(checkmark1);
            trElements.appendChild(checkmarkX);

        } if (result.matches[i].gameInfo.outcome == "1") {

            var checkmark1 = document.createElement("td");
            checkmark1.appendChild(span);
            trElements.appendChild(checkmark1);
        }


    }



}

window.addEventListener('load', init) 
  
    
    




