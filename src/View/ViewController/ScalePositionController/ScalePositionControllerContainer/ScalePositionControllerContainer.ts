import $ from "jquery"

class ScalePositionControllerContainer {
    private readonly selector: string
    private readonly element: string
    private readonly title :string

    constructor(selector: string, element: string, title: string) {
        this.selector = selector
        this.element = element
        this.title = title
    }
    /*const container = document.createElement("div")
    container.setAttribute("class", `${this.element}`)
    container.innerHTML = `<div class="${this.element}__title">${this.title}</div>`*/

    getScalePositionControllerContainer(): JQuery {
        const container = document.createElement("div")
        container.setAttribute("class", `${this.element}`)
        container.innerHTML = `<div class="${this.element}__title">${this.title}</div>`
        return $(container).appendTo(`${this.selector}`)
    }
}

export default ScalePositionControllerContainer