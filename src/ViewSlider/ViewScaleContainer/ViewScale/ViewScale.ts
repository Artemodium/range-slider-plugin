const $ = require('jquery');

class ViewScale {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewScale(): JQuery {
        return $('<input>', {
            class: 'view__scale', type:"range", min:"0", max:"100", value:"30", id:"slider-1"
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewScale