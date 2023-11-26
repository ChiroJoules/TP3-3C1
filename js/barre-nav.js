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