import ViewValueMin from "./ViewValueMin/ViewValuesMin";
import ViewValueMax from "./ViewValueMax/ViewValuesMax";

const $ = require('jquery');

class ViewValuesMaxMin {
    private readonly selector: string
    private readonly container: string
    private readonly minElement: string
    private readonly maxElement: string

    constructor(selector: string, container: string, minElement?: string, maxElement?: string) {
        this.selector = selector
        this.container = container
        this.minElement = minElement
        this.maxElement = maxElement
    }

    getViewValuesMaxMin(): JQuery {
        return $('<div>', {
                class: `${this.container}`
        }).appendTo(`${this.selector}`)
    }
}

export default ViewValuesMaxMin