document.addEventListener("DOMContentLoaded", function() {
    const releasesGrid = document.querySelector(".releases-grid");
    const scrollLeftButton = document.querySelector(".scroll-left");
    const scrollRightButton = document.querySelector(".scroll-right");

    // Scroll settings: distance per click (one image width)
    const imageWidth = document.querySelector(".gallery-image").offsetWidth + 20; // Add gap width

    // Event listener for left scroll button
    scrollLeftButton.addEventListener("click", function() {
        releasesGrid.scrollBy({
            left: -imageWidth,
            behavior: "smooth"
        });
    });

    // Event listener for right scroll button
    scrollRightButton.addEventListener("click", function() {
        releasesGrid.scrollBy({
            left: imageWidth,
            behavior: "smooth"
        });
    });
});
