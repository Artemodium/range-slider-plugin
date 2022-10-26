import $ from "jquery";

class ThumbPositionController {
    private readonly selector: string;
    private readonly element: string;

    constructor(selector: string, element: string) {
        this.selector = selector;
        this.element = element;
    }

    getThumbPositionController(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${this.selector}`);
    }
}

export default ThumbPositionController