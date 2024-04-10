import './style.scss'
import gsap from 'gsap'

const bgs= document.querySelectorAll(".bg");
const men = document.querySelectorAll(".men")
const descs= document.querySelectorAll(".desc");

const next=document.querySelector(".next");
const prev= document.querySelector(".prev");
var position =0;
const animationDuration=1.2;

next.addEventListener("click",()=>{
    if(position<2){
      gsap.to(bgs[position],{
            left:"-100%",
            duration: animationDuration
        });

        gsap.to(bgs[position+1],{
            right:"0%",
            duration: animationDuration
        });

        gsap.to(men[position],{
            left:"-150%",
            duration: animationDuration
        });

        gsap.to(men[position+1],{
            right:"0%",
            duration: animationDuration
        });

        gsap.to(descs[position],{
            left:"-100%",
            duration: animationDuration
        });
        gsap.to(descs[position+1],{
            right:"0%",
            duration: animationDuration
        });
        position++  
    }
    
})

prev.addEventListener("click",()=>{
    if(position!==0){
        gsap.to(bgs[position-1],{
            left:"0%",
            duration: animationDuration
        });

        gsap.to(bgs[position],{
            right:"-150%",
            left:"initial",
            duration: animationDuration
        });

        gsap.to(men[position-1],{
            left:"0%",
            duration: animationDuration
        });

        gsap.to(men[position],{
            right:"-150%",
            left:"initial",
            duration: animationDuration
        });

        gsap.to(descs[position-1],{
            left:"0%",
            duration: animationDuration

        });
        gsap.to(descs[position],{
            right:"-150%",
            left:"initial",
            duration: animationDuration
        });

        position--
    }
    
})