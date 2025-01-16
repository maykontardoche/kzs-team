
document.getElementById("toggleTeam").addEventListener("click", function () {
    const extraTeam = document.getElementById("extraTeam");
    const button = this;

    if (extraTeam.classList.contains("collapse")) {
        extraTeam.classList.remove("collapse");
        button.textContent = "Mostrar Menos";
    } else {
        extraTeam.classList.add("collapse");
        button.textContent = "Mostrar Mais";
    }
});

