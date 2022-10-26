const $ = require('jquery');

class ViewScaleContainer {
    private readonly selector: string;
    private readonly element: string;

    constructor(selector: string, element: string) {
        this.selector = selector;
        this.element = element;
    }

    getViewScaleContainer(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewScaleContainer