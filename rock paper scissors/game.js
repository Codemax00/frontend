let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choices");
const msg = document.querySelector("#msg")
const Userscorper=document.querySelector("#users")

const Compscorper=document.querySelector("#comps")
const genCompchoice =()=>{
    let opt=["rock","paper","scissor"]
    
    return opt[Math.floor(Math.random()*3)];
}
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin,userChoi,compChoice)=>{
    if(userwin){
        userscore++;
        Userscorper.innerText=userscore


        msg.innerText=`you win (.)(.) ${userChoi} beast ${compChoice}`
        msg.style.backgroundColor ="green"
    }
    else{
        compscore++;
        Compscorper.innerText=compscore;
        msg.innerText=`you lose (.)(.) ${userChoi} beast ${compChoice}`;
        msg.style.backgroundColor ="red"

    }
}
const play=(userChoi)=>{
    const compChoice=genCompchoice();
if(userChoi===compChoice){
drawGame();
}
else{
    let userwin=true;
    if(userChoi==="rock"){
        userwin=compChoice==="paper"?false:true;
    }
    else if(userChoi==="paper"){
        userwin=compChoice==="scissor"?false:true;
    }
    else{
        userwin=compChoice==="rock"?false:true;
    }
    showwinner(userwin,userChoi,compChoice);

}
}
choices.forEach((choice) => {
choice.addEventListener("click",()=>{
const useChoi= choice.getAttribute("id");
play(useChoi);
})
});