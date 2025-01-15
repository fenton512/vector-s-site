let AccountPage = {
    BUTTON_YES: document.querySelector("#choice-button-yes"),
    BUTTON_NO: document.querySelector("#choice-button-no"),
    QUESTION_PARAGRAPH: document.querySelector("#question-paragraph"),
    REGISTRATION_FORM: document.querySelector("#registration-form"),
    BUTTON_CHOICE_OVER_TWO: document.querySelector("#no-yes-buttons"),
    REG_INPUT: document.querySelectorAll("form[id=registration-form] input"),
    REG_LABEL: document.querySelectorAll("form[id=registration-form] label"),
    LOGIN_FORM: document.querySelector("#login-form"),
    LOGIN_LABEL: document.querySelectorAll("form[id=login-form] label"),
    LOGIN_INPUT: document.querySelectorAll("form[id=login-form] input"),
    SEND_BUTTON: document.querySelector("input[type=submit]"),

    hideQuestionPanel: function(openSomeForm) {
        ElementBehavior.startAnimation(document.querySelector(".question-box"), "animation-for-quastion-box");
        setTimeout(() => {
            this.BUTTON_CHOICE_OVER_TWO.classList.remove("button-choice-over-two");
            ElementBehavior.hideShowElem(this.BUTTON_CHOICE_OVER_TWO);
            openSomeForm();
        }, 300)
    },
    
    
    openRegForm: function() {
        ElementBehavior.changeText(this.QUESTION_PARAGRAPH, "Регистрация на vector's site");
        this.SEND_BUTTON.setAttribute("value", "отправить");
        this.REGISTRATION_FORM.classList.add("form-visiable");
        ElementBehavior.hideShowElem(document.querySelector(".registration-box"));
        for (let i = 0; i < this.REG_INPUT.length; i++) {
            ElementBehavior.startAnimation(this.REG_INPUT[i], "animation-for-input");
            this.REG_LABEL[i].style.animationName = "label-animation-r";
            ElementBehavior.startAnimation(this.REG_LABEL[i], "animation-for-label");
        }
    },   
    
    
    openLogForm: function() {
        ElementBehavior.hideShowElem(this.REGISTRATION_FORM);
        this.SEND_BUTTON.setAttribute("value", "войти");
        ElementBehavior.changeText(this.QUESTION_PARAGRAPH, "Вход в аккаунт");
        this.LOGIN_FORM.classList.add("form-visiable");
        ElementBehavior.hideShowElem(document.querySelector(".registration-box"));
        for (let i = 0; i < this.LOGIN_INPUT.length; i++) {
            ElementBehavior.startAnimation(this.LOGIN_LABEL[i], "animation-for-label");
            this.LOGIN_LABEL[i].style.animationName = "label-animation-l";
            ElementBehavior.startAnimation(this.LOGIN_INPUT[i], "animation-for-input");
        }

    }
}