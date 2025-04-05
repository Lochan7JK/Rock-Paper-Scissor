var user;
var userScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissor"];

window.onload = function(){
    for(let i = 0; i < 3; i++){
        // <img id ="rock" src = "rock.png" alt = "rock"/>
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "./images/" + choices[i] + ".png";
        document.getElementById("choices").append(choice);

        choice.addEventListener("click", selectChoice);
    }
}

function selectChoice(){
    user = this.id;
    document.getElementById("user-choice").src = "./images/" + user + ".png";

    var random = Math.floor(Math.random() * 3);
    opponent = choices[random];
    document.getElementById("opponent-choice").src = "./images/" + opponent + ".png";


    if(user == opponent){
        userScore++;
        opponentScore++;
    }
    else if(user == "rock" && opponent == "paper"){
        opponentScore++;
    }
    else if(user == "rock" && opponent == "scissor"){
        userScore++;
    }
    else if(user == "paper" && opponent == "rock"){
        userScore++;
    }
    else if(user == "paper" && opponent == "scissor"){
        opponentScore++;
    }
    else if(user == "scissor" && opponent == "rock"){
        opponentScore++;
    }
    else if(user == "scissor" && opponent == "paper"){
        userScore++;
    }

    // display score
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("opponent-score").innerHTML = opponentScore;

}