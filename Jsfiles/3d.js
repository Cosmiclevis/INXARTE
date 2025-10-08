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

// Unified media array for images and videos
const media = [
  // Images
  "Imagess/3d/001.jpg",
  "Imagess/3d/002.jpg",
  "Imagess/3d/003.jpg",
  "Imagess/3d/004.jpg",
  "Imagess/3d/005.jpg",
  "Imagess/3d/006.jpg",
  "Imagess/3d/007.jpg",
  "Imagess/3d/008.jpg",
  "Imagess/3d/009.jpg",
  "Imagess/3d/010.jpg",
  "Imagess/3d/011.jpg",
  "Imagess/3d/012.jpg",
  "Imagess/3d/013.jpg",
  "Imagess/3d/014.jpg",
  "Imagess/3d/015.jpg",
  "Imagess/3d/016.jpg",
  "Imagess/3d/017.jpg",
  "Imagess/3d/018.jpg",
  "Imagess/3d/019.jpg",
  "Imagess/3d/020.jpg",
  "Imagess/3d/021.jpg",
  "Imagess/3d/022.jpg",
  "Imagess/3d/023.jpg",
  "Imagess/3d/024.jpg",
  "Imagess/3d/025.jpg",
  "Imagess/3d/026.jpg",
  "Imagess/3d/027.jpg",
  "Imagess/3d/028.jpg",
  "Imagess/3d/029.jpg",
  "Imagess/3d/030.jpg",
  "Imagess/3d/031.jpg",
  "Imagess/3d/032.jpg",
  "Imagess/3d/033.jpg",
  "Imagess/3d/034.jpg",
  "Imagess/3d/035.jpg",
  "Imagess/3d/036.jpg",
  "Imagess/3d/037.jpg",
  "Imagess/3d/038.jpg",
  "Imagess/3d/039.jpg",
  "Imagess/3d/040.jpg",
  "Imagess/3d/041.jpg",
  "Imagess/3d/042.jpg",
  "Imagess/3d/043.jpg",
  "Imagess/3d/044.jpg",
  "Imagess/3d/045.jpg",
  "Imagess/3d/046.jpg",
  "Imagess/3d/047.jpg",
  "Imagess/3d/048.jpg",
  "Imagess/3d/049.jpg",
  "Imagess/3d/050.jpg",
  "Imagess/3d/051.jpg",
  "Imagess/3d/052.jpg",
  "Imagess/3d/053.jpg",
  "Imagess/3d/054.jpg",
  "Imagess/3d/055.jpg",
  "Imagess/3d/056.jpg",
  "Imagess/3d/057.jpg",
  "Imagess/3d/058.jpg",
  "Imagess/3d/059.jpg",
  "Imagess/3d/060.jpg",
  "Imagess/3d/061.jpg",
  "Imagess/3d/062.jpg",
  "Imagess/3d/063.jpg",
  "Imagess/3d/064.jpg",
  "Imagess/3d/065.jpg",
  "Imagess/3d/066.jpg",
  "Imagess/3d/067.jpg",
  "Imagess/3d/068.jpg",
  "Imagess/3d/069.jpg",
  "Imagess/3d/070.jpg",
  "Imagess/3d/071.jpg",
  "Imagess/3d/072.jpg",
  "Imagess/3d/073.jpg",
  "Imagess/3d/074.jpg",
  "Imagess/3d/075.jpg",
  "Imagess/3d/076.jpg",
  "Imagess/3d/077.jpg",
  "Imagess/3d/078.jpg",
  "Imagess/3d/079.jpg",
  "Imagess/3d/080.jpg",
  "Imagess/3d/081.jpg",
  // Videos
  "Imagess/3d/082.mp4",
  "Imagess/3d/082_1.mp4",
  "Imagess/3d/082_2.mp4",
  "Imagess/3d/082_3.mp4",
  "Imagess/3d/083.mp4",
  "Imagess/3d/084.mp4"
];

let currentMediaIndex = 0;

function getMediaElements() {
  return {
    mediaViewer: document.getElementById("media-viewer"),
    mediaVideo: document.getElementById("media-video")
  };
}

function showMedia(index) {
  const { mediaViewer, mediaVideo } = getMediaElements();
  const src = media[index];
  if (!mediaViewer || !mediaVideo) return;
  if (src.match(/\.(mp4|webm|ogg)$/i)) {
    mediaViewer.style.display = "none";
    mediaVideo.style.display = "block";
    mediaVideo.src = src;
    mediaVideo.load();
    mediaVideo.play();
  } else {
    mediaVideo.style.display = "none";
    mediaViewer.style.display = "block";
    mediaViewer.src = src;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  shuffle(media);
  showMedia(currentMediaIndex);
  const { mediaViewer, mediaVideo } = getMediaElements();
  if (mediaViewer) {
    mediaViewer.addEventListener("click", () => {
      mediaViewer.style.opacity = 0;
      setTimeout(() => {
        currentMediaIndex = (currentMediaIndex + 1) % media.length;
        showMedia(currentMediaIndex);
        mediaViewer.style.opacity = 1;
      }, 500);
    });
  }
  if (mediaVideo) {
    mediaVideo.addEventListener("click", () => {
      mediaVideo.style.opacity = 0;
      setTimeout(() => {
        currentMediaIndex = (currentMediaIndex + 1) % media.length;
        showMedia(currentMediaIndex);
        mediaVideo.style.opacity = 1;
      }, 500);
    });
  }
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
