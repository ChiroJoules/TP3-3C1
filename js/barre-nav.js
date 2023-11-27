/* Declaration de variables */
let leCheckBoxNav = document.querySelector("#cc-nav");
let leBody = document.querySelector("body");

/* Ajouter un evenement a le checkbox */
leCheckBoxNav.addEventListener("click", arreterleScroll);

/* fonction pour arreter le scroll */
function arreterleScroll(event){
    if(leCheckBoxNav.checked == true){
        leBody.style.overflow = "hidden";
    }else{
        leBody.style.overflow = "scroll";
    }
}


let conteneurScroll = document.querySelector(".conteneurMatchs");

let btnAvant = document.getElementById("flecheAvant");

let btnFront = document.getElementById("flecheFront");

btnAvant.addEventListener("click", ()=>{
    conteneurScroll.style.scrollBehavior = "smooth"
    conteneurScroll.scrollLeft -= 200;
})

btnFront.addEventListener("click", ()=>{
    conteneurScroll.style.scrollBehavior = "smooth"
    conteneurScroll.scrollLeft += 200;
})