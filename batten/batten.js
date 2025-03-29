let mode=document.querySelector("#mode");
let cmod="light"
let body=document.querySelector("body")

mode.addEventListener("click",()=>{
    if(cmod==="light"){
        cmod="dark"
        body.classList.add("dark")
        body.classList.remove("light")
        //document.querySelector("body").style.backgroundColor="black"
    }
    else{
        cmod="light"
        body.classList.add("light")
        body.classList.remove("dark")
        //document.querySelector("body").style.backgroundColor="white"
    }
    console.log(cmod);
})