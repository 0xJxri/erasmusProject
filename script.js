var table = document.getElementById("table");
var teamCount = 0;
const storeNames = [];
var arrayCells = ["first", "second", "third", "fourth", "fifth", "sixth"];

function pokePhoto() {
  var input = document.getElementById("inputPokemon").value;

  fetch("https://pokeapi.co/api/v2/pokemon/" + input)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      var name = res.name;
      var photo = res.sprites.other["official-artwork"].front_default;

      console.log(photo);

      if (storeNames.length < 6) {
        storeNames.push(name);
        console.log(storeNames);
      }

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

function deleteChild() {
  if (teamCount > 0) {
    teamCount--;
    var cell = table.rows[1].cells[teamCount];
    cell.innerHTML = "//";
    storeNames.pop();
  }

  var lastSlideId = arrayCells[arrayCells.length - 1];
  var lastSlide = document.getElementById(lastSlideId);
  lastSlide.remove();
  arrayCells.pop();
}

async function createTeam() {
  for (var i = 0; i < 6; i++) {
    var res, pathPhoto, img;

    await fetch("https://pokeapi.co/api/v2/pokemon/" + storeNames[i])
      .then((res) => res.json())
      .then((response) => {
        res = response;
        pathPhoto = res.sprites.other["official-artwork"].front_default;
        console.log(pathPhoto);

        img = new Image();
        img.src = pathPhoto;

        return new Promise((resolve) => {
          img.onload = resolve;
        });
      })
      .then(() => {
        document.getElementById(arrayCells[i]).appendChild(img);
        document.getElementById("error").innerHTML = " ";
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = "Pokemon not found!";
        console.error(error);
      });
  }
}

document.getElementById("bosses").addEventListener("click", function (event) {
  if (teamCount < 6) {
    event.preventDefault();
    alert("You need a team of 6 to challenge the champions!");
  } else {
    window.location.href = "bosses.html";
  }
});

const swiper = new Swiper('.swiper', {
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
