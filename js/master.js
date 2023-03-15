// check if there is color in local storge color option
let mainColor=localStorage.getItem("color_option");
if (mainColor !== null){
    // console.log("local stroge is not emepty u can set it in root");
    // console.log(localStorage.getItem("color_option"));
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color_option"));
    
    //when start remove active item and add active to the locla storage item
    // document.querySelectorAll(".active").forEach(element=>{
    //     element.classList.remove("active");
    // });
    if(mainColor===`#009688`){ 
    document.querySelector(".about-us .img-box img").src="../img/bint-green.png";}

        if(mainColor===`#ff9800`){
document.querySelector(".about-us .img-box img").src="../img/bint-orange.png";}

        if(mainColor===`#e91e63`){
document.querySelector(".about-us .img-box img").src="../img/bint-bink.png";}

        if(mainColor===`#03a9f4`){
document.querySelector(".about-us .img-box img").src="../img/bint-blue.png";}

        if(mainColor===`#4caf50`){
        document.querySelector(".about-us .img-box img").src="../img/bint-reelgreen.png";}


    document.querySelectorAll(".color-list li").forEach(li=>{
        li.classList.remove("active")
        if(li.dataset.color===mainColor){
            li.classList.add("active");
        }
    });
    // document.querySelectorAll(".color-list li").forEach(li=>{
    //     if(li.dataset.color===mainColor){
    //         li.classList.add("active");
    //     }
    // });
}


document.querySelector(".toggel-setting .fa-cog").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}

//switch colors
const colorLi=document.querySelectorAll(".color-list li");
//loop on all list item
colorLi.forEach(li =>{
    //click on every list item
    li.addEventListener("click" ,(e)=>{
        // console.log(e.target);   
        colorLi.forEach(li=>{
            li.classList.remove("active")
        });
        e.target.classList.add("active");
        document.documentElement.style.setProperty("--main-color",`${e.target.dataset.color}`);


        if(`${e.target.dataset.color}`===`#009688`)
        {

            document.querySelector(".about-us .img-box img").src="../img/bint-green.png";

        }
        if(`${e.target.dataset.color}`===`#ff9800`)
        {

            document.querySelector(".about-us .img-box img").src="../img/bint-orange.png";

        }
        if(`${e.target.dataset.color}`===`#e91e63`)
        {

            document.querySelector(".about-us .img-box img").src="../img/bint-bink.png";

        }
        if(`${e.target.dataset.color}`===`#03a9f4`)
        {

            document.querySelector(".about-us .img-box img").src="../img/bint-blue.png";

        }
        if(`${e.target.dataset.color}`===`#4caf50`)
        {

            document.querySelector(".about-us .img-box img").src="../img/bint-reelgreen.png";

        }

        //set color on locl stroage
        localStorage.setItem("color_option",`${e.target.dataset.color}`)
    }); 
});











//switch background
const randombackground=document.querySelectorAll(".random-background span");
//loop on all spans
randombackground.forEach(span =>{
    //click on every span
    span.addEventListener("click" ,(e)=>{
        // console.log(e.target);   
        randombackground.forEach(span=>{
            span.classList.remove("active")
        });
        e.target.classList.add("active");

        if(e.target.dataset.background === `yes`){
            backgroundOpthion=true;
            randomizeBackground();
        }
        else{
            backgroundOpthion=false;
            clearInterval(backgroundInterval);
        }
    }); 
});
// random background option
let backgroundOpthion=true;
// variable to control  the interval
let backgroundInterval;
//select landing page elemnt
let landingPage=document.querySelector(".landing-page");
// get Array  of imgs
let imgsArr=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

//function randomize imgs
function randomizeBackground(){
    if(backgroundOpthion === true){
        backgroundInterval=setInterval(() => {
            // get random number
            let ran=Math.floor(Math.random()*imgsArr.length);
            
            //change background Image url
            landingPage.style.backgroundImage= `url("img/${imgsArr[ran]}")`;
            }, 8000);
    }
    else{
        clearInterval(backgroundInterval);
    }
};

randomizeBackground();


// select skills selctor
let ourkills=document.querySelector(".skills");

window.onscroll=function(){

    //skills offset top
    let skillsOffsetTop=ourkills.offsetTop;


    //skills outer Height  
    let skillsOuterHeight=ourkills.offsetHeight;
    
    //window height
    let windowHeight=this.innerHeight;

    //windwo scroll top
    let windowScrollTop=this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){

        let allskills=document.querySelectorAll(".skills .skill-box .skill-progress span");

        //loop
        allskills.forEach(skill =>  {

            skill.style.width = skill.dataset.progress;

        });
    }
};




//create popup with the Image 
let ourGallary=document.querySelectorAll(".gallary .images-box img");

console.log(ourGallary);

ourGallary.forEach(img=>{

    img.addEventListener(`click`,(e)=>{

        //create overlay elemnt
        let overlay=document.createElement("div");

        //add class to overlay
        overlay.className="popuo-overlay";

        //append overlay to the pody
        document.body.appendChild(overlay);


        
        //creat the popup massege
        let popupBox=document.createElement("div");

        // add class to the popup
        popupBox.className="popup-box";



        if(img.alt !== null){

            //crete hedding 
            let imgHeading=document.createElement("h3");
            
            // crarte text for heading
            let imgText=document.createTextNode(img.alt);
            console.log(img.alt);

            //append test to heading
            imgHeading.appendChild(imgText);

            //append haeding to the popup
            popupBox.appendChild(imgHeading);
        }


        //create the image
        let popupImage=document.createElement("img");

        //get image src
        console.log(img.src);

        //set iamg source  
        popupImage.src=img.src;

        // add img to popup box 
        popupBox.appendChild(popupImage);

        // apend popup box to the body
        document.body.appendChild(popupBox);

        // create the close span 
        let closeButton=document.createElement("span");

        //create the close button textAlign: 
        let closButtonText=document.createTextNode("X"); 
        
        //append text to close buttton
        closeButton.appendChild(closButtonText);

        //add class to the close buttton
        closeButton.className="close-button";

        //append button to pupop box
        popupBox.appendChild(closeButton);
    });
});

//colse popup
document.addEventListener("click",function(e){

    if(e.target.className==="close-button")
    {
        //remove the curent popup
        e.target.parentNode.remove();
        //remove overlay
        document.querySelector(".popuo-overlay").remove();
    }
    document.onkeyup=(e)=>{
        if(e.key=="Escape"){
            document.querySelector(".popup-box").remove();
            document.querySelector(".popuo-overlay").remove();
        }
    }
});


const allBullets= document.querySelectorAll(".nav-bullets .bullet");
const alllinks= document.querySelectorAll(".landing-page .header-area ul li a");
function scrollToSomewhere(elements){
    elements.forEach(ele=> {

        ele.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:"smooth"
            });
    
        });
    });
}
scrollToSomewhere(allBullets);
scrollToSomewhere(alllinks);


// handle active state 
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        });
        ev.target.classList.add("active");
}

let bulletsSpan=document.querySelectorAll(".bullets-option span");
console.log(bulletsSpan);
let bulletsContainer=document.querySelector(".nav-bullets");
console.log(bulletsContainer);
let bulletLoclItem=localStorage.getItem("bullets-option");

if(bulletLoclItem!==null)
{
    bulletsSpan.forEach(span=>{
        span.classList.remove("active");
    });
    if(bulletLoclItem===`block`)
    {
        bulletsSpan[0].classList.add("active");
        bulletsContainer.style.display="block";
    }
    else{
        bulletsSpan[1].classList.add("active");
        bulletsContainer.style.display="none";
    }
}

bulletsSpan.forEach(span=>{
    
    span.addEventListener("click",(e)=>{
        if(e.target.dataset.display==="yes"){
            bulletsContainer.style.display="block";
            localStorage.setItem("bullets-option","block");
        }
        else{
            bulletsContainer.style.display="none";
            localStorage.setItem("bullets-option","none");
        }
        handleActive(e);
    });
});

//reser options 
document.querySelector(".reset-options").onclick=function(){

    localStorage.clear();
    // localStorage.removeItem("bullets-option"); 
    window.location.reload();
}

//toggle menu
let toggleBtn=document.querySelector(".toggle-menu");
let theLinks=document.querySelector(".header-area ul")
console.log(theLinks);

toggleBtn.onclick=function(e){

    //stop propagation // to when click in span inside the links conseder it the button 
    e.stopPropagation();

    this.classList.toggle("menu-active")

    theLinks.classList.toggle("open");
}
//stop propagatoin
theLinks.onclick=function(e){
    e.stopPropagation();
}
//click anywhere outside menu and toggle Button
document.addEventListener("click",(e)=>{
    if(e.target!==toggleBtn&&e.target!==theLinks)
    {
        if(theLinks.classList.contains("open"))
        {
            theLinks.classList.remove("open");
            toggleBtn.classList.remove("menu-active");
        }
    }
});
