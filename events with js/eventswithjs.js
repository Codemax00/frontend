let bt=document.querySelector("#btn")
bt.onclick=()=>{
    console.log("batten clicked")
    let a=25;
    a++;
    console.log(a);
};

let div=document.querySelector("div");

div.onmouseover= (e) => {
    console.log(e);
    console.log("you are in");
}

