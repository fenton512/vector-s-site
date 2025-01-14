let AccountPage = {
    BUTTON_YES: document.querySelector("#choice-button-yes"),
    BUTTON_NO: document.querySelector("#choice-button-no"),
    QUESTION_PARAGRAPH: document.querySelector("#question-paragraph"),
    REGISTRATION_FORM: document.querySelector("#registration-form"),
    BUTTON_CHOICE_OVER_TWO: document.querySelector("#no-yes-buttons"),
    REG_INPUT: document.querySelectorAll("form input"),
    REG_LABEL: document.querySelectorAll("form label"),

    openRegForm: function() {
        ElementBehavior.startAnimation(document.querySelector(".question-box"), "animation-for-quastion-box");
        setTimeout(() => {
            ElementBehavior.hideShowElem(this.BUTTON_CHOICE_OVER_TWO);
            this.BUTTON_CHOICE_OVER_TWO.classList.remove("button-choice-over-two");
            ElementBehavior.changeText(this.QUESTION_PARAGRAPH, "Регистрация на vector's site");
            this.REGISTRATION_FORM.classList.add("registration-form-visiable");
            ElementBehavior.hideShowElem(document.querySelector(".registration-box"));
            for (let i = 0; i < this.REG_INPUT.length; i++) {
                ElementBehavior.startAnimation(this.REG_INPUT[i], "animation-for-input");
                ElementBehavior.startAnimation(this.REG_LABEL[i], "animation-for-label");
            }
        }, 300);    
        // setTimeout(() => {
        // }, 300)
    }
}