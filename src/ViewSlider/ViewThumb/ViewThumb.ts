const $ = require('jquery');

class ViewThumb {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewThumb(): JQuery {
        return $('<div>', {
            class: 'view__thumb'
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewThumb