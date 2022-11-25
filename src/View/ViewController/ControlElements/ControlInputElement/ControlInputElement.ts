import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import $ from "jquery"

class ControlInputElement {
    private readonly className: string
    private readonly containerName: string
    private readonly title: string
    private readonly id?: string

    constructor(className: string,
                containerName: string,
                title: string,
                id?: string) {
        this.className = className
        this.containerName = containerName
        this.title = title
        this.id = id
    }

    getControlElement(id?: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)

        controlElement.innerHTML =
                            `<div class= "${this.className} input-control__title">
                                <span>${this.title}:
                            </div>
                            <div class= "${this.className} input-control__element">
                                <div id="${id}" class="${this.className} input-control__value-minus">
                                    remove
                                </div>
                                <input id="${id}" class="${this.className} control-input__value"/>
                                <div id="${id}" class="${this.className} input-control__value-plus">
                                    add
                                </div>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }
}

export default ControlInputElement