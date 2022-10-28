const $ = require('jquery');

class ViewThumbContainer {
    private readonly selector: string
    private readonly element: string
    private readonly id: string

    constructor(selector: string, element: string, id?: string) {
        this.selector = selector;
        this.element = element
        this.id = id

    }

    getViewThumbContainer(): JQuery {
        return $('<div>', {
            id: this.id, class: `${this.element}`
        }).appendTo(`${this.selector}`)
    }
}

export default ViewThumbContainer