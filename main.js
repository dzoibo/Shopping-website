

/**
 * coded by @dzoibo
 * figma link: https://www.figma.com/community/file/1359447228153375333/shopping-website-prototype-with-parralax-effect
 */
import './style.scss'
import gsap from 'gsap'

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
            left:"0%",
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
            left:"0px",
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


btQuickView.addEventListener("click",()=>{
    gsap.to(shoppingSession,{
        marginLeft:"-400px",
        duration: animationDuration
    });
    gsap.to(descSession,{
        width: "50%",
        duration: animationDuration
    })
   
    gsap.to(descs[3],{
        right:"0%",
        left:"0%",
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
        duration: animationDuration
    });
});
back.addEventListener("click",()=>{
    position=2;
    gsap.to(shoppingSession,{
        marginLeft:"0px",
        width: "20%",
        duration: animationDuration
    });
    gsap.to(descSession,{
        width: "33.33%",
        duration: animationDuration
    })
   
    gsap.to(men[2],{
        top:"initial",
        left:"0%",
        scale: 1,
        duration: animationDuration

    })
    gsap.to(back,{
        opacity: 0,
        left:"140px",
    })
    gsap.to(arrowBackground,{
        opacity:0,
        right: "100px"
    })
     gsap.to(descs[3],{
        right:"-150%",
        left: "initial",
        duration: animationDuration

    });
    
    gsap.to(descs[position],{
        right:"initial",
        left:"0%",
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
        duration: animationDuration
    });
    gsap.to(men[3],{
        right:"-150%",
        left:"initial",
        duration: animationDuration
    });
    gsap.to(men[4],{
        right:"-150%",
        left:"initial",
        duration: animationDuration
    });
    gsap.to(men[5],{
        right:"-150%",
        left:"initial",
        duration: animationDuration
    });
    
})
bgNext.addEventListener("click",()=>{
    gsap.to(men[position+1],{
        left:"0px",
        right:"0%",
        duration : animationDuration
    });

    gsap.to(men[position],{
        left:"-150%",
        duration: animationDuration
    });
    position++;
})
bgPrev.addEventListener("click",()=>{
    gsap.to(men[position],{
        right:"-150%",
        duration: animationDuration
    });

    gsap.to(men[position-1],{
        right:"initial",
        left:"0%",
        duration: animationDuration
    });
    position--;
})