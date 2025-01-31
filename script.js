document.getElementById('noButton').addEventListener('mouseover', function() {
    // Get random positions within the viewport
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - this.offsetWidth;
    const maxY = containerRect.height - this.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set new position for the "No" button
    this.style.position = 'absolute';
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert("Yay! I'm so happy! 💕");
});