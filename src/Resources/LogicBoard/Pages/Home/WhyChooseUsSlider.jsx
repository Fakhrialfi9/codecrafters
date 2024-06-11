export function handleSlideChange(swiper) {
  const allSlides = document.querySelectorAll(".SwiperCardWhyChooseUs");
  allSlides.forEach((slide) => {
    slide.classList.remove("zoom-in", "zoom-out");
  });

  const activeSlide = allSlides[swiper.activeIndex];
  activeSlide.classList.add("zoom-in");

  allSlides.forEach((slide, index) => {
    if (index !== swiper.activeIndex) {
      slide.classList.add("zoom-out");
    }
  });
}

export function onAutoplayTimeLeft(swiper, time, progress, progressCircle, progressContent) {
  progressCircle.current.style.setProperty("--progress", 1 - progress);
  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
}
