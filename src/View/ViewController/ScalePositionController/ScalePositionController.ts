import $ from "jquery";

class ScalePositionController {
    private readonly selector: string;
    private readonly element: string;

    constructor(selector: string, element: string) {
        this.selector = selector;
        this.element = element;
    }

    getScalePositionController(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${this.selector}`);
    }
}

export default ScalePositionController