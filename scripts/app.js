

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");


let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");
let changeBtn = document.getElementById("changeBtn");
let reset = document.getElementById("reset");

let userBox = "";
let userColor = "";

boxNumber.addEventListener('keypress', (event) =>{
    if(event.key === 'Enter')
    {
    userBox = boxNumber.value
    console.log(userBox)
    
    }
})


changeColor.addEventListener('keypress', (event) =>{
    if(event.key === 'Enter')
    {
    userColor = changeColor.value
    console.log(userColor)
    
    }
})

function changeTheColor(){

    let color = userColor.toLowerCase();

    switch (color)
    {
        case "red":
            if (userBox === "1")
            {
                box1.classList.remove("yellow");
                box1.classList.remove("brown");
                box1.classList.remove("purple");
                box1.classList.remove("blue");
                box1.classList.add("red");
            }
            else if (userBox === "2")
            {
                box2.classList.remove("yellow");
                box2.classList.remove("brown");
                box2.classList.remove("purple");
                box2.classList.remove("blue");
                box2.classList.add("red");
            }
            else if (userBox === "3")
            {
                box3.classList.remove("yellow");
                box3.classList.remove("brown");
                box3.classList.remove("purple");
                box3.classList.remove("blue");
                box3.classList.add("red");
            }
            else if (userBox === "4")
            {
                box4.classList.remove("yellow");
                box4.classList.remove("brown");
                box4.classList.remove("purple");
                box4.classList.remove("blue");
                box4.classList.add("red");
            }
            else if (userBox === "5")
            {
                box5.classList.remove("yellow");
                box5.classList.remove("brown");
                box5.classList.remove("purple");
                box5.classList.remove("blue");
                box5.classList.add("red");
            }
            else if (userBox === "6")
            {
                box6.classList.remove("yellow");
                box6.classList.remove("brown");
                box6.classList.remove("purple");
                box6.classList.remove("blue");
                box6.classList.add("red");
            }
            else if (userBox === "7")
            {
                box7.classList.remove("yellow");
                box7.classList.remove("brown");
                box7.classList.remove("purple");
                box7.classList.remove("blue");
                box7.classList.add("red");
            }
            else if (userBox === "8")
            {
                box8.classList.remove("yellow");
                box8.classList.remove("brown");
                box8.classList.remove("purple");
                box8.classList.remove("blue");
                box8.classList.add("red");
            }
        break;
        case "blue":
            if (userBox === "1")
            {
                box1.classList.remove("yellow");
                box1.classList.remove("brown");
                box1.classList.remove("purple");
                box1.classList.remove("red");
                box1.classList.add("blue");
            }
            else if (userBox === "2")
            {
                box2.classList.remove("yellow");
                box2.classList.remove("brown");
                box2.classList.remove("purple");
                box2.classList.remove("red");
                box2.classList.add("blue");
            }
            else if (userBox === "3")
            {
                box3.classList.remove("yellow");
                box3.classList.remove("brown");
                box3.classList.remove("purple");
                box3.classList.remove("red");
                box3.classList.add("blue");
            }
            else if (userBox === "4")
            {
                box4.classList.remove("yellow");
                box4.classList.remove("brown");
                box4.classList.remove("purple");
                box4.classList.remove("red");
                box4.classList.add("blue");
            }
            else if (userBox === "5")
            {
                box5.classList.remove("yellow");
                box5.classList.remove("brown");
                box5.classList.remove("purple");
                box5.classList.remove("red");
                box5.classList.add("blue");
            }
            else if (userBox === "6")
            {
                box6.classList.remove("yellow");
                box6.classList.remove("brown");
                box6.classList.remove("purple");
                box6.classList.remove("red");
                box6.classList.add("blue");
            }
            else if (userBox === "7")
            {
                box7.classList.remove("yellow");
                box7.classList.remove("brown");
                box7.classList.remove("purple");
                box7.classList.remove("red");
                box7.classList.add("blue");
            }
            else if (userBox === "8")
            {
                box8.classList.remove("yellow");
                box8.classList.remove("brown");
                box8.classList.remove("purple");
                box8.classList.remove("red");
                box8.classList.add("blue");
            }
        break;
        case "purple":
            if (userBox === "1")
            {
                box1.classList.remove("yellow");
                box1.classList.remove("brown");
                box1.classList.remove("blue");
                box1.classList.remove("red");
                box1.classList.add("purple");
            }
            else if (userBox === "2")
            {
                box2.classList.remove("yellow");
                box2.classList.remove("brown");
                box2.classList.remove("blue");
                box2.classList.remove("red");
                box2.classList.add("purple");
            }
            else if (userBox === "3")
            {
                box3.classList.remove("yellow");
                box3.classList.remove("brown");
                box3.classList.remove("blue");
                box3.classList.remove("red");
                box3.classList.add("purple");
            }
            else if (userBox === "4")
            {
                box4.classList.remove("yellow");
                box4.classList.remove("brown");
                box4.classList.remove("blue");
                box4.classList.remove("red");
                box4.classList.add("purple");
            }
            else if (userBox === "5")
            {
                box5.classList.remove("yellow");
                box5.classList.remove("brown");
                box5.classList.remove("blue");
                box5.classList.remove("red");
                box5.classList.add("purple");
            }
            else if (userBox === "6")
            {
                box6.classList.remove("yellow");
                box6.classList.remove("brown");
                box6.classList.remove("blue");
                box6.classList.remove("red");
                box6.classList.add("purple");
            }
            else if (userBox === "7")
            {
                box7.classList.remove("yellow");
                box7.classList.remove("brown");
                box7.classList.remove("blue");
                box7.classList.remove("red");
                box7.classList.add("purple");
            }
            else if (userBox === "8")
            {
                box8.classList.remove("yellow");
                box8.classList.remove("brown");
                box8.classList.remove("blue");
                box8.classList.remove("red");
                box8.classList.add("purple");
            }
        break;
        case "brown":
            if (userBox === "1")
            {
                box1.classList.remove("yellow");
                box1.classList.remove("purple");
                box1.classList.remove("blue");
                box1.classList.remove("red");
                box1.classList.add("brown");
            }
            else if (userBox === "2")
            {
                box2.classList.remove("yellow");
                box2.classList.remove("purple");
                box2.classList.remove("blue");
                box2.classList.remove("red");
                box2.classList.add("brown");
            }
            else if (userBox === "3")
            {
                box3.classList.remove("yellow");
                box3.classList.remove("purple");
                box3.classList.remove("blue");
                box3.classList.remove("red");
                box3.classList.add("brown");
            }
            else if (userBox === "4")
            {
                box4.classList.remove("yellow");
                box4.classList.remove("purple");
                box4.classList.remove("blue");
                box4.classList.remove("red");
                box4.classList.add("brown");
            }
            else if (userBox === "5")
            {
                box5.classList.remove("yellow");
                box5.classList.remove("purple");
                box5.classList.remove("blue");
                box5.classList.remove("red");
                box5.classList.add("brown");
            }
            else if (userBox === "6")
            {
                box6.classList.remove("yellow");
                box6.classList.remove("purple");
                box6.classList.remove("blue");
                box6.classList.remove("red");
                box6.classList.add("brown");
            }
            else if (userBox === "7")
            {
                box7.classList.remove("yellow");
                box7.classList.remove("purple");
                box7.classList.remove("blue");
                box7.classList.remove("red");
                box7.classList.add("brown");
            }
            else if (userBox === "8")
            {
                box8.classList.remove("yellow");
                box8.classList.remove("purple");
                box8.classList.remove("blue");
                box8.classList.remove("red");
                box8.classList.add("brown");
            }
        break;
        case "yellow":
            if (userBox === "1")
            {
                box1.classList.remove("brown");
                box1.classList.remove("purple");
                box1.classList.remove("blue");
                box1.classList.remove("red");
                box1.classList.add("yellow");
            }
            else if (userBox === "2")
            {
                box2.classList.remove("brown");
                box2.classList.remove("purple");
                box2.classList.remove("blue");
                box2.classList.remove("red");
                box2.classList.add("yellow");
            }
            else if (userBox === "3")
            {
                box3.classList.remove("brown");
                box3.classList.remove("purple");
                box3.classList.remove("blue");
                box3.classList.remove("red");
                box3.classList.add("yellow");
            }
            else if (userBox === "4")
            {
                box4.classList.remove("brown");
                box4.classList.remove("purple");
                box4.classList.remove("blue");
                box4.classList.remove("red");
                box4.classList.add("yellow");
            }
            else if (userBox === "5")
            {
                box5.classList.remove("brown");
                box5.classList.remove("purple");
                box5.classList.remove("blue");
                box5.classList.remove("red");
                box5.classList.add("yellow");
            }
            else if (userBox === "6")
            {
                box6.classList.remove("brown");
                box6.classList.remove("purple");
                box6.classList.remove("blue");
                box6.classList.remove("red");
                box6.classList.add("yellow");
            }
            else if (userBox === "7")
            {
                box7.classList.remove("brown");
                box7.classList.remove("purple");
                box7.classList.remove("blue");
                box7.classList.remove("red");
                box7.classList.add("yellow");
            }
            else if (userBox === "8")
            {
                box8.classList.remove("brown");
                box8.classList.remove("purple");
                box8.classList.remove("blue");
                box8.classList.remove("red");
                box8.classList.add("yellow");
            }
        break;
        default:
            console.log("Color not available, maybe you have a stray space somewhere?")
        break;
    }
     

}


changeBtn.addEventListener('click', function(){

    changeTheColor();
})

reset.addEventListener('click', function(){
    location.reload();
})