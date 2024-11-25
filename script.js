document.addEventListener("DOMContentLoaded", function () {
    const emojiCursor = document.createElement("div");
    emojiCursor.textContent = "🔱"; // Use your desired emoji
    emojiCursor.style.position = "absolute";
    emojiCursor.style.pointerEvents = "none"; // Prevent blocking clicks
    emojiCursor.style.fontSize = "24px"; // Adjust emoji size
    emojiCursor.style.zIndex = "1000"; // Ensure it's on top of everything

    document.body.appendChild(emojiCursor);

    document.addEventListener("mousemove", function (e) {
        emojiCursor.style.left = `${e.pageX}px`;
        emojiCursor.style.top = `${e.pageY}px`;
    });
});