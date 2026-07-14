/*========================================
        DUE MESI CON EVA ❤️
========================================*/


/*========================================
            VARIABILI
========================================*/

const startButton = document.getElementById("startButton");
const intro = document.getElementById("intro");
const home = document.getElementById("home");

const music = document.getElementById("music");

const openLetter = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let currentSlide = 0;


/*========================================
        INIZIA IL FILM
========================================*/

if (startButton) {
    startButton.addEventListener("click",()=>{

        intro.style.display="none";

        home.classList.remove("hidden");

        if (music) {
            music.play().then(() => {
                musicPlaying = true; // Sincronizza lo stato del player
                if (musicButton) musicButton.innerHTML = "🎵";
            }).catch(err => {
                console.log("Autoplay bloccato:", err);
            });
        }

    });
}


/*========================================
        TIMER
========================================*/

const startDate = new Date("2026-05-16T00:00:00");


function updateTimer(){

    const now = new Date();

    const distance = now - startDate;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor(

        (distance%(1000*60*60*24))

        /(1000*60*60)

    );

    const minutes = Math.floor(

        (distance%(1000*60*60))

        /(1000*60)

    );

    const seconds = Math.floor(

        (distance%(1000*60))

        /1000

    );

    if(document.getElementById("days")) document.getElementById("days").textContent=days;

    if(document.getElementById("hours")) document.getElementById("hours").textContent=hours;

    if(document.getElementById("minutes")) document.getElementById("minutes").textContent=minutes;

    if(document.getElementById("seconds")) document.getElementById("seconds").textContent=seconds;

}


setInterval(updateTimer,1000);

updateTimer();


/*========================================
        LETTERA CON BUSTA ❤️
========================================*/


const envelope=document.getElementById("envelope");

const heartSeal=document.getElementById("heartSeal");


if(envelope && heartSeal){


heartSeal.addEventListener("click",()=>{


envelope.classList.add("open");


if (typeof vibratePhone === "function") vibratePhone();


createLoveExplosion();



});


}


/*========================================
        GALLERIA INSTAGRAM ❤️
========================================*/


const galleryTrack =
document.querySelector(".gallery-track");


const galleryImages =
document.querySelectorAll(".gallery-track img");


const nextGallery =
document.querySelector(".next");


const prevGallery =
document.querySelector(".prev");



let galleryIndex=0;



function updateGallery(){

if (galleryTrack) {
    galleryTrack.style.transform=

    `translateX(-${galleryIndex*100}%)`;
}


}




if(nextGallery && galleryImages.length > 0){


nextGallery.addEventListener("click",()=>{


galleryIndex++;


if(galleryIndex>=galleryImages.length){

galleryIndex=0;

}


updateGallery();


});

}




if(prevGallery && galleryImages.length > 0){


prevGallery.addEventListener("click",()=>{


galleryIndex--;


if(galleryIndex<0){

galleryIndex=galleryImages.length-1;

}


updateGallery();


});

}




let startX=0;

let endX=0;



if(galleryTrack && galleryImages.length > 0){


galleryTrack.addEventListener(

"touchstart",

(e)=>{

startX=e.touches[0].clientX;

});


galleryTrack.addEventListener(

"touchend",

(e)=>{

endX=e.changedTouches[0].clientX;



if(startX-endX>50){

galleryIndex++;

}



if(endX-startX>50){

galleryIndex--;

}



if(galleryIndex<0){

galleryIndex=galleryImages.length-1;

}



if(galleryIndex>=galleryImages.length){

galleryIndex=0;

}



updateGallery();


});


}



/*========================================
        SWIPE TELEFONO
========================================*/

let touchStartX=0;
let touchEndX=0;


if(startButton){

    startButton.addEventListener("click",()=>{


        setTimeout(()=>{

            if (typeof enterFullscreen === "function") enterFullscreen();

        },1000);


    });

}

if (slides && images.length > 0) {
    slides.addEventListener("touchend",(e)=>{

    touchEndX=e.changedTouches[0].screenX;

    handleSwipe();

    });
}


function handleSwipe(){

if(touchEndX<touchStartX-50){

currentSlide++;

}

if(touchEndX>touchStartX+50){

currentSlide--;

}

if(currentSlide<0){

currentSlide=images.length-1;

}

if(currentSlide>=images.length){

currentSlide=0;

}

if (typeof updateSlider === "function") updateSlider();

}


/*========================================
        EFFETTO TITOLO
========================================*/

const title=document.querySelector("#home h1");

if (title) {
    setInterval(()=>{

    title.style.transform="scale(1.05)";

    setTimeout(()=>{

    title.style.transform="scale(1)";

    },400);

    },2000);
}


/*========================================
        PRELOAD FOTO
========================================*/

if (images) {
    images.forEach(img=>{

    const image=new Image();

    image.src=img.src;

    });
}


/*========================================
        SCROLL
========================================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.style.opacity=1;

section.style.transform="translateY(0)";

}

});

});


/*========================================
        MUSICA
========================================*/

document.addEventListener("visibilitychange",()=>{

if (music) {
    if(document.hidden){

    music.pause();

    }else{

    music.play();

    }
}

});

/*========================================
            QUIZ SU DI ME ❤️
========================================*/


const questions = [

{
question:"Quanto sono alto? 📏",

answers:[
"1.65 m",
"1.73 m",
"1.80 m",
"1.90 m"
],

correct:2

},


{
question:"Qual è il mio gioco preferito? 🎮",

answers:[
"Fortnite",
"Project Zomboid",
"Minecraft",
"GTA"
],

correct:1

},


{
question:"Qual è la mia canzone preferita? 🎵",

answers:[
"Hotel California",
"Gabri - Vasco Rossi",
"City of Stars",
"Bohemian Rhapsody"
],

correct:1

},


{
question:"Qual è la canzone preferita di Eva? 🎶",

answers:[
"Gabri",
"Hotel California",
"City of Stars",
"Viva La Vida"
],

correct:1

},


{
question:"Quando ci siamo messi insieme? ❤️",

answers:[
"14 febbraio 2026",
"16 maggio 2026",
"26 maggio 2026",
"1 giugno 2026"
],

correct:1

},


{
question:"Perché ho scelto proprio Eva? 💕",

answers:[
"Perché sei speciale e mi fai stare bene",
"Perché sei bellissima",
"Perché con te posso essere me stesso",
"Tutte le precedenti ❤️"
],

correct:3

},


{
question:"Cosa ho voluto creare per Eva? ✨",

answers:[
"Un semplice messaggio",
"Un sito pieno di ricordi, foto e sorprese",
"Un gioco qualsiasi",
"Niente"
],

correct:1

}

];



let currentQuestion = 0;

let score = 0;



const questionText = document.getElementById("question");

const answersBox = document.getElementById("answers");

const scoreText = document.getElementById("score");

const progress = document.getElementById("progress");





function loadQuestion(){


if(!questionText || !answersBox){

console.log("Quiz HTML non trovato");

return;

}



let q = questions[currentQuestion];



questionText.innerHTML = q.question;



answersBox.innerHTML = "";


if (progress) {
    progress.style.width =

    ((currentQuestion) / questions.length) * 100 + "%";
}




q.answers.forEach((answer,index)=>{


let button=document.createElement("button");


button.className="answer";


button.innerHTML=answer;



button.onclick=function(){


checkAnswer(index);


};



answersBox.appendChild(button);


});


}






function checkAnswer(selected){


let buttons=document.querySelectorAll(".answer");


buttons.forEach(button=>{

button.disabled=true;

});




if(selected === questions[currentQuestion].correct){


score++;


buttons[selected].style.background="#32ff7e";


createQuizHeart();


}

else{


buttons[selected].style.background="#ff4757";


buttons[questions[currentQuestion].correct]

.style.background="#32ff7e";


}




setTimeout(()=>{


currentQuestion++;



if(currentQuestion < questions.length){


loadQuestion();


}

else{


endQuiz();


}


},1000);



}







function endQuiz(){


questionText.innerHTML=

"Quiz completato Eva ❤️";



answersBox.innerHTML="";


if (progress) progress.style.width="100%";


if (scoreText) {
    scoreText.innerHTML =

    `Hai totalizzato ${score}/${questions.length} punti ❤️`;
}


if(score===questions.length){


createLoveExplosion();


}


}








function createQuizHeart(){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.className="quizHeart";


heart.style.left=

Math.random()*window.innerWidth+"px";


heart.style.top="60%";


document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},2000);


}








function createLoveExplosion(){


for(let i=0;i<30;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.className="quizExplosion";


heart.style.left="50%";


heart.style.top="50%";



heart.style.setProperty(

"--x",

(Math.random()*400-200)+"px"

);



heart.style.setProperty(

"--y",

(Math.random()*400-200)+"px"

);



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},2000);


}


}





loadQuestion();




/*========================================
        ESPLOSIONE AMORE BIS (Rimosso duplicato problematico)
========================================*/


/*========================================
        PARTE 3
    MAGIA DEL CIELO ❤️
========================================*/


/*========================================
        CUORI DAL CIELO
========================================*/

function createFallingHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="";

document.body.appendChild(heart);

heart.style.left=

Math.random()*100+"vw";

heart.style.animationDuration=

(3+Math.random()*5)+"s";

heart.style.opacity=

Math.random();

let size=

10+Math.random()*25;

heart.style.width=size+"px";

heart.style.height=size+"px";

setTimeout(()=>{

heart.remove();

},8000);

}


// crea cuori ogni intervallo

setInterval(()=>{

createFallingHeart();

},1200);


/*========================================
        PARTICELLE AL TOCCO
========================================*/

document.addEventListener(

"touchmove",

function(e){

let touch=e.touches[0];

createParticle(

touch.clientX,

touch.clientY

);

}

);


document.addEventListener(

"mousemove",

function(e){

createParticle(

e.clientX,

e.clientY

);

}

);


function createParticle(x,y){

const particle=document.createElement("div");

particle.className="particle";

document.body.appendChild(particle);

particle.style.left=x+"px";

particle.style.top=y+"px";

let color=[

"#ff5ca8",

"#ffffff",

"#ffd700",

"#b983ff"

];

particle.style.background=

color[Math.floor(Math.random()*color.length)];

setTimeout(()=>{

particle.remove();

},2000);

}


/*========================================
        STELLE CADENTI
========================================*/

function createShootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

document.body.appendChild(star);

star.style.top=

Math.random()*50+"vh";

star.style.left=

Math.random()*80+"vw";

setTimeout(()=>{

star.remove();

},2000);

}


setInterval(()=>{

createShootingStar();

},7000);


/*========================================
        PETALI ROMANTICI
========================================*/

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

document.body.appendChild(petal);

petal.style.left=

Math.random()*100+"vw";

petal.style.animationDuration=

(5+Math.random()*5)+"s";

petal.style.opacity=

Math.random();

setTimeout(()=>{

petal.remove();

},10000);

}


setInterval(()=>{

createPetal();

},2500);


/*========================================
        LUNA INTERATTIVA 🌙
========================================*/

const moon=document.querySelector(".moon");

let moonClicks=0;

if (moon) {
    moon.addEventListener("click",()=>{

    moonClicks++;

    moon.style.transform=

    "scale(1.3)";

    setTimeout(()=>{

    moon.style.transform=

    "scale(1)";

    },500);

    if(moonClicks===5){

    showSecretMessage();

    moonClicks=0;

    }

    });
}


function showSecretMessage(){

const box=document.createElement("div");

box.innerHTML=

`
<div class="secretMessage">

🌙✨<br>
"Ogni storia d'amore ha il suo cielo." <br><br>
Per Eva ❤️
</div>
`;

document.body.appendChild(box);

setTimeout(()=>{

box.remove();

},5000);

}


/*========================================
        CUORE AL CLICK
========================================*/

document.addEventListener(

"click",

function(e){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="30px";

heart.style.pointerEvents="none";

heart.style.animation=

"clickHeart 1.5s forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1500);

}

);


/*========================================
        PARTE 4
    ACCHIAPPA I CUORI ❤️
========================================*/

const startGameButton = document.getElementById("startGame");

const gameArea = document.getElementById("gameArea");

const gameScore = document.getElementById("gameScore");

const gameTime = document.getElementById("gameTime");

const gameResult = document.getElementById("gameResult");


let scoreGame = 0;

let timeGame = 30;

let gameRunning = false;

let heartInterval;

let timerGame;


/*========================================
        AVVIA GIOCO
========================================*/

if (startGameButton) {
    startGameButton.addEventListener("click",()=>{

    if(gameRunning)return;

    gameRunning=true;

    scoreGame=0;

    timeGame=30;

    if (gameScore) gameScore.innerHTML=scoreGame;

    if (gameTime) gameTime.innerHTML=timeGame;

    if (gameResult) gameResult.innerHTML="";

    startGameButton.innerHTML="Gioca! ❤️";

    heartInterval=setInterval(createGameHeart,700);

    timerGame=setInterval(()=>{

    timeGame--;

    if (gameTime) gameTime.innerHTML=timeGame;

    if(timeGame<=0){

    endGame();

    }

    },1000);

    });
}


/*========================================
        CREA CUORE
========================================*/

function createGameHeart(){

if(!gameRunning || !gameArea)return;

const heart=document.createElement("div");

heart.className="gameHeart";

heart.innerHTML="❤️";

gameArea.appendChild(heart);

let x=Math.random()*90;

let y=Math.random()*80;

heart.style.left=x+"%";

heart.style.top=y+"%";

let size=

30+Math.random()*30;

heart.style.fontSize=size+"px";

heart.addEventListener("click",()=>{

catchHeart(heart);

});

heart.addEventListener("touchstart",()=>{

catchHeart(heart);

});

setTimeout(()=>{

if(heart && heart.parentNode){

heart.remove();

}

},2000);

}


/*========================================
        PRENDI CUORE
========================================*/

function catchHeart(heart){

scoreGame++;

if (gameScore) gameScore.innerHTML=scoreGame;

heart.style.transform="scale(2)";

heart.style.opacity="0";

createParticle(

heart.offsetLeft,

heart.offsetTop

);

setTimeout(()=>{

if (heart && heart.parentNode) heart.remove();

},300);

}


/*========================================
        FINE GIOCO
========================================*/

function endGame(){

gameRunning=false;

clearInterval(heartInterval);

clearInterval(timerGame);

if (gameArea) gameArea.innerHTML="";

if (gameResult) {
    if(scoreGame>=25){

    gameResult.innerHTML=

    `
     🎆 INCREDIBILE ❤️ <br><br>
    Eva ha un cuore velocissimo! <br>
    Sei ufficialmente la fidanzata perfetta 💕
    `;

    createLoveExplosion();

    }

    else if(scoreGame>=10){

    gameResult.innerHTML=

    `
    ❤️ Brava Eva! <br><br>
    Hai catturato ${scoreGame} cuori
    `;

    }

    else{

    gameResult.innerHTML=

    `
     💗 Ritenta! <br>
    I cuori erano troppo veloci
    `;

    }
}

}


/*========================================
        PARTE 5 EASTER EGGS ❤️
========================================*/


/*========================================
        SCRIVI "EVA"
========================================*/

let typed="";

document.addEventListener("keydown",(e)=>{

typed += e.key.toLowerCase();

if(typed.length > 3){

typed = typed.slice(-3);

}

if(typed==="eva"){

heartRain();

typed="";

}

});


function heartRain(){

for(let i=0;i<50;i++){

setTimeout(()=>{

let heart=document.createElement("div");

heart.className="heart";

document.body.appendChild(heart);

heart.style.left=

Math.random()*100+"vw";

heart.style.animationDuration=

(2+Math.random()*4)+"s";

setTimeout(()=>{

heart.remove();

},6000);

},i*50);

}

}


/*========================================
        16 CLIC ❤️
========================================*/

let clickCounter=0;

document.addEventListener("click",(e)=>{

clickCounter++;

if(clickCounter===16){

showSecret(

"16 Maggio 2026 ❤️<br><br>" +
"Il giorno in cui è iniziato il nostro film."

);

clickCounter=0;

}

});


/*========================================
        MESSAGGIO SEGRETO
========================================*/

function showSecret(text){

const secret=document.createElement("div");

secret.className="secretMessage";

secret.innerHTML=text;

document.body.appendChild(secret);

setTimeout(()=>{

secret.remove();

},6000);

}


/*========================================
        KONAMI CODE ========================================*/ 
let konami=[]; 
const code=[ "arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a" ]; 
document.addEventListener("keydown",(e)=>{ 
konami.push(e.key.toLowerCase()); 
if(konami.length>code.length){ konami.shift(); } 
if( JSON.stringify(konami) === JSON.stringify(code) ){ konamiSecret(); konami=[]; } 
}); 
function konamiSecret(){ 
showSecret( ` 🌙✨ <br><br> Hai trovato il livello segreto. <br><br> Eva è la protagonista del mio film preferito ❤️ ` ); 
createLoveExplosion(); 
} 

/*======================================== INATTIVITÀ ========================================*/ 
let inactiveTimer; 
function resetInactive(){ 
clearTimeout(inactiveTimer); 
inactiveTimer=setTimeout(()=>{ 
showSecret( ` 💭 <br><br> "Anche quando non fai niente, <br> sei il mio pensiero preferito." <br><br> ❤️ ` ); 
},30000);
}
document.addEventListener("mousemove", resetInactive);
document.addEventListener("touchstart", resetInactive);
resetInactive();








/*========================================
        CLICK LUNA SPECIALE
========================================*/


const secretMoon=document.querySelector(".moon");


let moonCounter=0;



if(secretMoon){


secretMoon.addEventListener("click",()=>{


moonCounter++;



if(moonCounter===3){



showSecret(

`

🌙

<br><br>

"La notte appartiene

<br>

a chi continua a sognare."

<br><br>

✨

`

);



moonCounter=0;


}


});


}

/*========================================
            PARTE 6
       FINALE CINEMATOGRAFICO 🎆
========================================*/

const fireworksButton = document.getElementById("fireworks");

if(fireworksButton){
    fireworksButton.addEventListener("click",()=>{
        startFireworks();
        finalMessage();
    });
}


/*========================================
        FUOCHI ARTIFICIO
========================================*/

function startFireworks(){
    let duration=8000;
    let end=Date.now()+duration;
    let colors=[
        "#ff5ca8",
        "#ffd700",
        "#ffffff",
        "#8c7bff",
        "#00ffff",
        "#ff3b81"
    ];

    (function frame(){
        createFirework(
            Math.random()*window.innerWidth,
            Math.random()*window.innerHeight/2,
            colors[Math.floor(Math.random()*colors.length)]
        );

        if(Date.now()<end){
            requestAnimationFrame(frame);
        }
    })();
}

function createFirework(x,y,color){
    let particles=60;

    for(let i=0;i<particles;i++){
        let particle=document.createElement("div");
        particle.className="fireworkParticle";
        document.body.appendChild(particle);

        particle.style.left=x+"px";
        particle.style.top=y+"px";
        particle.style.background=color;

        let angle=Math.random()*Math.PI*2;
        let velocity=Math.random()*200+50;

        let moveX=Math.cos(angle)*velocity;
        let moveY=Math.sin(angle)*velocity;

        particle.style.setProperty("--x", moveX+"px");
        particle.style.setProperty("--y", moveY+"px");

        setTimeout(()=>{
            particle.remove();
        },1500);
    }
}


/*========================================
        CUORE DI FUOCHI
========================================*/

function heartFirework(){
    let centerX=window.innerWidth/2;
    let centerY=window.innerHeight/3;

    for(let i=0;i<100;i++){
        let angle=Math.PI*2*i/100;
        let x=16*Math.pow(Math.sin(angle),3);
        let y=-(
            13*Math.cos(angle)
            -5*Math.cos(2*angle)
            -2*Math.cos(3*angle)
            -Math.cos(4*angle)
        );

        let particle=document.createElement("div");
        particle.className="fireworkParticle";
        document.body.appendChild(particle);

        particle.style.left=centerX+"px";
        particle.style.top=centerY+"px";
        particle.style.background="#ff5ca8";

        particle.style.setProperty("--x", x*15+"px");
        particle.style.setProperty("--y", y*15+"px");

        setTimeout(()=>{
            particle.remove();
        },2000);
    }
}


/*========================================
        MESSAGGIO FINALE
========================================*/

function finalMessage(){
    setTimeout(()=>{
        heartFirework();
    },2000);

    setTimeout(()=>{
        let final=document.createElement("div");
        final.className="finalScreen";
        final.innerHTML=
        `
        <h1>Eva ❤️</h1>
        <p>
        Il mio film preferito non ha una fine...
        <br><br>
        Perché il mio film preferito non è quello che guardo,
        ma quello che sto vivendo con te.
        <br><br>
        16 Maggio 2026 ✨
        </p>
        `;
        document.body.appendChild(final);
    },4000);

    setTimeout(()=>{
        finalScreenRemove();
    },12000);
}

function finalScreenRemove(){
    const screen=document.querySelector(".finalScreen");
    if(screen){
        screen.remove();
    }
}


/*========================================
            PARTE 7
        MOBILE EXPERIENCE ❤️
========================================*/

/*========================================
        CONTROLLO MUSICA 🎵
========================================*/

const musicButton=document.getElementById("musicControl");
let musicPlaying=false;

if(musicButton){
    musicButton.addEventListener("click",()=>{
        // Controlla lo stato reale della traccia anziché affidarsi solo alla variabile
        if(music && !music.paused){
            music.pause();
            musicButton.innerHTML="🔇";
            musicPlaying=false;
        }
        else{
            if(music) music.play();
            musicButton.innerHTML="🎵";
            musicPlaying=true;
        }
        vibratePhone();
    });
}


/*========================================
        VIBRAZIONE TELEFONO
========================================*/

function vibratePhone(){
    if(navigator.vibrate){
        navigator.vibrate(100);
    }
}


/*========================================
        SCHERMO INTERO
========================================*/

function enterFullscreen(){
    if(document.documentElement.requestFullscreen){
        document.documentElement.requestFullscreen();
    }
}


/*========================================
        SALVA QUIZ
========================================*/

function saveQuizScore(){
    localStorage.setItem("evaQuizScore", score);
}

function loadQuizScore(){
    let saved=localStorage.getItem("evaQuizScore");
    if(saved){
        console.log("Ultimo punteggio Eva:", saved);
    }
}

loadQuizScore();


/*========================================
        ANIMAZIONI SCROLL
========================================*/

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
}, { threshold:.2 });

document.querySelectorAll("section").forEach(section=>{
    observer.observe(section);
});


/*========================================
        RICONOSCIMENTO DISPOSITIVO
========================================*/

const isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if(isMobile){
    document.body.classList.add("mobile");
}
else{
    document.body.classList.add("desktop");
}


/*========================================
        RIDUZIONE ANIMAZIONI
========================================*/

const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");

if(reduceMotion.matches){
    document.body.classList.add("reduce-motion");
}


/*========================================
        TAP EFFECT
========================================*/

document.addEventListener("touchstart", (e)=>{
    let touch=e.touches[0];
    let ripple=document.createElement("div");
    ripple.className="touchRipple";
    document.body.appendChild(ripple);

    ripple.style.left=touch.clientX+"px";
    ripple.style.top=touch.clientY+"px";

    setTimeout(()=>{
        ripple.remove();
    },800);
});


/*========================================
        MESSAGGIO APERTURA
========================================*/

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        console.log("❤️ Benvenuta nel film di Eva");
    },1000);
});