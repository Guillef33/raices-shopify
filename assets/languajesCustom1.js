const currentLang = sessionStorage.getItem('lang');

traducir();

if (sessionStorage.getItem('lang') == 'en') { 
    span2.textContent = "Free shipping on purchases over 60 euros";
} else if (sessionStorage.getItem('lang') == 'fr') {
    span2.textContent = "Livraison gratuite à partir de 60 euros";
} 

// let lang = {
//   es:["Envio gratuito a compras mayores a 60 euros"]
//   ,
//   fr:["Free shipping on purchases over 60 euros"]
//   ,
//   en:["Free shipping on purchases over 60 euros"]
// }

// let array_elements = [".wrapper-span-footer-envios span", "title-popup", ".footer-block__details-content li"];

// let selector_lang = document.querySelectorAll(".li_hover.li_container");
// selector_lang.forEach((sel)=>{
//   sel.addEventListener("click",traducir(sel));
// })

// function traducir(element = null){
//   let lenguaje;
//   if(element == null) lenguaje = sessionStorage.getItem("lang");
//   if(element != null) lenguaje = element.querySelector("span").textContent.toLowerCase();

//   array_elements.forEach((elem,k)=>{
//     document.querySelector(elem).textContent = lang[lenguaje][k]
//   });
// }