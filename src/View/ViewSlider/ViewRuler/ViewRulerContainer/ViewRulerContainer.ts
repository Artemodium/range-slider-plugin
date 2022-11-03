const $ = require('jquery')

class ViewRulerContainer {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewRulerContainer(): JQuery {

        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`)
    }
}

export default ViewRulerContainer