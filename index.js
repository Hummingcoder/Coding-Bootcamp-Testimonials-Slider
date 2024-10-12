const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const container = document.querySelector(".Testimonials_container");
const slider = document.querySelector(".slider");
const children_len = container.children.length;
let screenW = container.offsetWidth;
let curr = 0;

window.addEventListener("resize", update_container_position);

function update_container_position() {
  screenW = slider.offsetWidth;
  console.log(children_len, screenW);
  update_current_slide();
}

function update_current_slide() {
  container.style.transform = `translateX(-${curr * screenW}px)`;
}

next.forEach((btn) => {
  btn.addEventListener("click", () => {
    curr = (curr + 1) % children_len;
    update_current_slide();
  });
});
prev.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("ly");
    curr = (curr - 1 + children_len) % children_len;
    update_current_slide();
  });
});
