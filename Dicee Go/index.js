var dicee = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

function drawDicee() {
    var randomIndex = 0;
    var results = [];

    for(var count = 1; count <= 2; count++) {
        randomIndex = Math.floor(Math.random() * 6);
        results.push(randomIndex);
        document.querySelector("#p" + count + "Dice").setAttribute("src", "./images/" + dicee[randomIndex] + ".png");
    }

    if (results[0] > results[1]) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
        document.querySelectorAll(".player")[0].classList.add("winner", "notification");
    } else if (results[0] < results[1]) {
        document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
        document.querySelectorAll(".player")[1].classList.add("winner", "notification");
    } else {
        document.querySelector("h1").innerHTML = "DRAW!";
        document.querySelector("h1").classList.add("notification");
        document.querySelectorAll(".player")[0].classList.add("draw");
        document.querySelectorAll(".player")[1].classList.add("draw");
    }

    var x = setInterval(function() {
        var now = new Date().getTime();
        var second = Math.floor((now % (1000 * 60)) / 1000);

        if (second > 3) {
            document.querySelector("header img").classList.remove("hide");
            document.querySelector("header img").setAttribute("src", "./images/refresh.png");
            document.querySelector("header img").classList.add("refresher");
            document.querySelector("h1").classList.remove("notification");
            document.querySelector("h1").innerHTML = "Refresh Me";
            document.querySelectorAll(".player")[0].classList.remove("winner", "notification", "draw");
            document.querySelectorAll(".player")[1].classList.remove("winner", "notification", "draw");
        }
    }, 1000);

    document.querySelector("header img").classList.add("hide");
}

drawDicee()