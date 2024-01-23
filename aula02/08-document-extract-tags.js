let result;

result = document.images;
result = document.links;
result = document.scripts;

result = document.getElementsByTagName("img");
const elemHTMLCollection = document.getElementsByTagName("borda");
const arrHTMLCollection = [...elemHTMLCollection];

const elemNodeList = document.querySelectorAll(".borda");

arrHTMLCollection.forEach((elem) => {
  console.log("elem", elem);
});

elemNodeList.forEach((elem) => {
  console.log("elem", elem);
});

console.log("result", result);
