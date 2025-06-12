function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle(light);

    // pegar a tag img
    const img = document.querySelector("#profile img");

    // substituir a img
    if(html.contains("light")) {
        // se estiver light vai add a img light
        img.setAttribute("src", "./assets/images/avatar-light.jpg");
    } else {
        // se n tiver light, vai dark
        img.setAttribute("src", "./assets/images/avatar-dark.jpg")
    }
}