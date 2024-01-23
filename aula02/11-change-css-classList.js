const btLight = document.getElementById("btLight");
const btDark = document.getElementById("btDark");

btLight.addEventListener("click", onClickBtLight);
btDark.addEventListener("click", onClickBtDark);

function onClickBtLight() {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
}

function onClickBtDark(e) {
  e.target.classList.toggle("destaque");

  document.body.classList.remove("light");
  document.body.classList.add("dark");
}

btDark.addEventListener("click", updateTheme.bind(this, "btLight"));

function updateTheme(param) {
  if (param === "btLight") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}
