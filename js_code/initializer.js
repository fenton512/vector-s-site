class Initializer {
    static aboutProjectButton = document.querySelector("#about-project-button");
    static blogButton = document.querySelector("#blog-button");

    static initializeButtons() {
        this.aboutProjectButton.onclick = function() {Linker.setOnclick(Linker.aboutProject);}
    }
    
}