let turn ='X';
let iswin=false;
let btn=document.getElementById('btn')
let box=document.getElementsByClassName("box")
// console.log(box.length)
// Array.from(boxes).forEach(())
const changeTurn=()=>{
    return turn==='X'? '0':'X';
}
const clear =()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    for(let i=0;i<boxtext.length;i=i+1){
        boxtext[i].innerText=''
     }
     iswin=false;
     let t=document.querySelector('.turn');
     t.innerText="Turn for  X"
     turn='X';
     let info =document.querySelector('#info');
                info.innerText="";
}
btn.addEventListener('click',()=>{
    clear();
});


 const checkWin=()=>{
    let b=document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [2,5,8],
        [2,4,6],
        [2,4,5],
        [6,7,8]

    ];
    win.forEach((e)=>{
        if(b[e[0]].innerText===b[e[1]].innerText && b[e[1]].innerText===b[e[2]].innerText && b[e[0]].innerText!==''){
            iswin=true;
            return;
            
        } 
    })
 }
 
 

Array.from(box).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
         if(boxtext.innerText==='' && !iswin ){
            boxtext.innerText=turn;
            turn=changeTurn();
           let t=document.querySelector('.turn');
            checkWin(turn);
            if(!iswin)
            {
                t.innerHTML="Turn for  "+turn;
            }
            else{
                t.innerHTML=changeTurn()+" Wons";
                let info =document.querySelector('#info');
                info.innerText="Press Reset button to restart";
            }
         }
    })
})



// function fun(){
//     console.log("bhai fire hogaya hu")
// }

