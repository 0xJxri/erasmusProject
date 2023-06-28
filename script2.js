var totalMedals = 0;
var med1 = 1, med2 = 1, med3 = 1; med4 = 1; med5 = 1; med6 = 1;
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
            popupWindow.document.write("<h2>You Lost ahah!</h2>");
            break;
        } else if (yourPoke === 0) {
            popupWindow.document.write("<h2>You won against Flunnery and obtained the fire medal!</h2>");
            var image = document.getElementById("medal1no");
            image.src = "images/medal1.png";
            if (med1 === 1) {
                totalMedals++;
                med1 = 0;
            }
            if (totalMedals === 6) {
                popupWindow.document.write("<h2>Congratulations! you beated all six trainers and obtained all the medals, You are the Champion!</h2>");
            }
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
            popupWindow.document.write("<h2>You won against Phoebe and obtained the life medal!</h2>");
            var image = document.getElementById("medal2no");
            image.src = "images/medal2.png";
            if (med2 === 1) {
                totalMedals++;
                med2 = 0;
            } if (totalMedals === 6) {
                popupWindow.document.write("<h2>Congratulations! you beated all six trainers and obtained all the medals, You are the Champion!</h2>");
            }
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
            popupWindow.document.write("<h2>You won against Drake and obtained the dragon medal!</h2>");
            var image = document.getElementById("medal3no");
            image.src = "images/medal3.png";
            if (med3 === 1) {
                totalMedals++;
                med3 = 0;
            } if (totalMedals === 6) {
                popupWindow.document.write("<h2>Congratulations! you beated all six trainers and obtained all the medals, You are the Champion!</h2>");
            }
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
            popupWindow.document.write("<h2>You won against Archie and obtained the water medal!</h2>");
            var image = document.getElementById("medal4no");
            image.src = "images/medal4.png";
            if (med4 === 1) {
                totalMedals++;
                med4 = 0;
            } if (totalMedals === 6) {
                popupWindow.document.write("<h2>Congratulations! you beated all six trainers and obtained all the medals, You are the Champion!</h2>");
            }
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
            popupWindow.document.write("<h2>You won against Maxie and obtained the ground medal!</h2>");
            var image = document.getElementById("medal5no");
            image.src = "images/medal5.png";
            if (med5 === 1) {
                totalMedals++;
                med5 = 0;
            } if (totalMedals === 6) {
                popupWindow.document.write("<h2>Congratulations! you beated all six trainers and obtained all the medals, You are the Champion!</h2>");
            }
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
            popupWindow.document.write("<h2>You won against the master of the Pokémon Red! Now you have the gold medal!</h2>");
            var image = document.getElementById("medal6no");
            image.src = "images/medal6.png";
            if (med6 === 1) {
                totalMedals++;
                med6 = 0;
            } if (totalMedals === 6) {
                popupWindow.document.write("<h2>Congratulations! you beated all six trainers and obtained all the medals, You are the Champion!</h2>");
            }
            break;

        }
    }
});
