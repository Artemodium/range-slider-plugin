const $ = require('jquery');

class ThumbPositionControllerContainer {
    private readonly selector: string
    private readonly element: string
    private readonly id: string

    constructor(selector: string, element: string, id: string) {
        this.selector = selector
        this.element = element
        this.id = id
    }

    getThumbPositionControllerContainer(): JQuery {
        return $('<div>', {
            class: this.element,
            id: this.id})
       .appendTo(`${this.selector}`)
    }
}

export default ThumbPositionControllerContainer