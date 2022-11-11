const $ = require('jquery');

class ViewScale {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewScale(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewScale