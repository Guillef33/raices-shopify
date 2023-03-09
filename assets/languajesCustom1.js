  const esLang = JSON.parse(localStorage.getItem('es'));
  const engLang = JSON.parse(localStorage.getItem('eng'));

  if (engLang == true) {
    console.log('Esta seleccionado el idioma ingles')
  } else if (esLang == true)  {
    console.log('Esta seleccionado el idioma ingles')
  } else {
        console.log('Esta seleccionado el idioma frances')

  }
  console.log(esLang); 

  let primerLiFrances = document.querySelector('.header__menu-item span');

console.log(primerLiFrances.textContent);
console.log(primerLiFrances == "ÚNETE A LA MISIÓN")

  let contenidoLi = primerLiFrances.textContent;
  console.log(contenidoLi);

contenidoLi.addEventListener('change', (event) => {
    console.log('Algo ha cambiado');
});
