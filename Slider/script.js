const image=["./img/pic1.jpeg","./img/pic5.webp","./img/pic3.jpeg","./img/pic4.jpeg","./img/pic2.jpeg"];
const headerText=["Web Design","Android & IOS Developer","Mern Stack","Full Stack","Fultter Developer"];
const imgLen=image.length;
const header=document.querySelector(".header");
const arrowRightBtn=document.querySelector(".arrowRight");
const arrowLeftBtn=document.querySelector(".arrowLeft");
let count=0;
let text=0;
let headingContent=document.querySelector(".heading-content");


function arrowRight(){

        if(count<imgLen){
            headingContent.innerHTML=`${headerText[text]}`
           header.style.backgroundImage=`url(${image[count]})`;
           count++;
           text++;
          
       
    }else{
        count=0;
        text=0;
        headingContent.innerHTML=`${headerText[text]}`
        header.style.backgroundImage=`url(${image[count]})`;
    }
}
function arrowLeft(){

        if(count>0){
            count--;
            text--;
            headingContent.innerHTML=`${headerText[text]}`
           header.style.backgroundImage=`url(${image[count]})`; 
         
       
    }else{
        text=headerText.length-1;
        count=imgLen-1;
    }
}
setInterval(()=>{
    if(count<imgLen){
        headingContent.innerHTML=`${headerText[text]}`
        header.style.transition="all 0.5s ease";
        header.style.backgroundImage=`url(${image[count]})`;
        text++;
        count++;
       
    
 }else{
     count=0;
     text=0;
 }
},5000);
const showMenuItem=document.querySelector(".DontShow");
const signUpBtn=document.querySelector(".signUp");
const listItem=document.querySelector(".responsiveMenu");
function ShowMenu(){
  listItem.classList.add("menuItemBlock");
}