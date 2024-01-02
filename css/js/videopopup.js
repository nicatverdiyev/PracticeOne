
//Javascript for play & pause video card thumbnails on mouseover/mouseleave
const video_thumbs = document.querySelectorAll(".thumb-video");

video_thumbs.forEach((video_thumb) => {
  video_thumb.addEventListener("mouseover", function () {
    this.style.opacity = 1;
    this.play();
    this.playbackRate = 2.0;
  });
});

video_thumbs.forEach((video_thumb) => {
  video_thumb.addEventListener("mouseleave", function () {
    this.style.opacity = 0;
    this.pause();
  });
});

//Jquery for go through each long title to short it with "..."
$(".video-card-title").each(function () {
  if ($(this).text().length > 50) {
    $(this).html($(this).text().substring(0, 55) + "...");
  }
});

//Javascript for popup video modal screens on click the cards
const video_modalScreens = document.querySelectorAll(
  ".video-modal-screen"
);
const video_cards = document.querySelectorAll(".video-card-body");
const modal_closeBtns = document.querySelectorAll(".vid-modal-close-btn");

var videoModal = function (modalClick) {
  video_modalScreens[modalClick].classList.add("active");
};

video_cards.forEach((video_card, i) => {
  video_card.addEventListener("click", () => {
    videoModal(i);
  });
});

//Javascript for modal close buttons
modal_closeBtns.forEach((modal_closeBtn) => {
  modal_closeBtn.addEventListener("click", () => {
    video_modalScreens.forEach((video_modalScreen) => {
      video_modalScreen.classList.remove("active");
    });
  });
});
