class ElementBehavior {
    static startAnimation(object, nameOfClass) {
        object.classList.add(nameOfClass);
    }

    static goTo(destination) {
        document.location = destination;
        
    }

    static hideShowElem(element) {
        element.classList.toggle("hide");
    }

    static changeText(element, text) {
        element.textContent = text;
    }
}