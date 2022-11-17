const $ = require('jquery');

class ViewController {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewController(): JQuery {
        return $('<div>', {
            class: 'view__controller-container',
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewController