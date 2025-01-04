let AccountPage = {
    buttonYes: document.querySelector("#choice-button-yes"),
    buttonNo: document.querySelector("#choice-button-no"),
    QUESTION_PARAGRAPH: document.querySelector("#question-paragraph"),

    openRegForm: function() {
        ElementBehavior.startAnimation(document.querySelector(".quastion-box"), "animation-for-quastion-box");
        setTimeout(() => ElementBehavior.changeText(this.QUESTION_PARAGRAPH, "Регистрация на vector's site"), 300);
    }
}