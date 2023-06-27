var imageContainer = document.getElementById('print');
var table = document.getElementById('table');
var teamCount = 0;

//API call
function pokePhoto() {
  var input = document.getElementById('inputPokemon').value;

  fetch("https://pokeapi.co/api/v2/pokemon/"+input)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      var name = res.name;
      var sprite = res.sprites.other["official-artwork"].front_default;

      // Update table with Pokemon name
      if (teamCount < 6) {
        var cell = table.rows[1].cells[teamCount];
        cell.innerHTML = name;
        teamCount++;
      }

      document.getElementById("error").innerHTML = " ";
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = "Pokemon not found!";
        
      return error;
    });
}

//Delete last child
function deleteChild(){
  // Clear the last Pokemon name in the table
  if (teamCount > 0) {
    teamCount--;
    var cell = table.rows[1].cells[teamCount];
    cell.innerHTML = "empty";
  }
}

// Bosses button click event
document.getElementById("bosses").addEventListener("click", function(event) {
    if (teamCount < 6) {
        event.preventDefault(); // Interrompe l'azione predefinita del collegamento
        alert("You need a team of 6 to challenge the champions!");
    } else {
      // Perform the desired action when the team is complete
      window.location.href = "bosses.html";
    }
  });
  // Healer button click event
document.getElementById("healer").addEventListener("click", function(event) {
    if (teamCount === 0) {
      event.preventDefault(); // Interrompe l'azione predefinita del collegamento
      alert("You can't see your team without creating an actual one!");
    } else {
      // Perform the desired action when the team is created
      // E.g., redirect to the healer page
      window.location.href = "healer.html";
    }
  });


