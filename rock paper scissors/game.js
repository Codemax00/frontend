let userscore = 0;
let compscore = 0;
let gameHistory = [];
let soundEnabled = true;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const Userscorper = document.querySelector("#users");
const Compscorper = document.querySelector("#comps");
const resetBtn = document.querySelector("#resetBtn");
const toggleSoundBtn = document.querySelector("#toggleSound");
const historyList = document.querySelector("#historyList");

// Sound elements
const winSound = document.querySelector("#winSound");
const loseSound = document.querySelector("#loseSound");
const drawSound = document.querySelector("#drawSound");

const genCompchoice = () => {
    let opt = ["rock", "paper", "scissor"];
    return opt[Math.floor(Math.random() * 3)];
};

const playSound = (sound) => {
    if (soundEnabled) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
};

const addToHistory = (userChoice, compChoice, result) => {
    const historyItem = document.createElement("li");
    historyItem.className = "history-item";
    const timestamp = new Date().toLocaleTimeString();
    historyItem.textContent = `${timestamp} - You chose ${userChoice}, Computer chose ${compChoice} - ${result}`;
    historyList.insertBefore(historyItem, historyList.firstChild);
    gameHistory.push({ userChoice, compChoice, result, timestamp });
};

const resetGame = () => {
    userscore = 0;
    compscore = 0;
    Userscorper.innerText = userscore;
    Compscorper.innerText = compscore;
    msg.innerText = "Play! It's your turn";
    msg.style.backgroundColor = "#081b31";
    gameHistory = [];
    historyList.innerHTML = "";
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
    playSound(drawSound);
};

const showwinner = (userwin, userChoi, compChoice) => {
    if (userwin) {
        userscore++;
        Userscorper.innerText = userscore;
        msg.innerText = `You win! 🎉 ${userChoi} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        playSound(winSound);
        addToHistory(userChoi, compChoice, "You won!");
    } else {
        compscore++;
        Compscorper.innerText = compscore;
        msg.innerText = `You lose! 😢 ${userChoi} loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
        playSound(loseSound);
        addToHistory(userChoi, compChoice, "You lost!");
    }
    msg.classList.add("winner-animation");
    setTimeout(() => msg.classList.remove("winner-animation"), 1000);
};

const play = (userChoi) => {
    // Remove selection from all choices
    choices.forEach(choice => choice.classList.remove("selected"));
    
    // Add selection to clicked choice
    const selectedChoice = document.getElementById(userChoi);
    selectedChoice.classList.add("selected");

    const compChoice = genCompchoice();
    
    if (userChoi === compChoice) {
        drawGame();
        addToHistory(userChoi, compChoice, "It's a draw!");
    } else {
        let userwin = true;
        if (userChoi === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoi === "paper") {
            userwin = compChoice === "scissor" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin, userChoi, compChoice);
    }
};

// Event Listeners
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const useChoi = choice.getAttribute("id");
        play(useChoi);
    });
});

resetBtn.addEventListener("click", resetGame);

toggleSoundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    toggleSoundBtn.textContent = soundEnabled ? "🔊 Sound On" : "🔈 Sound Off";
});