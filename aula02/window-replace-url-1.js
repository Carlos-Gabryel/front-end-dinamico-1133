let result;

const urlSearchParams = new URLSearchParams(window.location.search);
result = urlSearchParams.get("name1");

urlSearchParams.set("name2", "Joao");

const newURL = `${window.location.origin}${
  window.location.pathname
}?${urlSearchParams.toString()}`;

function trocarURL() {
  window.location.replace(newURL);
}
setTimeout(trocarURL, 5000);

console.log("result", urlSearchParams.get("name2"));
console.log("newURL", newURL);
