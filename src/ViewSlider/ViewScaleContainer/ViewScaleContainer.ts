const $ = require('jquery');

class ViewScaleContainer {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewScaleContainer(): JQuery {
        return $('<div>', {
            class: 'view__scale-container'
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewScaleContainer