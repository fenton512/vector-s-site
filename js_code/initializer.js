class Initializer {
    static aboutProjectButton = document.querySelector("#about-project-button");
    static blogButton = document.querySelector("#blog-button");
    static accauntButton = document.querySelector("#account-button");
    static choiceButtonYes = this.isNeededPage(Linker.account)? document.querySelector("#choice-button-yes") : null;
    static choiceButtonNo = this.isNeededPage(Linker.account)? document.querySelector("#choice-button-no") : null;

    static initializeButtons() {
        this.aboutProjectButton.addEventListener("click", function() {Linker.setOnclick(Linker.aboutProject)});
        this.accauntButton.addEventListener("click", function() {Linker.setOnclick(Linker.account)});
        if (this.choiceButtonYes != null) {
            this.choiceButtonNo.addEventListener("click", function() {
                Animator.startAnimation(document.querySelector(".quastion-box"), "animation-for-quastion-box");
                document.querySelector(".flex-box").setAttribute("style", "align-items: flex-end");
            });
        }
    }

    static isNeededPage(location) {
        if (document.location == location) {
            return true;
        } else {
            false;
        }
    }
    
}