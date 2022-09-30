const $ = require('jquery');

class ViewThumbValue {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewThumbValue(): JQuery {
        return $('<span>', {
            class: 'view__thumb-value'
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewThumbValue