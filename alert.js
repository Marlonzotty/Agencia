document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("overlay").style.display = "flex";
    }, 3000); // Abre o popup automaticamente após 3 segundos

    document.getElementById("close-popup").addEventListener("click", function() {
        document.getElementById("overlay").style.display = "none";
    });
});
