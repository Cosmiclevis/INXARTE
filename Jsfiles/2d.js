// Set news ticker speed based on pixel width for fixed speed
document.addEventListener('DOMContentLoaded', function() {
  const newsContent = document.querySelector('.news-content');
  if (newsContent) {
    // Desired speed: pixels per second
    const speed = 100; // px/sec
    // Get pixel width of text
    const textWidth = newsContent.scrollWidth;
    // Calculate duration
    const duration = textWidth / speed;
    newsContent.style.animationDuration = duration + 's';
  }
});
// Adjust news ticker speed based on text length
document.addEventListener('DOMContentLoaded', function() {
  const newsContent = document.querySelector('.news-content');
  if (newsContent) {
    const baseSpeed = 10; // seconds for reference length
    const referenceLength = 300; // main page text length
    const textLength = newsContent.textContent.length;
    const duration = Math.max(5, baseSpeed * (textLength / referenceLength));
    newsContent.style.animationDuration = duration + 's';
  }
});
const images = [
  "Imagess/2d/Container1/001.jpg",
  "Imagess/2d/Container1/002.jpg",
  "Imagess/2d/Container1/003.jpg",
  "Imagess/2d/Container1/004.jpg",
  "Imagess/2d/Container1/005.jpg",
  "Imagess/2d/Container1/006.jpg",
  "Imagess/2d/Container1/007.jpg",
  "Imagess/2d/Container1/008.jpg",
  "Imagess/2d/Container1/009.jpg",
  "Imagess/2d/Container1/010.jpg",
  "Imagess/2d/Container1/011.jpg",
  "Imagess/2d/Container1/012.jpg",
  "Imagess/2d/Container1/013.jpg",
  "Imagess/2d/Container1/014.jpg",
  "Imagess/2d/Container1/015.jpg",
  "Imagess/2d/Container1/016.jpg",
  "Imagess/2d/Container1/017.jpg",
  "Imagess/2d/Container1/018.jpg",
  "Imagess/2d/Container1/019.jpg",
  "Imagess/2d/Container1/020.jpg",
  "Imagess/2d/Container1/021.jpg",
  "Imagess/2d/Container1/022.jpg",
  "Imagess/2d/Container1/023.jpg",
  "Imagess/2d/Container1/024.jpg",
  "Imagess/2d/Container1/025.jpg",
  "Imagess/2d/Container1/026.jpg",
  "Imagess/2d/Container1/027.jpg",
  "Imagess/2d/Container1/028.jpg",
  "Imagess/2d/Container1/029.jpg",
  "Imagess/2d/Container1/030.jpg",
  "Imagess/2d/Container1/031.jpg",
  "Imagess/2d/Container1/032.jpg"
];

const videos = [
  "Imagess/2d/Container2/001.mp4",
  "Imagess/2d/Container2/001_1.mp4",
  "Imagess/2d/Container2/001_2.mp4",
  "Imagess/2d/Container2/002.mp4",
  "Imagess/2d/Container2/003.mp4",
  "Imagess/2d/Container2/004.mp4",
  "Imagess/2d/Container2/005.mp4"
];
let currentImageIndex = 0;
let currentVideoIndex = 0;

const imageViewer = document.getElementById("image-viewer");
const videoViewer = document.getElementById("video-viewer");

// Initialize viewers
document.addEventListener("DOMContentLoaded", () => {
  imageViewer.src = images[currentImageIndex];
  videoViewer.src = videos[currentVideoIndex];
});

// Handle Image Viewer Click
imageViewer.addEventListener("click", () => {
  imageViewer.style.opacity = 0;

  setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imageViewer.src = images[currentImageIndex];
      imageViewer.style.opacity = 1;
  }, 500);
});

// Handle Video Viewer Click
videoViewer.addEventListener("click", () => {
  videoViewer.style.opacity = 0;

  setTimeout(() => {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      videoViewer.src = videos[currentVideoIndex];
      videoViewer.style.opacity = 1;
  }, 500);
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(images);
shuffle(videos);
