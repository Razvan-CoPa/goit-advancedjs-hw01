import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#home").innerHTML = `
    
  `;

  // Attach event listener to the button with id "gallBt"
  const galleryButton = document.getElementById("gallBt");
  galleryButton.addEventListener("click", () => {
    window.location.href = "1-gallery.html";
  });

  // Attach event listener to the button with id "gallBt"
  const formButton = document.getElementById("formBt");
  formButton.addEventListener("click", () => {
    window.location.href = "2-form.html";
  });
});



// document.addEventListener("DOMContentLoaded", () => {
//   const galleryHalf = document.getElementById("galleryHalf");
//   const formHalf = document.getElementById("formHalf");

//   galleryHalf.addEventListener("click", () => {
//     window.location.href = "1-gallery.html";
//   });

//   formHalf.addEventListener("click", () => {
//     window.location.href = "2-form.html";
//   });
// });