// Animation sequence for #animation div
document.addEventListener('DOMContentLoaded', function() {
    const totalFrames = 175; // 00000 → 00174
    const fps = 12;
    const interval = 1000 / fps;
    const container = document.getElementById('animation');
    if (!container) return;

    // Create a persistent <img> for animation
    let img = document.createElement('img');
    img.alt = 'frame';
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    container.appendChild(img);

    let current = 0;
    let forward = true;
    let lastTime = performance.now();

    function showFrame(now) {
      if (now - lastTime >= interval) {
        let frameNumber = forward ? current : totalFrames - 1 - current;
        const frameStr = String(frameNumber).padStart(5, '0');
        img.src = `Imagess/sequence_gamboa/Pre-comp 2_${frameStr}.png`;
        img.alt = `frame ${frameStr}`;
        current++;
        if (current >= totalFrames) {
          current = 0;
          forward = !forward;
        }
        lastTime = now;
      }
      requestAnimationFrame(showFrame);
    }
    requestAnimationFrame(showFrame);
});
const copyContent = async (textId) => {
    const textElement = document.getElementById(textId); // Dynamically get the text element
    const text = textElement.innerHTML;
  
    try {
      await navigator.clipboard.writeText(text); // Copy the content
      alert('Content copied to clipboard!'); // Show success message
    } catch (err) {
      alert('Failed to copy: ' + err.message); // Show error message
    }
  };


    // Get the video element
    const logoVideo = document.querySelector('.logo-video');

    // Pause the video on mouse hover
    logoVideo.addEventListener('mouseenter', () => {
        logoVideo.pause();
    });

    // Play the video again when the mouse leaves
    logoVideo.addEventListener('mouseleave', () => {
        logoVideo.play();
    });

    