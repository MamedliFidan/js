let next = document.querySelector(".next");
let back = document.querySelector(".back");
let img = document.querySelector("div img");

let list = [
  "https://i.pinimg.com/1200x/26/73/38/267338dab242a897c07f0ab8e3815f0b.jpg",
  "https://i.pinimg.com/1200x/f9/d5/12/f9d51231950d9f037b86948f21b7dc69.jpg",
  "https://i.pinimg.com/1200x/15/b2/cb/15b2cb4544ef38e73c02b3aff2b23508.jpg",
  "https://i.pinimg.com/1200x/ac/98/33/ac9833eb194f46c1c81fd71405c21ec0.jpg"
];

let i = 0;
img.src = list[i]; // первая картинка

next.addEventListener("click", () => {
  i++;
  if (i >= list.length) {
    i = 0;
  }
  img.src = list[i];
});
back.addEventListener("click", () => {
  i--;
  if (i <0) {
    i = list.length-1;
  }
  img.src = list[i];
});