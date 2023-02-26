
const firstChild = document.querySelectorAll('.flip-card:first-child');
const allFlipCards = document.querySelectorAll('.flip-card');
//  un elemento
// document.querySelector('.flip-card:first-child') ?? null

// array de elementos
// document.querySelectorAll('.flip-card:first-child').length > 0

// Aca deberiamos limitar que esta funcion solo cargue en la pagina en cuestion
document.addEventListener('scroll', (e) => {
   if (firstChild.length > 0) {
     if (window.scrollY > 400) {
        firstChild[0].classList.add("flip-card-show")
     }
    
    
      setTimeout(function(){
      firstChild[0].classList.remove("flip-card-show")
    }, 2000);
   }
})


// if (window.location.href == "https://raicesibericas.com/?code=en") {
//   console.log('Hola estoy aca en ingles');
// }

