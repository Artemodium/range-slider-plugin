import modelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore";

class ControlElement {
    private readonly className: string
    private readonly id: string
    private readonly containerName: string
    private readonly title: string

    constructor(className: string, id?: string, containerName?: string, title?: string) {
        this.className = className
        this.containerName = containerName
        this.title= title
    }

    getControlElement(id: string): JQuery{
        let controlElement = document.createElement("div")
        controlElement.setAttribute("class", this.className)
        controlElement.setAttribute("id", id)
        controlElement.innerHTML =
                            `<div class= "${this.className} input-control__title">
                                <span>${id}:
                            </div>
                            <div class= "${this.className} input-control__element">
                                <div class="${this.className} input-control__value-minus">
                                    <span>remove</span>
                                </div>
                                <input id="${id}" class="${this.className} control-input__value" value="${modelSliderStore.getThumbPosition(id)}"/>
                                <div class="${this.className} input-control__value-plus">
                                    <span>add</span>
                                </div>
                            </div>`

        return $(controlElement).appendTo($(this.containerName))
    }

    getControlElementClass(): string {
        return `${this.className}`
    }
}

export default ControlElement