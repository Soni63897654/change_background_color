const button =document.getElementById("btn");
const body = document.body;

const colors = ["red","green","blue","yellow","pink","purple"]
button.addEventListener("click",changebackground);

body.style.backgroundColor = colors[0]

function changebackground(){
    const colorsIndex = Math.floor(Math.random() *colors.length)
    body.style.backgroundColor = colors[colorsIndex]

}
