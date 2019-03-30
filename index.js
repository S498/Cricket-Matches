const matchList = document.getElementById("matchid");
let matchs;

//matchList.addEventListener("onchange", newMatchSelection);

function newMatchSelection(event) {
    displayMatchInfo(event.target.value);
}

fetch("http://cricapi.com/api/matches/HmYAeo9lQ5ZlFDsLqzQNtQnQnEa2")
    .then(res => res.json())
    .then(data => initialize(data));
    .catch(err => console.log("Error:", err));

function initialize(matchData) {
    matches = matchData;
//    console.log(matches);
    let options = "";
//    options=matchid.unique_id;
    matches.forEach(matchid => options += `<option value="${matchid.unique_id}">${matchid.team-1+" vs "+matchid.team-2}</option>`);
    matchList.innerHTML = options;

    matchList.selectedIndex = Math.floor(Math.random() * matchList.length);
    displayMatchInfo(matchList[matchList.selectedIndex].value);
}

function displayMatchInfo(matchid) {
    const matchData = matches.find(matchid => matchid.unique_id === matchid);
    console.log(document.getElementById("date").innerHTML);
    document.getElementById("date").innerHTML = matchData.date;
    document.getElementById("datetime").innerHTML = matchData.dateTimeGMT;
    document.getElementById("team1").innerHTML = matchData.team - 1;
    document.getElementById("team2").innerHTML = matchData.team - 2;
    document.getElementById("type").innerHTML = matchData.type;
    document.getElementById("squad").innerHTML = matchData.squad;
    document.getElementById("toss").innerHTML = matchData.toss_winner_team;
    document.getElementById("win").innerHTML = matchData.winner_team;
    document.getElementById("started").innerHTML = matchData.matchStarted;
}
