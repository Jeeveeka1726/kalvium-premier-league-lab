//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon)
 {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon]
  return Manager;

}


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation){

  if(formation.length==0)
  {
  return null;
  }
  var start =
  {
    defender:formation[0],
    midfield: formation[1],
    forward: formation[2]
}
  return start;

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var y = players.filter(player => player.debut == year);
  return y;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var pos = players.filter(player => player.position == position);
  return pos;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let Array = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        Array.push(players[i]);
      }
    }
  }
  return Array;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let count = 0,m=0;
  let j;
  for (let i = 0; i < players.length; i++)
    {
      for (j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName)
         {
            count++;       
        }
      }
    if (count == noOfTimes)
    {
      arr.push(players[i]);
    }
    count = 0;
  }
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var place = awardsData.filter(player => player.country == country);
  return place;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var person = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return person;
}


//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let sortedPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      sortedPlayers[count++] = players[i];
    }
  }
  for (let i = 0; i < sortedPlayers.length; i++) {
    for (let j = i + 1; j < sortedPlayers.length; j++) {
      if (sortedPlayers[i].awards.length < sortedPlayers[j].awards.length) {
        let temp = sortedPlayers[i];
        sortedPlayers[i] = sortedPlayers[j];
        sortedPlayers[j] = temp;
      }
    }
  }
  return sortedPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  }
  else if (a.name < b.name) { value = -1; }
  else { value = 0; }
}
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var first = filterByAwardxTimes(awardName, noOfTimes);
  var second = first.filter(player => player.country == country);
  return second.sort(compare);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var old = players.filter(player => player.age > age);
  return old;
}