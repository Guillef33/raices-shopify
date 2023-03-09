const esLang = sessionStorage.getItem('es');
const engLang = sessionStorage.getItem('en');
const frLang = sessionStorage.getItem('fr');

const currentLang = sessionStorage.getItem('lang');


if (sessionStorage.getItem('lang') == 'en') { 
    span2.textContent = "Free shipping on purchases over 60 euros";
} else if (sessionStorage.getItem('lang') == 'fr') {
    span2.textContent = "Livraison gratuite à partir de 60 euros";
} 



  let primerLiFrances = document.querySelector('.header__menu-item span');

console.log(primerLiFrances.textContent);
console.log(primerLiFrances == "ÚNETE A LA MISIÓN")

  let contenidoLi = primerLiFrances.textContent;
  console.log(contenidoLi);

contenidoLi.addEventListener('change', (event) => {
    console.log('Algo ha cambiado');
});
