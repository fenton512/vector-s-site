class ElementBehavior {
    static startAnimation(object, nameOfClass) {
        object.classList.add(nameOfClass);
    }

    static goTo(destination) {
        document.location = destination;
        
    }

    static hideShowElem(element) {
        element.removeAttribute("display");
        element.classList.toggle("hide");
    }

    static changeText(element, text) {
        element.textContent = text;
    }
}