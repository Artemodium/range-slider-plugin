const $ = require('jquery');

class ThumbPositionControllerContainer {
    private readonly selector: string
    private readonly element: string
    private readonly title: string

    constructor(selector: string, element: string, title: string) {
        this.selector = selector
        this.element = element
        this.title = title
    }

    getThumbPositionControllerContainer(): JQuery {
        const container = document.createElement("div")
        container.setAttribute("class", `${this.element}`)
        container.innerHTML = `<div class="${this.element}__title">${this.title}</div>`
        return $(container).appendTo(`${this.selector}`)
    }
}

export default ThumbPositionControllerContainer