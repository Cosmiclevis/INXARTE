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
  "../Imagess/filmes/001.jpg",
  "../Imagess/filmes/002.jpg",
  "../Imagess/filmes/003.jpg",
  "../Imagess/filmes/004.jpg",
  "../Imagess/filmes/005.jpg",
  "../Imagess/filmes/006.jpg",
  "../Imagess/filmes/007.jpg",
  "../Imagess/filmes/008.jpg",
  "../Imagess/filmes/009.jpg",
  "../Imagess/filmes/010.jpg",
  "../Imagess/filmes/011.jpg",
  "../Imagess/filmes/012.jpg",
  "../Imagess/filmes/013.jpg",
  "../Imagess/filmes/014.jpg",
  "../Imagess/filmes/015.jpg",
  "../Imagess/filmes/016.jpg",
  "../Imagess/filmes/017.jpg",
  "../Imagess/filmes/018.jpg",
  "../Imagess/filmes/019.jpg",
  "../Imagess/filmes/020.jpg",
  "../Imagess/filmes/021.jpg",
  "../Imagess/filmes/022.jpg",
  "../Imagess/filmes/023.jpg",
  "../Imagess/filmes/024.jpg",
  "../Imagess/filmes/025.jpg",
  "../Imagess/filmes/026.jpg",
  "../Imagess/filmes/027.jpg",
  "../Imagess/filmes/028.jpg",
  "../Imagess/filmes/029.jpg",
  "../Imagess/filmes/030.jpg",
  "../Imagess/filmes/031.jpg",
  "../Imagess/filmes/032.jpg",
  "../Imagess/filmes/033.jpg",
  "../Imagess/filmes/034.jpg",
  "../Imagess/filmes/035.jpg",
  "../Imagess/filmes/036.jpg",
  "../Imagess/filmes/037.jpg",
  "../Imagess/filmes/038.jpg",
  "../Imagess/filmes/039.jpg",
  "../Imagess/filmes/040.jpg",
  "../Imagess/filmes/041.jpg",
  "../Imagess/filmes/042.jpg",
  "../Imagess/filmes/043.jpg",
  "../Imagess/filmes/044.jpg",
  "../Imagess/filmes/045.jpg",
  "../Imagess/filmes/046.jpg",
  "../Imagess/filmes/047.jpg",
  "../Imagess/filmes/048.jpg",
  "../Imagess/filmes/049.jpg",
  "../Imagess/filmes/050.jpg",
  "../Imagess/filmes/051.jpg",
  "../Imagess/filmes/052.jpg",
  "../Imagess/filmes/053.jpg",
  "../Imagess/filmes/054.jpg",
  "../Imagess/filmes/055.jpg",
  "../Imagess/filmes/056.jpg",
  "../Imagess/filmes/057.jpg",
  "../Imagess/filmes/058.jpg",
  "../Imagess/filmes/059.jpg",
  "../Imagess/filmes/060.jpg",
  "../Imagess/filmes/061.jpg",
  "../Imagess/filmes/062.jpg",
  "../Imagess/filmes/063.jpg",
  "../Imagess/filmes/064.jpg",
  "../Imagess/filmes/065.jpg",
  "../Imagess/filmes/066.jpg",
  "../Imagess/filmes/067.jpg",
  "../Imagess/filmes/068.jpg",
  "../Imagess/filmes/069.jpg",
  "../Imagess/filmes/070.jpg",
  "../Imagess/filmes/071.jpg",
  "../Imagess/filmes/072.jpg",
  "../Imagess/filmes/073.jpg",
  "../Imagess/filmes/074.jpg",
  "../Imagess/filmes/075.jpg",
  "../Imagess/filmes/076.jpg",
  "../Imagess/filmes/077.jpg",
  "../Imagess/filmes/078.jpg",
  "../Imagess/filmes/079.jpg",
  "../Imagess/filmes/080.jpg",
  "../Imagess/filmes/081.jpg",
  "../Imagess/filmes/082.jpg",
  "../Imagess/filmes/083.jpg",
  "../Imagess/filmes/084.jpg",
  "../Imagess/filmes/085.jpg",
  "../Imagess/filmes/086.jpg",
  "../Imagess/filmes/087.jpg",
  "../Imagess/filmes/088.jpg",
  "../Imagess/filmes/089.jpg",
  "../Imagess/filmes/090.jpg",
  "../Imagess/filmes/091.jpg",
  "../Imagess/filmes/092.jpg",
  "../Imagess/filmes/093.jpg",
  "../Imagess/filmes/094.jpg",
  "../Imagess/filmes/095.jpg",
  "../Imagess/filmes/096.jpg",
  "../Imagess/filmes/097.jpg",
  "../Imagess/filmes/098.jpg",
  "../Imagess/filmes/099.jpg",
  "../Imagess/filmes/100.jpg",
  "../Imagess/filmes/101.jpg",
  "../Imagess/filmes/102.jpg",
  "../Imagess/filmes/103.jpg",
  "../Imagess/filmes/104.jpg",
  "../Imagess/filmes/105.jpg",
  // Videos
  "../Imagess/filmes/106.mp4",
  "../Imagess/filmes/107.mp4",
  "../Imagess/filmes/108.mp4",
  "../Imagess/filmes/109.mp4",
  "../Imagess/filmes/110.mp4",
  "../Imagess/filmes/111.mp4",
  "../Imagess/filmes/112.mp4",
  "../Imagess/filmes/113.mp4",
  "../Imagess/filmes/114.mp4",
  "../Imagess/filmes/115.mp4",
  "../Imagess/filmes/115_1.mp4",
  "../Imagess/filmes/116.mp4",
  "../Imagess/filmes/117.mp4",
  "../Imagess/filmes/118.mp4",
  "../Imagess/filmes/119.mp4",
  "../Imagess/filmes/120.mp4",
  "../Imagess/filmes/121.mp4",
  "../Imagess/filmes/122.mp4",
  "../Imagess/filmes/123.mp4",
  "../Imagess/filmes/124.mp4",
  "../Imagess/filmes/125.mp4",
  "../Imagess/filmes/126.mp4",
  "../Imagess/filmes/127.mp4",
  "../Imagess/filmes/128.mp4",
  "../Imagess/filmes/129.mp4",
  "../Imagess/filmes/130.mp4",
  "../Imagess/filmes/131.mp4",
  "../Imagess/filmes/132.mp4",
  "../Imagess/filmes/133.mp4"
];

let currentMediaIndex = 0;

function getMediaElements() {
  return {
    imageViewer: document.getElementById("image-viewer"),
    videoViewer: document.getElementById("video-viewer")
  };
}

function showMedia(index) {
  const { imageViewer, videoViewer } = getMediaElements();
  const src = media[index];
  if (!imageViewer || !videoViewer) return;
  if (src.match(/\.(mp4|webm|ogg)$/i)) {
    imageViewer.style.display = "none";
    videoViewer.style.display = "block";
    videoViewer.src = src;
    videoViewer.load();
    videoViewer.play();
  } else {
    videoViewer.style.display = "none";
    imageViewer.style.display = "block";
    imageViewer.src = src;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  shuffle(media);
  showMedia(currentMediaIndex);
  const { imageViewer, videoViewer } = getMediaElements();
  if (imageViewer) {
    imageViewer.addEventListener("click", () => {
      imageViewer.style.opacity = 0;
      setTimeout(() => {
        currentMediaIndex = (currentMediaIndex + 1) % media.length;
        showMedia(currentMediaIndex);
        imageViewer.style.opacity = 1;
      }, 500);
    });
  }
  if (videoViewer) {
    videoViewer.addEventListener("click", () => {
      videoViewer.style.opacity = 0;
      setTimeout(() => {
        currentMediaIndex = (currentMediaIndex + 1) % media.length;
        showMedia(currentMediaIndex);
        videoViewer.style.opacity = 1;
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

