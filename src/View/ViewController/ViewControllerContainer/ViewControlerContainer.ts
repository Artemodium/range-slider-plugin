const $ = require('jquery');

class ViewControllerContainer {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewControllerContainer(): JQuery {
        return $('<div>', {
            class: 'view__controller-container'
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewControllerContainer