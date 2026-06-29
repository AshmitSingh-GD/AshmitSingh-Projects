const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");

// sidebar elements //
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

const videoList = [video1, video2, video3].filter(Boolean);

videoList.forEach((video) => {
  video.pause();
  video.currentTime = 0;
});

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    videoList.forEach(function (otherVideo) {
      if (otherVideo !== video) {
        otherVideo.pause();
        otherVideo.currentTime = 0;
      }
    });
    video.play();
  });

  video.addEventListener("mouseout", function () {
    video.pause();
    video.currentTime = 0;
  });
});

// sidebar elements //
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});
