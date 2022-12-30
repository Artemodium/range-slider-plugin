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
    private readonly options?: string

    constructor(className: string,
                containerName: string,
                title: string,
                plusClassName: string,
                minusClassName: string,
                id?: string,
                elementInputValue?: string,
                modificator?: string,
                options?: string) {
        this.className = className
        this.containerName = containerName
        this.title = title
        this.plusClassName = plusClassName
        this.minusClassName = minusClassName
        this.id = id
        this.elementInputValue = elementInputValue
        this.modificator = modificator
        this.options = options
    }

    inputValueInit(){
        let input = $(`#${this.id}.${this.elementInputValue}${this.modificator}`)
        switch (this.id) {
            case "thumb-width":
                input.attr("value", ModelSliderStore.getThumbWidth())
                break
            case "thumb-height":
                input.attr("value", ModelSliderStore.getThumbHeight())
                break
            case "thumb-border-width":
                input.attr("value", ModelSliderStore.getThumbBorderWidth())
                break
            case "thumb-border-radius":
                input.attr("value", ModelSliderStore.getThumbBorderRadius())
                break
            case "top-thumb-position":
                input.attr("value", ModelSliderStore.getThumbTop())
                break
        }
    }

    getControlElementChangeable(id?: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)
        controlElement.innerHTML =
                            `<div class= "${this.className}-title">
                                <span>${this.title}:
                            </div>
                            <div class= "${this.className}${this.modificator}">
                                <div id="${id}" class="${this.minusClassName}">
                                    remove
                                </div>
                                <input id="${id}" class="${this.elementInputValue} ${this.elementInputValue}${this.modificator}" oninput=""/>
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
        let options = this.options.split(",").map(options => `<option value="${options}">${options}</option>`)
        controlElement.innerHTML =
            `<div class= "${this.className}-title">
                                <span>${this.title}:
                            </div>
                            <div class= "${this.className}${this.modificator}">
                                <select class="${this.elementInputValue} ${this.elementInputValue}${this.modificator}">
                                ${options}
                                </select>
                                <i class="${this.elementInputValue}-checkmark">keyboard_arrow_down</i>
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
                            <div id="${id}" class= "${this.className}${this.modificator}">
                                <input id="${id}" class="${this.elementInputValue} ${this.elementInputValue}${this.modificator}"/>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }
    getControlElementColorable(id?: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)

        controlElement.innerHTML =
            `<div class= "${this.className}-title">
                                <span>${this.title}:
                            </div>
                            <div class= "${this.className}${this.modificator}">
                                <div id="${id}" class="${this.className}-container ${this.className}${this.modificator}-container">
                                    <input id="${id}" class="${this.className}-color ${this.className}${this.modificator}-color" type="color" value="#ff00ff">
                                </div>
                                <input id="${id}" class="${this.className}-text ${this.className}${this.modificator}-text" type="text" />
                                <div id="${id}" class="${this.plusClassName}">
                                    check
                                </div>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }
}

export default ControlInputElement