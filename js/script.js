document.addEventListener("DOMContentLoaded", () => {
    const adBanner = document.getElementById("ad-banner");

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomPosition() {
        const minX = window.innerWidth / 2;
        const maxX = window.innerWidth - 100;
        const minY = window.innerHeight / 34;
        const maxY = window.innerHeight - 100;

        return {
            x: getRandomInt(minX, maxX),
            y: getRandomInt(minY, maxY)
        };
    }

    function moveBanner() {
        const position = getRandomPosition();
        adBanner.style.left = `${position.x}px`;
        adBanner.style.top = `${position.y}px`;
    }

    adBanner.addEventListener("click", moveBanner);
    adBanner.addEventListener("touchstart", moveBanner);
});
