let photos = document.querySelectorAll(".photo");
let activeImg = null;

photos.forEach(photo => {
  let img = photo.querySelector("img");
  img.style.width = "200px";
  img.style.height = "200px";

  photo.addEventListener("click", () => {
      if (activeImg) {
        activeImg.style.width = "100%";
        activeImg.style.height = "100%";
    }
    img.style.width = "300px";
      img.style.height = "300px";

    activeImg = img;
  });
});