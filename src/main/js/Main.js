document.addEventListener("DOMContentLoaded", function () {
    const introPage = document.getElementById("introPage");
    const magnifier = document.getElementById("magnifier");
    const heroContent = document.getElementById("heroContent");

    if (!introPage || !magnifier || !heroContent) {
        return;
    }

    function moveIntroElements(event) {
        const rect = introPage.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        magnifier.style.left = `${x}px`;
        magnifier.style.top = `${y}px`;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / centerX;
        const moveY = (y - centerY) / centerY;

        heroContent.style.transform = `
            translate(${moveX * 22}px, ${moveY * 18}px)
            rotate(${moveX * 2.5}deg) 
        `;
    }

    function resetIntroElements() {
        heroContent.style.transform = "translate(0, 0) rotate(0deg)";
    }

    function enterHome() {
        window.location.href = "src/main/res/layout/HomeActivity.html";
    }

    introPage.addEventListener("mousemove", moveIntroElements);
    introPage.addEventListener("mouseleave", resetIntroElements);

    document.addEventListener("click", enterHome);
    document.addEventListener("keydown", enterHome);
});