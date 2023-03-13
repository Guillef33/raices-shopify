//const currentLang = sessionStorage.getItem('lang');
let language_test;
if(!localStorage.getItem("lang_test")){
  language_test = window.navigator.userLanguage || window.navigator.language;
  if(language_test.length > 2){
    language_test = language_test.split("-");
  }
  localStorage.setItem("lang_test",language_test);
}else{
  language_test = localStorage.getItem("lang_test");
}

let seccion_popup = document.querySelector("#ageAppBlockid");
if(language_test == "fr"){
  seccion_popup.querySelector("#heading").textContent = "Vous devez avoir l'âge légal pour visiter cette page.";
  seccion_popup.querySelector(".sub_heading").textContent = "Êtes-vous majeur?";
  seccion_popup.querySelector(".agree_btn").textContent = "OUI";
  seccion_popup.querySelector(".disagree_btn").textContent = "NON";
}
else if(language_test == "es"){
  seccion_popup.querySelector("#heading").textContent = "Para visitar esta pagina debes ser mayor de edad.";
  seccion_popup.querySelector(".sub_heading").textContent = "¿Eres mayor de edad?";
  seccion_popup.querySelector(".agree_btn").textContent = "SI";
  seccion_popup.querySelector(".disagree_btn").textContent = "NO";
}
  //Si es cualquier otro lenguaje o "en", entonces lo pone en ingles globalmente.
else{
  seccion_popup.querySelector("#heading").textContent = "You must be of legal age to visit this page.";
  seccion_popup.querySelector(".sub_heading").textContent = "Are you of legal age?";
  seccion_popup.querySelector(".agree_btn").textContent = "YES";
  seccion_popup.querySelector(".disagree_btn").textContent = "NO";
}

/*if (sessionStorage.getItem('lang') == 'en') { 
    span2.textContent = "Free shipping on purchases over 60 euros";
} else if (sessionStorage.getItem('lang') == 'fr') {
    span2.textContent = "Livraison gratuite à partir de 60 euros";
}*/ 

let lang = {
  es:[
"Envio gratuito a compras mayores a 60 euros",
"ESPAÑA ES EL PAÍS CON MAYOR RIQUEZA DE TERROIRS PARA LA ELABORACIÓN DE VINO. TIENES LA OPORTUNIDAD DE CONOCERLOS",
]
  ,
  fr:["Livraison gratuite à partir de 60 euros d'achat",
  "L'ESPAGNE EST LE PAYS AVEC LA PLUS GRANDE RICHESSE DE TERROIRS POUR LA VINIFICATION. VOUS AVEZ L'OPPORTUNITÉ DE LES RENCONTRER",
    ]
  ,
  en:["Free shipping on purchases over 60 euros",
    "SPAIN IS THE COUNTRY WITH THE RICHEST TERROIRS FOR THE ELABORATION OF WINE. YOU HAVE THE OPPORTUNITY TO MEET THEM",
]
}

let array_elements = [".wrapper-span-footer-envios span","#shopify-section-template--15827540770954__16643886947b868dc7 .flip-title"];

if(sessionStorage.getItem('lang')) traducir();


let selector_lang = document.querySelectorAll(".li_hover.li_container");
selector_lang.forEach((sel)=>{
  sel.addEventListener("click",traducir(sel));
})

function traducir(element = null){
  let lenguaje;
  if(element == null) lenguaje = sessionStorage.getItem("lang");
  if(element != null) lenguaje = element.querySelector("span").textContent.toLowerCase();

  array_elements.forEach((elem,k)=>{
    document.querySelector(elem).textContent = lang[lenguaje][k]
  });
}