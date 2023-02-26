const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");
let tooltipMarker = document.getElementById("tooltip-maker");


const ciudades = [
  {
    id: 1,
    varietal: "Malbec",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Catalunya",
  },
  {
    id: 2,
    varietal: "Merlot",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Sevilla",
  },
  {
    id: 3,
    varietal: "Garnacha",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Rioja",
  },
  {
    id: 4,
    varietal: "Cabernet Sauvignon",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Castilla",
  },
  {
    id: 5,
    varietal: "Tannat",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Catalunya",
  },
  {
    id: 6,
    varietal: "Cabernet Franc",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Sevilla",
  },
  {
    id: 3,
    varietal: "Garnacha",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Rioja",
  },
  {
    id: 4,
    varietal: "Cavernet Sauvignon",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique eligendi illo sunt corrupti, recusandae reiciendis omnis. Quia optio similique unde, alias quos est, tempora commodi dolorum, consectetur dolorem aliquid?",
    region: "Castilla",
  },
];

const filtrar = () => {
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();
  // Aca utiliza for of
  for (let ciudad of ciudades) {
    let varietal = ciudad.varietal.toLowerCase();
    // Si no encuentra el texto retorna -1
    if (varietal.indexOf(texto) !== -1) {
      resultado.innerHTML += `
        <li class="lista-varietal" onclick="{showTooltip(this)}"> ${ciudad.varietal} / ${ciudad.region}</li>
        <p class="p-varietal">${ciudad.texto}</p>
        `;
    }
  }

  if (resultado.innerHTML === "") {
    resultado.innerHTML += `
    <li>Producto no encontrado </li>`;
  }
};

// boton.addEventListener("click", filtrar);
formulario.addEventListener("keyup", filtrar);

function showTooltip(element) {
  tooltipMarker.style.display = "block";
}

function hideTooltip(element) {
  tooltipMarker.style.display = "none";
}


filtrar();
