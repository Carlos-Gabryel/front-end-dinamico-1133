const url = new URL(window.location.href);

url.searchParams.set("name", "John");
function trocarURL() {
  window.location.href = url.href;
}
setTimeout(trocarURL, 5000);

console.log("URL: ", url);
