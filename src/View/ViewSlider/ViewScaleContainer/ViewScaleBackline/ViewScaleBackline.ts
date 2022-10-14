const $ = require('jquery');

class ViewScaleBackline {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewScaleBackline(): JQuery {
        return $('<div>', {
            class: 'view__scale-backline'
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewScaleBackline