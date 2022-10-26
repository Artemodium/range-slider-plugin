import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
const $ = require('jquery');

class ViewValueMax {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewValueMax(): JQuery {
        return $('<div>', {
            class: `${this.element}`, text: ModelSliderStore.getSliderScaleRange().end
        }).appendTo(`${this.selector}`)
    }
}

export default ViewValueMax