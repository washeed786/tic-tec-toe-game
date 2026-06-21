let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset")
let msgcontiner= document.querySelector(".msg")
let msg =document.querySelector(".winner")
let newbtn=document.querySelector("#newbtn")
let turnO =true; ///player x, playerO

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame=()=>{
        trune0=true;
        enable();
        msgcontiner.classList.add("hide");
    }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }else{
            (box.innerText="x")
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })

})
const showwinner=(winner)=>{
    msg.innerText= `congratulation,winner is ${winner}`
    msgcontiner.classList.remove("hide")
    disable()
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
    const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const checkwinner =() =>{
    for(let pattern of winpattern){
           
                let pos1= boxes[pattern[0]].innerText;
                let pos2= boxes[pattern[1]].innerText;
                let pos3= boxes[pattern[2]].innerText;
                if 
                (pos1 != ""&& pos2 != ""&& pos3 != "")
                if(pos1===pos2&&pos2===pos3)
                {
                    showwinner(pos1)
                }
    }
};
reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
