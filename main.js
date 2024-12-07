let allbtn=document.querySelector(".allbtn");
let buttons=document.querySelectorAll(".clkbtn");
let game_result=document.querySelector(".game_result");
let result_msg=document.querySelector(".result_msg");
let newGame=document.querySelector(".newGame");
let resetdiv=document.querySelector(".resetdiv");
let reset=document.querySelector("#reset");

let turn_o=true;
const numBtn=9;
let cnt=0;

const winningSet = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reStart = ()=>{
    turn_o=true;
    cnt=0;
    allbtn.classList.remove("hidebtndiv");
    resetdiv.classList.remove("hideResetDiv");
    game_result.classList.add("show");
    for(let btn of buttons){
        btn.disabled=false;
        btn.innerText="";
        btn.classList.remove("Yellow");
        btn.classList.remove("Blue");
    }

    
}

reset.addEventListener("click",reStart);
newGame.addEventListener("click",reStart);

const showWinner = (winner) =>{
    result_msg.innerText=`Congratulations! Winner is player ${winner}.`;
    allbtn.classList.add("hidebtndiv");
    resetdiv.classList.add("hideResetDiv");
    game_result.classList.remove("show");
}
buttons.forEach((clkbtn) => {
   clkbtn.addEventListener("click",() => {
        if(turn_o)
        {
            clkbtn.innerText="o";
            clkbtn.classList.add("Yellow");
            turn_o=false; 
        }
        else{
            clkbtn.innerText="x";
            clkbtn.classList.add("Blue");
           
            turn_o=true;  
        }
        
        clkbtn.disabled = true;
        cnt++;
        let  isWinner = checkWinner();
        if(cnt === numBtn && ! isWinner){
            showDraw();
        }

    });
});
 
const showDraw = () =>{
    result_msg.innerText=` The game is Draw`;
    allbtn.classList.add("hidebtndiv");
    resetdiv.classList.add("hideResetDiv");
    game_result.classList.remove("show");
}
const checkWinner = ()=>{
     for(let pat of winningSet){
        let val1= buttons[pat[0]].innerText;
        let val2= buttons[pat[1]].innerText;
        let val3= buttons[pat[2]].innerText;
   
    if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3)
            {
                console.log("winner",val1); 
                showWinner(val1);
                return true;
            }

        }

    }
};

