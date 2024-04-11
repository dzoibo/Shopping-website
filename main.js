

/**
 * coded by @dzoibo
 * figma link: https://www.figma.com/community/file/1359447228153375333/shopping-website-prototype-with-parralax-effect
 */
import './style.scss'
import gsap from 'gsap'
import { CustomEase } from "gsap/all";

const bgs= document.querySelectorAll(".bg");
const men = document.querySelectorAll(".men")
const descs= document.querySelectorAll(".desc");
const btQuickView = document.querySelector("#quick-view");
const shoppingSession = document.querySelector(".shopping-session");
const descSession = document.querySelector(".desc-session");
const next=document.querySelector(".next");
const prev= document.querySelector(".prev");
const back= document.querySelector(".back");
const arrowBackground = document.querySelector(".arrow-background");
const bgNext= document.querySelector(".background-next");
const bgPrev= document.querySelector(".background-prev");
const ten = document.querySelector(".ten");
const arrowContainer=document.querySelector(".arrow-container");
let position =0;

const animationDuration=1.5;
const animationEase = CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 ");



next.addEventListener("click",()=>{
    if(position<2){
      gsap.to(bgs[position],{
            left:"-100%",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(bgs[position+1],{
            right:"0%",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(men[position],{
            left:"-150%",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(men[position+1],{
            right:"0%",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(descs[position],{
            left:"-100%",
            ease: animationEase,
            duration: animationDuration
        });
        gsap.to(descs[position+1],{
            right:"0%",
            left:"0px",
            ease: animationEase,
            duration: animationDuration
        });
        position++  
    }
})

prev.addEventListener("click",()=>{
    if(position!==0){
        gsap.to(bgs[position-1],{
            left:"0%",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(bgs[position],{
            right:"-150%",
            left:"initial",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(men[position-1],{
            left:"0%",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(men[position],{
            right:"-150%",
            left:"initial",
            ease: animationEase,
            duration: animationDuration
        });

        gsap.to(descs[position-1],{
            left:"0%",
            ease: animationEase,
            duration: animationDuration

        });
        gsap.to(descs[position],{
            right:"-150%",
            left:"initial",
            ease: animationEase,
            duration: animationDuration
        });

        position--
    }
    
})


btQuickView.addEventListener("click",()=>{
    gsap.to(shoppingSession,{
        marginLeft:"-400px",
        ease: animationEase,
        duration: animationDuration
    });
    gsap.to(descSession,{
        width: "50%",
        ease: animationEase,
        duration: animationDuration
    })
   
    gsap.to(descs[3],{
        right:"0%",
        left:"0%",
        ease: animationEase,
        duration: animationDuration

    });
    
    gsap.to(men[2],{
        top:"150px",
        scale: 1.5

    })
    gsap.to(back,{
        opacity: 1,
        left:"0px",
    })
    gsap.to(arrowBackground,{
        opacity:1,
        right: "32px"
    })
    gsap.to(descs[position],{
        left:"-150%",
        right:"initial",
        ease: animationEase,
        duration: animationDuration
    });

    gsap.to(arrowContainer,{
        opacity:"0",
        left:"-100px",
        scale:1.2,
        position:"absolute",
        duration: 0.5
    });

    gsap.to(ten,{
        scale:1.2,
        ease: animationEase,
        duration: animationDuration
    });
});
back.addEventListener("click",()=>{
    position=2;
    gsap.to(shoppingSession,{
        marginLeft:"0px",
        width: "20%",
        ease: animationEase,
        duration: animationDuration
    });
    gsap.to(descSession,{
        width: "33.33%",
        ease: animationEase,
        duration: animationDuration
    })
   
    gsap.to(men[2],{
        top:"initial",
        left:"0%",
        scale: 1,
        ease: animationEase,
        duration: animationDuration

    })
    gsap.to(back,{
        opacity: 0,
        left:"-140px",
        duration: 1.5
    })
    gsap.to(arrowBackground,{
        opacity:0,
        right: "100px"
    })
     gsap.to(descs[3],{
        right:"-150%",
        left: "initial",
        ease: animationEase,
        duration: animationDuration

    });
    
    gsap.to(descs[position],{
        right:"initial",
        left:"0%",
        ease: animationEase,
        duration: animationDuration
    }); 

    gsap.to(arrowContainer,{
        opacity:"1",
        left:"0px",
        scale:1,
        position:"relative",
        duration: 0.5
    });

    gsap.to(ten,{
        scale:1,
        ease: animationEase,
        duration: animationDuration
    });
    gsap.to(men[3],{
        right:"-150%",
        left:"initial",
        ease: animationEase,
        duration: animationDuration
    });
    gsap.to(men[4],{
        right:"-150%",
        left:"initial",
        ease: animationEase,
        duration: animationDuration
    });
    gsap.to(men[5],{
        right:"-150%",
        left:"initial",
        ease: animationEase,
        duration: animationDuration
    });
    
})
bgNext.addEventListener("click",()=>{
    if(position<5){
       gsap.to(men[position+1],{
        right:"0%",
        duration : 1
        });

        gsap.to(men[position],{
            left:"-150%",
            ease: animationEase,
            duration: 1
        });
        position++; 
    }
    
})
bgPrev.addEventListener("click",()=>{
    if(position>2){
        gsap.to(men[position],{
            right:"-150%",
            left: "initial",
            ease: animationEase,
            duration: 1
        });
    
        gsap.to(men[position-1],{
            left:"0%",
            ease: animationEase,
            duration: 1
        });
        position--;
    }
    
})