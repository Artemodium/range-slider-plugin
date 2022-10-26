import $ from "jquery";

class ScalePositionControllerContainer {
    private readonly selector: string;
    private readonly element: string;

    constructor(selector: string, element: string) {
        this.selector = selector;
        this.element = element;
    }

    getScalePositionControllerContainer(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${this.selector}`);
    }
}

export default ScalePositionControllerContainer