
document.addEventListener("DOMContentLoaded", function () {
    // Select the welcome screen and its button
    const splashScreen = document.getElementById("splash-screen");
    const enterButton = document.getElementById("enter-button");

    // Display the current year in the footer
    const yearElement = document.getElementById("year");
    yearElement.textContent = new Date().getFullYear();

    // Close the welcome screen when the button is clicked
    function closeSplashScreen() {
        splashScreen.classList.add("hidden");
    }

    enterButton.addEventListener("click", closeSplashScreen);

    // Automatically close the screen after 5 seconds
    window.setTimeout(closeSplashScreen, 5000);
});
