const $ = require('jquery');

class ViewThumbsContainer {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string, ) {
        this.selector = selector
        this.element = element
    }

    getViewThumbsContainer(): JQuery {
        return $('<div>', {
           class: `${this.element}`
        }).appendTo(`${this.selector}`)
    }
}

export default ViewThumbsContainer