const ramos = [
  { nombre: "Matemáticas", creditos: 3, requisitos: [], semestre: 1 },
  { nombre: "Química", creditos: 6, requisitos: [], semestre: 1 },
  { nombre: "Anatomía I", creditos: 6, requisitos: [], semestre: 1 },
  { nombre: "Introducción a la profesión médica", creditos: 6, requisitos: [], semestre: 1 },
  { nombre: "Medicina y sociedad", creditos: 4, requisitos: [], semestre: 1 },
  { nombre: "Formación general I", creditos: 2, requisitos: [], semestre: 1 },
  { nombre: "Inglés I", creditos: 3, requisitos: [], semestre: 1 },
  { nombre: "Física", creditos: 5, requisitos: [], semestre: 2 },
  { nombre: "Biología celular y molecular", creditos: 6, requisitos: [], semestre: 2 },
  { nombre: "Anatomía II", creditos: 4, requisitos: ["Anatomía I"], semestre: 2 },
  { nombre: "Histología y embriología", creditos: 6, requisitos: [], semestre: 2 },
  { nombre: "Medicina, persona y sociedad", creditos: 4, requisitos: ["Medicina y sociedad"], semestre: 2 },
  { nombre: "Introducción a la salud pública", creditos: 2, requisitos: ["Introducción a la profesión médica"], semestre: 2 },
  { nombre: "Inglés II", creditos: 3, requisitos: [], semestre: 2 }
];

const contenedor = document.getElementById("contenedor-malla");
const tooltip = document.getElementById("tooltip");

function construirMalla() {
  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>Semestre ${i}</h2>`;
    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = `${ramo.nombre}\n(${ramo.creditos} cr.)`;
      div.dataset.nombre = ramo.nombre;
      div.onclick = () => seleccionarRamo(ramo.nombre);
      div.onmouseenter = e => mostrarTooltip(e, ramo);
      div.onmouseleave = () => tooltip.style.display = "none";
      columna.appendChild(div);
    });
    contenedor.appendChild(columna);
  }
}

function seleccionarRamo(nombre) {
  document.querySelectorAll(".ramo").forEach(d => {
    d.classList.remove("seleccionado", "dependiente");
  });

  const seleccionados = new Set();
  seleccionados.add(nombre);

  ramos.forEach(r => {
    if (r.requisitos.includes(nombre)) {
      seleccionados.add(r.nombre);
    }
  });

  document.querySelectorAll(".ramo").forEach(div => {
    const n = div.dataset.nombre;
    if (n === nombre) div.classList.add("seleccionado");
    else if (seleccionados.has(n)) div.classList.add("dependiente");
  });
}

function mostrarTooltip(e, ramo) {
  tooltip.innerHTML = `<strong>${ramo.nombre}</strong><br>Créditos: ${ramo.creditos}<br>Requisitos: ${ramo.requisitos.length ? ramo.requisitos.join(", ") : "Ninguno"}`;
  tooltip.style.left = e.pageX + 10 + "px";
  tooltip.style.top = e.pageY + 10 + "px";
  tooltip.style.display = "block";
}

construirMalla();
