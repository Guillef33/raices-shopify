const footerDiv = document.querySelectorAll('.footer-block__details-content');
const wrapperSpan = document.createElement('div')
const spang = document.createElement('span')
const span2 = document.createElement('span')
const icon = 'https://cdn.shopify.com/s/files/1/0604/5702/5674/files/icons8-in-transit-50.png?v=1669740169';

const img = document.createElement('img')
img.src = icon;
// spang.appendChild(img);
span2.textContent = "Envio gratuito a compras mayores a 60 euros";
wrapperSpan.classList.add('wrapper-span-footer-envios')

wrapperSpan.appendChild(img)
wrapperSpan.appendChild(span2)
footerDiv[2].appendChild(wrapperSpan)



