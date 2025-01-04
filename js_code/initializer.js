class Initializer {
    static aboutProjectButton = document.querySelector("#about-project-button");
    static blogButton = document.querySelector("#blog-button");
    static accauntButton = document.querySelector("#account-button");

    static initializeElements() {
        this.aboutProjectButton.addEventListener("click", function() {ElementBehavior.goTo(Linker.aboutProject)});
        this.accauntButton.addEventListener("click", function() {ElementBehavior.goTo(Linker.account)});

        // switch (document.location) {
        //     case Linker.account:
        //         console.log(123);
        //         AccountPage.buttonNo.addEventListener("click", () => {AccountPage.openRegForm});
        //         break;
        // }

        if (document.location == Linker.account) {
            AccountPage.buttonNo.addEventListener("click", () => {AccountPage.openRegForm()});
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