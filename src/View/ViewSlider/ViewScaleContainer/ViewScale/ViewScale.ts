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
            class: this.element, type:"range", min:"0", max:"100", value:"30", id:"slider-1"
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewScale