const $ = require('jquery');
import {onThumbPosChange} from "../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";
import modelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";

class ThumbPositionControllerContent {
    private readonly selector: string
    private readonly element: string
    private readonly controlElement: string
    private readonly id: string

    constructor(selector: string, element: string, controlElement: string, id: string) {
        this.selector = selector
        this.element = element
        this.controlElement = controlElement
        this.id = id
    }

    getThumbPositionControllerContent(): JQuery {
        let input: JQuery[] = [
            $('<span>', {id: this.id, class: 'input-minus', text:"-"}),
            $('<input>',{id: this.id, class: this.element, value:  modelSliderStore.getThumbPosition(this.id)}),
            $('<span>', {id: this.id, class: 'input-plus', text:"+"})
        ]
        input.forEach((el:JQuery)=> {
            el.appendTo(($(`#${this.id}.${this.selector}`)))})
        return
    }

    getThumbPositionValue = (): void => {
        let val = $("#" + this.id + this.controlElement)[0].offsetLeft
        modelSliderStore.dispatch(onThumbPosChange(this.id, val))
        $(`#${this.id}.${this.element}`).attr("value", ModelSliderStore.getThumbScalePosition(this.id))
    };

    observeThumbPosition = () => {
        let observer = new MutationObserver(this.getThumbPositionValue)
        $(this.controlElement).each((thumb: number) => {
            observer.observe($(this.controlElement)[thumb], {attributes: true})})
    };
}

export default ThumbPositionControllerContent