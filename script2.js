document.getElementById("fluttery").addEventListener("click", function () {
  var yourPoke = 6;
  var enemiesPoke = 6;

  var initializeFight = "<h2>Fight Begins!</h2>";
  let winning = "<p>Enemies pokemon defeated</p>";
  let losing = "<p>Your pokemon has been defeated</p>";

  var popupWindow = window.open("", "_blank", "width=600,height=400");
  popupWindow.document.write(initializeFight);

  while (yourPoke > 0 || enemiesPoke > 0) {
    var randomNum = Math.floor(Math.random() * 100);

    if (randomNum > 0 && randomNum < 80) {
      yourPoke--;
      popupWindow.document.write(winning);
    } else {
      enemiesPoke--;
      popupWindow.document.write(losing);
    }

    if (enemiesPoke === 0) {
      popupWindow.document.write("<h2>  You Lost ahah!</h2>");
      break;
    } else if (yourPoke === 0) {
      popupWindow.document.write("<h2>You won wow!</h2>");
      break;
    }
  }
});

// 65 , 55 , 40 , 30,15

document.getElementById("phoebe").addEventListener("click", function () {
  var yourPoke = 6;
  var enemiesPoke = 6;

  var initializeFight = "<h2>Fight Begins!</h2>";
  let winning = "<p>Enemies pokemon defeated</p>";
  let losing = "<p>Your pokemon has been defeated</p>";

  var popupWindow = window.open("", "_blank", "width=600,height=400");
  popupWindow.document.write(initializeFight);

  while (yourPoke > 0 || enemiesPoke > 0) {
    var randomNum = Math.floor(Math.random() * 100);

    if (randomNum > 0 && randomNum < 65) {
      yourPoke--;
      popupWindow.document.write(winning);
    } else {
      enemiesPoke--;
      popupWindow.document.write(losing);
    }

    if (enemiesPoke === 0) {
      popupWindow.document.write("<h2>You Lost ahah!</h2>");
      break;
    } else if (yourPoke === 0) {
      popupWindow.document.write("<h2>You won wow!</h2>");
      break;
    }
  }
});


document.getElementById("drake").addEventListener("click", function () {
  var yourPoke = 6;
  var enemiesPoke = 6;

  var initializeFight = "<h2>Fight Begins!</h2>";
  let winning = "<p>Enemies pokemon defeated</p>";
  let losing = "<p>Your pokemon has been defeated</p>";

  var popupWindow = window.open("", "_blank", "width=600,height=400");
  popupWindow.document.write(initializeFight);

  while (yourPoke > 0 || enemiesPoke > 0) {
    var randomNum = Math.floor(Math.random() * 100);

    if (randomNum > 0 && randomNum < 55) {
      yourPoke--;
      popupWindow.document.write(winning);
    } else {
      enemiesPoke--;
      popupWindow.document.write(losing);
    }

    if (enemiesPoke === 0) {
      popupWindow.document.write("<h2>You Lost ahah!</h2>");
      break;
    } else if (yourPoke === 0) {
      popupWindow.document.write("<h2>You won wow!</h2>");
      break;
    }
  }
});


document.getElementById("archie").addEventListener("click", function () {
  var yourPoke = 6;
  var enemiesPoke = 6;

  var initializeFight = "<h2>Fight Begins!</h2>";
  let winning = "<p>Enemies pokemon defeated</p>";
  let losing = "<p>Your pokemon has been defeated</p>";

  var popupWindow = window.open("", "_blank", "width=600,height=400");
  popupWindow.document.write(initializeFight);

  while (yourPoke > 0 || enemiesPoke > 0) {
    var randomNum = Math.floor(Math.random() * 100);

    if (randomNum > 0 && randomNum < 40) {
      yourPoke--;
      popupWindow.document.write(winning);
    } else {
      enemiesPoke--;
      popupWindow.document.write(losing);
    }

    if (enemiesPoke === 0) {
      popupWindow.document.write("<h2>You Lost ahah!</h2>");
      break;
    } else if (yourPoke === 0) {
      popupWindow.document.write("<h2>You won wow!</h2>");
      break;
    }
  }
});


document.getElementById("maxie").addEventListener("click", function () {
  var yourPoke = 6;
  var enemiesPoke = 6;

  var initializeFight = "<h2>Fight Begins!</h2>";
  let winning = "<p>Enemies pokemon defeated</p>";
  let losing = "<p>Your pokemon has been defeated</p>";

  var popupWindow = window.open("", "_blank", "width=600,height=400");
  popupWindow.document.write(initializeFight);

  while (yourPoke > 0 || enemiesPoke > 0) {
    var randomNum = Math.floor(Math.random() * 100);

    if (randomNum > 0 && randomNum < 30) {
      yourPoke--;
      popupWindow.document.write(winning);
    } else {
      enemiesPoke--;
      popupWindow.document.write(losing);
    }

    if (enemiesPoke === 0) {
      popupWindow.document.write("<h2>You Lost ahah!</h2>");
      break;
    } else if (yourPoke === 0) {
      popupWindow.document.write("<h2>You won wow!</h2>");
      break;
    }
  }
});


document.getElementById("red").addEventListener("click", function () {
  var yourPoke = 6;
  var enemiesPoke = 6;

  var initializeFight = "<h2>Fight Begins!</h2>";
  let winning = "<p>Enemies pokemon defeated</p>";
  let losing = "<p>Your pokemon has been defeated</p>";

  var popupWindow = window.open("", "_blank", "width=600,height=400");
  popupWindow.document.write(initializeFight);

  while (yourPoke > 0 || enemiesPoke > 0) {
    var randomNum = Math.floor(Math.random() * 100);

    if (randomNum > 0 && randomNum < 15) {
      yourPoke--;
      popupWindow.document.write(winning);
    } else {
      enemiesPoke--;
      popupWindow.document.write(losing);
    }

    if (enemiesPoke === 0) {
      popupWindow.document.write("<h2>You Lost ahah!</h2>");
      break;
    } else if (yourPoke === 0) {
      popupWindow.document.write("<h2>You won wow!</h2>");
      break;
    }
  }
});
