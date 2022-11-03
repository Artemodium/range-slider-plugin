const $ = require('jquery');
import {onThumbPosChange} from "../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";
import modelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";

class ThumbPositionControllerContent {
    private readonly selector: string
    private readonly topElement: string
    private readonly element: string
    private readonly bottomElement: string
    private readonly controlElement: string
    private readonly id: string

    constructor(selector: string, topElement: string, element: string, bottomElement: string, controlElement: string, id: string) {
        this.selector = selector
        this.topElement = topElement
        this.element = element
        this.bottomElement = bottomElement
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
        $(`#${this.id}.${this.topElement}`).text(ModelSliderStore.getThumbScalePosition(this.id))
        $(`#${this.id}.${this.bottomElement}`).text(ModelSliderStore.getThumbScalePosition(this.id))
        $('.view__scale-track')
            .attr("style", ModelSliderStore.getThumbStylePosition('min'))
            .css({width: ModelSliderStore.getThumbsDifference()+12})
        if(ModelSliderStore.getThumbPosition('min')<30) {
            $(".view__min-container").attr("style", "opacity: 0")
        }
        if(ModelSliderStore.getThumbPosition('min')>30) {
            $(".view__min-container").attr("style", "opacity: 1")
        }
        if(ModelSliderStore.getThumbPosition('max')>ModelSliderStore.getSliderScaleSize()-70) {
            $(".view__max-container").attr("style", "opacity: 0")
        }
        if(ModelSliderStore.getThumbPosition('max')<ModelSliderStore.getSliderScaleSize()-70) {
            $(".view__max-container").attr("style", "opacity: 1")
        }
    };

    observeThumbPosition = () => {
        let observer = new MutationObserver(this.getThumbPositionValue)
        $(this.controlElement).each((thumb: number) => {
            observer.observe($(this.controlElement)[thumb], {attributes: true})})
    };
}

export default ThumbPositionControllerContent