import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore";

const $ = require('jquery');

class ViewValueMin {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewValueMin(): JQuery {
        return $('<div>', {
           class: `${this.element}`, text: ModelSliderStore.getSliderScaleRange().start
        }).appendTo(`${this.selector}`)
    }
}

export default ViewValueMin