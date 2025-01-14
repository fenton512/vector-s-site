let AccountPage = {
    BUTTON_YES: document.querySelector("#choice-button-yes"),
    BUTTON_NO: document.querySelector("#choice-button-no"),
    QUESTION_PARAGRAPH: document.querySelector("#question-paragraph"),
    REGISTRATION_FORM: document.querySelector("#registration-form"),
    BUTTON_CHOICE_OVER_TWO: document.querySelector("#no-yes-buttons"),

    openRegForm: function() {
        ElementBehavior.startAnimation(document.querySelector(".question-box"), "animation-for-quastion-box");
        setTimeout(() => {
            ElementBehavior.hideShowElem(this.BUTTON_CHOICE_OVER_TWO);
            this.BUTTON_CHOICE_OVER_TWO.classList.remove("button-choice-over-two");
            ElementBehavior.changeText(this.QUESTION_PARAGRAPH, "Регистрация на vector's site")
        }, 300);    
        setTimeout(() => {
            this.REGISTRATION_FORM.classList.add("registration-form-visiable");
            ElementBehavior.hideShowElem(this.REGISTRATION_FORM);
        }, 300)
    }
}