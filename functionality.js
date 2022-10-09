document.querySelector("#sign_in").addEventListener("click", function () {
  document.querySelector("#paper").style.display = "flex";
  document.querySelector("#paper_effect").style.animation =
    "unfold 1s forwards cubic-bezier(.61,.1,1,.47)";
});
document.querySelector("#log_in").addEventListener("click", function () {
  this.style.animation = "anim 1s forwards";
  setTimeout(() => {
    this.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
    setTimeout(() => {
      document.querySelector("#paper_effect").style.animation =
        "fold 1s forwards cubic-bezier(.12,.31,.4,.78) reverse";
      document
        .querySelector("#paper_effect")
        .addEventListener("animationend", function () {
          document.querySelector("#paper").style.display = "none";
        });
    }, 1800);
  }, 2000);
});
