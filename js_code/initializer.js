class Initializer {
    static ABOUT_PROJECT_BUTTON = document.querySelector("#about-project-button");
    static BLOG_BUTTON = document.querySelector("#blog-button");
    static ACCOUNT_BUTTON = document.querySelector("#account-button");

    static initializeElements() {
        this.ABOUT_PROJECT_BUTTON.addEventListener("click", function() {ElementBehavior.goTo(Linker.ABOUT_PROJECT)});
        this.ACCOUNT_BUTTON.addEventListener("click", function() {ElementBehavior.goTo(Linker.ACCOUNT)});

        switch (document.location.toString()) {
            case Linker.ACCOUNT:
                AccountPage.BUTTON_NO.addEventListener("click", () => {
                    AccountPage.hideQuestionPanel(() => AccountPage.openRegForm());
                    });
                AccountPage.BUTTON_YES.addEventListener("click", () => {
                    AccountPage.hideQuestionPanel(() => AccountPage.openLogForm());
                });
                break;
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