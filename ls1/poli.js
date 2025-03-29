let b1 = document.createElement("button");
b1.innerText="click me";
b1.style.background="red";
b1.style.color="white";
document.querySelector("body").prepend(b1);

let per=document.createElement("p");
per.innerText="thi this my first time";
per.style.color="red";
per.background="barbule";
//per.setAttribute("para");
document.querySelector("body").append(per);
console.dir("per")

