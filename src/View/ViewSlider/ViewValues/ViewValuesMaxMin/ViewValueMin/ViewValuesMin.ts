import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import modelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import {onThumbPosChange} from "../../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";

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
           class: `${this.element}`,
            text: ModelSliderStore.getSliderScaleRange().start,
            style: ModelSliderStore.getThumbPosition('min')<35 ? "opacity: 0" : "opacity: 1"
        }).appendTo(`${this.selector}`)
    }
}

export default ViewValueMin