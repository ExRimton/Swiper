let swiper = null;
let isShow = false;
const isShowMore = document.querySelector("#show-more");
const wrapper = document.querySelector(".wrapper");
const swiperSelector = document.querySelector(".swiper");
const list = document.querySelector(".list");

isShowMore.addEventListener("click", (event) => {
  if (isShow) {
    wrapper.style.height = "195px";
    event.target.innerHTML = "Показать все";
  } else {
    wrapper.style.height = "100%";
    event.target.innerHTML = "Скрыть";
  }
  isShow = !isShow;
});

let is

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiperSelector.classList.contains("swiper-initialized")) {
      swiper = new Swiper(".swiper", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2.7,
            spaceBetween: 30,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    }
  } else {
    if (
      swiperSelector.classList.contains("swiper-initialized") &&
      !swiper.destroyed
    ) {
      swiper.destroy();
    }
  }
}

initSwiper();
window.addEventListener("resize", () => {
  initSwiper();
  if (window.innerWidth < 768 && !isShowMore) {
    isShow = false;
    swiperSelector.style.height = "100%";
    isShowMore.target.innerHTML = "Показать все";
  }
});
