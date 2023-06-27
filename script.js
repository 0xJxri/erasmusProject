
var imageContainer = document.getElementById('print');

//API call
function pokePhoto() {
  var input = document.getElementById('inputPokemon').value;
  


  fetch("https://pokeapi.co/api/v2/pokemon/"+input)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      var pathPhoto = res.sprites.other["official-artwork"].front_default;//defining path
      console.log(pathPhoto);//check if the path works well

      var img = new Image();//create new image element
      img.src = pathPhoto;

      img.onload = function(){
        imageContainer.appendChild(img);
      }

      document.getElementById("error").innerHTML = " ";
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = "Pokemon not found!";//handle the errors
        
      return error;
    });
}

//Delete last child
function deleteChild(){
  imageContainer.removeChild(imageContainer.lastChild);
}

//Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});