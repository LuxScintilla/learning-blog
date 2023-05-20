let collapse = document.querySelectorAll(".collapsible");
let content = document.querySelector(".content");
let grow = document.querySelectorAll(".grow");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (grow[i].clientHeight) {
      grow[i].style.height = 0;
    } else {
      grow[i].style.height = grow[i].scrollHeight + "px";
    }
  });
}
