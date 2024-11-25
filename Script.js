
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    

    const icon = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    document.getElementById("theme-toggle").textContent = icon;
});