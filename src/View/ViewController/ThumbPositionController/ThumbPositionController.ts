import $ from "jquery"

class ThumbPositionController {
    private readonly selector: string
    private readonly element: string
    private readonly title: string

    constructor(selector: string, element: string, title?: string) {
        this.selector = selector
        this.element = element
        this.title = title
    }

    getThumbPositionController(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${this.selector}`)
    }
}

export default ThumbPositionController