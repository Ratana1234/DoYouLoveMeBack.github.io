"use strict"
let img=document.querySelector('#image');
let title=document.querySelector('#title');
let btnYes=document.querySelector('#btnYes');
let btnNo=document.querySelector('#btnNo');
let HappySound = new Audio("./code/happy-happy-happy-cat (1).mp3")
let sadSound = new Audio("./code/crying-cat.mp3")
btnYes.addEventListener('click',()=>{
img.src="https://i.pinimg.com/originals/ca/6c/74/ca6c744333366d89b3824449cb844c2e.gif"
title.innerHTML="Aww I love you Too";
HappySound.play()
HappySound.loop = true
})
let btnYesScale = 1;
let btnNoScale = 1;
btnNo.addEventListener('click',()=>{
    img.src="https://i.redd.it/xjgk8rsdz4mc1.gif"
    title.innerHTML="Kal mean jit sl nh vinh nh sl yg yu hz";
    HappySound.pause()
    sadSound.play()
    sadSound.loop=true
    btnNoScale-=0.1;
    btnYesScale+=0.1;
    btnNo.style.transform=`scale(${btnNoScale})`
    btnYes.style.transform=`scale(${btnYesScale})`
})

