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
        if(ModelSliderStore.getThumbScalePosition(this.id)/ModelSliderStore.getSliderScaleRange().end * 100 < 20) {
            $('.view__min-container').css('opacity', `${(ModelSliderStore.getThumbScalePosition(this.id) / 100)}`)
        }
        if(ModelSliderStore.getThumbScalePosition(this.id)/ModelSliderStore.getSliderScaleRange().end * 100 > 80) {
            $('.view__max-container').css('opacity', `${1 - ModelSliderStore.getThumbScalePosition(this.id)/ModelSliderStore.getSliderScaleRange().end}`)
            console.log(1 - ModelSliderStore.getThumbScalePosition(this.id)/ModelSliderStore.getSliderScaleRange().end)
        }
    };

    observeThumbPosition = () => {
        let observer = new MutationObserver(this.getThumbPositionValue)
        $(this.controlElement).each((thumb: number) => {
            observer.observe($(this.controlElement)[thumb], {attributes: true})})
    };
}

export default ThumbPositionControllerContent