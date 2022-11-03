const $ = require('jquery')

class ViewScaleBackLine {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewScaleBackLine(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`)
    }
}

export default ViewScaleBackLine