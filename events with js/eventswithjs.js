let bt=document.querySelector("#btn")
// bt.onclick=()=>{
//     console.log("batten clicked")
//     let a=25;
//     a++;
//     console.log(a);
// };
bt.addEventListener("click",()=>{
    console.log("batten one is clicked")
})
bt.addEventListener("click",()=>{
    console.log("clicked")
})
const thredEvent=()=>{
    console.log("batten")
}
bt.addEventListener("click",thredEvent)
bt.addEventListener("click",()=>{
    console.log("click")
})
bt.removeEventListener("click",thredEvent)
let div=document.querySelector("div");

div.onmouseover= (e) => {
    console.log(e);
    console.log("you are in");
}

