import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import $ from "jquery"

class ControlInputElement {
    private readonly className: string
    private readonly containerName: string
    private readonly title: string
    private readonly plusClassName: string
    private readonly minusClassName: string
    private readonly id?: string
    private readonly elementInputValue?: string
    private readonly modificator?: string
    private readonly inputElementClass: string

    constructor(className: string,
                containerName: string,
                title: string,
                plusClassName: string,
                minusClassName: string,
                id?: string,
                elementInputValue?: string,
                modificator?: string,
                inputElementClass?: string,) {
        this.className = className
        this.containerName = containerName
        this.title = title
        this.plusClassName = plusClassName
        this.minusClassName = minusClassName
        this.id = id
        this.elementInputValue = elementInputValue
        this.modificator = modificator
        this.inputElementClass = inputElementClass
    }

    getControlElementChangeable(id?: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)
        controlElement.innerHTML =
                            `<div class= "${this.inputElementClass}-title">
                                <span>${this.title}:
                            </div>
                            <div class= "${this.inputElementClass} ${this.inputElementClass}${this.modificator}">
                                <div id="${id}" class="${this.minusClassName}">
                                    remove
                                </div>
                                <input id="${id}" class="${this.elementInputValue} ${this.elementInputValue}${this.modificator}"/>
                                <div id="${id}" class="${this.plusClassName}">
                                    add
                                </div>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }
    getControlElementSelectable(id?: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)

        controlElement.innerHTML =
            `<div class= "${this.className} input-control__title">
                                <span>${this.title}:
                            </div>
                            <div class= "${this.className} input-control__element_selectable">
                                <input id="${id}" class="${this.className} control-input-selectable" type="color"/>
                                <div id="${id}" class="${this.className} input-control-selectable__value-check">
                                    check
                                </div>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }

    getControlElementDisplayed(id?: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)

        controlElement.innerHTML =
            `<div class= "${this.className}-title">
                                <span>${this.title}:
                            </div>
                            <div id="${id}" class= "${this.inputElementClass} ${this.inputElementClass}${this.modificator}">
                                <input id="${id}" class="${this.elementInputValue} ${this.elementInputValue}${this.modificator}"/>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }
    getControlElementColorable(id?: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)

        controlElement.innerHTML =
            `<div class= "${this.inputElementClass}-title">
                                <span>${this.title}:
                            </div>
                            <div class= "${this.inputElementClass} ${this.inputElementClass}${this.modificator}">
                                <div id="${id}" class="${this.inputElementClass}-container ${this.inputElementClass}${this.modificator}-container">
                                    <input id="${id}" class="${this.inputElementClass}-color ${this.inputElementClass}${this.modificator}-color" type="color" value="#ff00ff">
                                </div>
                                <input id="${id}" class="${this.inputElementClass}-text ${this.inputElementClass}${this.modificator}-text" type="text" />
                                <div id="${id}" class="${this.plusClassName}">
                                    check
                                </div>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }
}

export default ControlInputElement