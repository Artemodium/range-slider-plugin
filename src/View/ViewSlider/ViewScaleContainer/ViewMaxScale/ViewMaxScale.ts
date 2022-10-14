const $ = require('jquery');

class ViewMaxScale {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewMaxScale(): JQuery {
        return $('<input>', {
            class: 'view__scale', type:"range", min:"0", max:"100", value:"50", id:"slider-2"
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewMaxScale