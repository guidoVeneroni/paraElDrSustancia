//Carrousel
const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * (-100 / 3);
    grande.style.transform = `translateX(${operacion}%)`;
    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});

let section = document.getElementById("section");
let contenedor = document.querySelector(".container");

//Modal
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.getElementById("btn_jugar");
let modal = document.querySelectorAll(".modalCartas")[0];
let modalContainer = document.querySelectorAll(".contenedor-modal")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  let loading_div;
  let loading;
  let message;

  console.log("empezamo");
  loading_div = document.createElement("div");
  loading_div.setAttribute("id", "div_loading");

  loading = document.createElement("img");
  loading.setAttribute("src", "./images/sharingan-load.gif");
  loading.setAttribute("class", "loading");

  message = document.createElement("p");
  message.innerHTML = "Cargando...";
  message.setAttribute("id", "msj_loading");

  loading_div.appendChild(loading);
  loading_div.appendChild(message);

  section.appendChild(loading_div);
  contenedor.style.display = "none";
  setTimeout(() => {
    loading_div.style.display = "none";

    modalOpen();
  }, 3000);
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  }, 850);
});

window.addEventListener("click", function (e) {
  if (e.target == modalContainer) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 850);
  }
});

// function loader() {
//   setTimeout(() => {
//     let section = document.getElementsByTagName("section");
//     let loading_div;
//     let loading;
//     let message;

//     console.log("empezamo");
//     loading_div = document.createElement("div");
//     loading_div.setAttribute("id", "div_loading");

//     loading = document.createElement("img");
//     loading.setAttribute("src", "./images/loading.gif");
//     loading.setAttribute("class", "loading");

//     message = document.createElement("p");
//     message.innerHTML = "Cargando...";
//     message.setAttribute("id", "msj_loading");

//     loading_div.appendChild(loading);
//     loading_div.appendChild(message);

//     section.appendChild(loading_div);
//   });
// }

function modalOpen() {
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
}
