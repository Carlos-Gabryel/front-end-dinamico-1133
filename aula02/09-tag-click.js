// document.body.addEventListener("click", function (event) {
//   console.log("event", event);
//   console.log("event.target", event.target);
//   console.log("event.currentTarget", event.currentTarget);
// });

const btTop = document.getElementById("go-to-top");

btTop.addEventListener("click", function (event) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// btTop.addEventListener("click", onClickBtTop.bind(this, "teste"));

// function onClickBtTop(param, event) {
//   console.log("param:", param);
//   console.log("event:", event);
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

const btLight = document.getElementById("btLight");
const btDark = document.getElementById("btDark");

btLight.addEventListener("click", onClickBtLight);
btDark.addEventListener("click", onClickBtDark);

function onClickBtLight() {
  document.body.style.color = "#000000";
  document.body.style.backgroundColor = "#FFFFFF";
}

function onClickBtDark() {
  document.body.style.color = "#FFFFFF";
  document.body.style.backgroundColor = "#000000";
}

const estilos = window.getComputedStyle(document.body);

console.log("estilos", estilos.backgroundColor);
