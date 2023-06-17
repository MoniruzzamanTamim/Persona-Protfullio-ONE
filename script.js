

// ?header Section

const menuicon = document.getElementById('menubar');
const headerMenu = document.querySelector('.header-menu');

menuicon.addEventListener('click' , ()=>{

    headerMenu.classList.toggle('active');
});

//  scroll event
const headerScrool = document.querySelector('.header');
const backendDegign = document.querySelector('.backend-degign');
window.addEventListener('scroll' , ()=>{
    headerMenu.classList.remove('active');
    if(scrollY > 0){
        headerScrool.classList.add('active');
        backendDegign.classList.add('active');
    }else{
        headerScrool.classList.remove('active');
        backendDegign.classList.remove('active');
    };
     // page scrool kore jokhon je part a jabe tokhon menur sei part select hnbe
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header-menu a');
 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header-menu a[href*=' + id + ']').classList.add('active');
            });
        };
    });

})

// special section owl 
$('.special-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// skill
let circularProgress = document.querySelector(".circle-process"),
progressValue = document.querySelector(".processing-value");
let progressStartValue = 0,    
progressEndValue = 65,    
speed = 50;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#2ca46d ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);
// css
let circularProgress2 = document.querySelector(".css-pro"),
progressValue2 = document.querySelector(".css-val");
let progressStartValue2 = 0,    
progressEndValue2 = 60,    
speed2 = 50;

let progress2 = setInterval(() => {
progressStartValue2++;

progressValue2.textContent = `${progressStartValue2}%`
circularProgress2.style.background = `conic-gradient(#2ca46d ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
}    
}, speed2);


// botstrap
let circularProgress3 = document.querySelector(".bot-pro"),
progressValue3 = document.querySelector(".bot-val");
let progressStartValue3 = 0,    
progressEndValue3 = 75,    
speed3 = 40;

let progress3 = setInterval(() => {
progressStartValue3++;

progressValue3.textContent = `${progressStartValue3}%`
circularProgress3.style.background = `conic-gradient(#2ca46d ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
}    
}, speed3);

// Javascript
let circularProgress4 = document.querySelector(".java-pro"),
progressValue4 = document.querySelector(".java-val");
let progressStartValue4 = 0,    
progressEndValue4 = 75,    
speed4 = 40;

let progress4 = setInterval(() => {
progressStartValue4++;

progressValue4.textContent = `${progressStartValue4}%`
circularProgress4.style.background = `conic-gradient(#2ca46d ${progressStartValue4 * 3.6}deg, #ededed 0deg)`

if(progressStartValue4 == progressEndValue4){
    clearInterval(progress4);
}    
}, speed4);


// Jquery
let circularProgress5 = document.querySelector(".jq-pro"),
progressValue5 = document.querySelector(".jq-val");
let progressStartValue5 = 0,    
progressEndValue5 = 35,    
speed5 = 80;

let progress5 = setInterval(() => {
progressStartValue5++;

progressValue5.textContent = `${progressStartValue5}%`
circularProgress5.style.background = `conic-gradient(#2ca46d ${progressStartValue5 * 3.6}deg, #ededed 0deg)`

if(progressStartValue5 == progressEndValue5){
    clearInterval(progress5);
}    
}, speed5);

// Photoshop
let circularProgress6 = document.querySelector(".pt-pro"),
progressValue6 = document.querySelector(".pt-val");
let progressStartValue6 = 0,    
progressEndValue6 = 85,    
speed6 = 40;

let progress6 = setInterval(() => {
progressStartValue6++;

progressValue6.textContent = `${progressStartValue6}%`
circularProgress6.style.background = `conic-gradient(#2ca46d ${progressStartValue6 * 3.6}deg, #ededed 0deg)`

if(progressStartValue6 == progressEndValue6){
    clearInterval(progress6);
}    
}, speed6);

// Marketing
let circularProgress7 = document.querySelector(".mr-pro"),
progressValue7 = document.querySelector(".mr-val");
let progressStartValue7 = 0,    
progressEndValue7 = 70,    
speed7 = 60;

let progress7 = setInterval(() => {
progressStartValue7++;

progressValue7.textContent = `${progressStartValue7}%`
circularProgress7.style.background = `conic-gradient(#2ca46d ${progressStartValue7 * 3.6}deg, #ededed 0deg)`

if(progressStartValue7 == progressEndValue7){
    clearInterval(progress7);
}    
}, speed7);


// Branding
let circularProgress8 = document.querySelector(".band-pro"),
progressValue8 = document.querySelector(".band-val");
let progressStartValue8 = 0,    
progressEndValue8 = 90,    
speed8 = 60;

let progress8 = setInterval(() => {
progressStartValue8++;

progressValue8.textContent = `${progressStartValue8}%`
circularProgress8.style.background = `conic-gradient(#2ca46d ${progressStartValue8 * 3.6}deg, #ededed 0deg)`

if(progressStartValue8 == progressEndValue8){
    clearInterval(progress8);
}    
}, speed8);


// experience section

// const exbtn = document.querySelector('.exbtn');
// const allBtn = document.querySelector('.allBtn');
// const webBtn = document.querySelector('.webBtn');
// const grapicsBtn = document.querySelector('.grapicsBtn');
// const videoBtn = document.querySelector('.videoBtn');



// allBtn.addEventListener('click', ()=>{
//     allBtn.classList.add('active');
//     webBtn.classList.remove('active');
//     grapicsBtn.classList.remove('active');
//     videoBtn.classList.remove('active');
// })
// webBtn.addEventListener('click', ()=>{
//     allBtn.classList.remove('active');
//     webBtn.classList.add('active');
//     grapicsBtn.classList.remove('active');
//     videoBtn.classList.remove('active');
// })
// grapicsBtn.addEventListener('click', ()=>{
//     allBtn.classList.remove('active');
//     webBtn.classList.remove('active');
//     grapicsBtn.classList.add('active');
//     videoBtn.classList.remove('active');
// })
// videoBtn.addEventListener('click', ()=>{
//     allBtn.classList.remove('active');
//     webBtn.classList.remove('active');
//     grapicsBtn.classList.remove('active');
//     videoBtn.classList.add('active');
// })


// experience section

// ar madhyome jekhane click krbo sekhane active show korbe


// filterCards function validation
// const filterCards = e =>{
//     document.querySelector('.exbtn.active').classList.remove('active');
//     e.target.classList.add('active');
//     console.log(e.target);
// }
// add click event for button
// filterButtons.forEach(button => button.addEventListener('click', filterCards));



// filter Section

const filterButtons = document.querySelectorAll('.protfullio-btn button');
const filterableCards = document.querySelectorAll('.protfulio-content');

const filterCards = e =>{
// button click background change
    document.querySelector('.exbtn.active').classList.remove('active');
    e.target.classList.add('active');
    console.log(e.target);

    // filterableCards 
    filterableCards.forEach(cards =>{
        cards.classList.add('hide');

        // check name-data filter all
        if (cards.dataset.name === e.target.dataset.name ||  e.target.dataset.name  === "allDesign") {
        cards.classList.remove('hide');
        }

    });
    
}
// add click event for button
filterButtons.forEach(button => button.addEventListener('click', filterCards))




//  Button Click Project Details Open Function

const openProjectOne = document.querySelector('.openProjectOne');
const openProjectTwo = document.querySelector('.openProjectTwo');
const openProjectThree = document.querySelector('.openProjectThree');
const openProjectFour = document.querySelector('.openProjectFour');
const openProjectFive = document.querySelector('.openProjectFive');
const openProjectSix= document.querySelector('.openProjectSix');
const projectOne = document.querySelector('.projectOne');
const projectTwo = document.querySelector('.projectTwo');
const projectThree = document.querySelector('.projectThree');
const projectFour = document.querySelector('.projectFour');
const projectFive = document.querySelector('.projectFive');
const projectSix = document.querySelector('.projectSix');



openProjectOne.addEventListener('click', ()=>{
    projectOne.classList.add('active');
})
 
openProjectTwo.addEventListener('click', ()=>{
    projectTwo.classList.add('active');
})
 
openProjectThree.addEventListener('click', ()=>{
    projectThree.classList.add('active');
})
 
openProjectFour.addEventListener('click', ()=>{
    projectFour.classList.add('active');
})
 
openProjectFive.addEventListener('click', ()=>{
    projectFive.classList.add('active');
})
 
openProjectSix.addEventListener('click', ()=>{
    projectSix.classList.add('active');
})
 

// close-project
const closeBtn = document.querySelectorAll('.closeBtn');
closeBtn.forEach(closeBtn => {
    closeBtn.addEventListener('click' , ()=>{
    projectOne.classList.remove('active');
    projectTwo.classList.remove('active');
    projectThree.classList.remove('active');
    projectFour.classList.remove('active');
    projectFive.classList.remove('active');
    projectSix.classList.remove('active');
        
    })
});


// review section
$('.review-owl').owlCarousel({
    margin:10,
    dot:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// Mouse move animation
const cursor= document.querySelector(".cursor");
document.addEventListener("mousemove", (e)=>{
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
})


// page lader

const preloader = document.querySelector('.preloader');

window.addEventListener('load' , ()=>{
    console.log(preloader);
    preloader.classList.add('active');
})