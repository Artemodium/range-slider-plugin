import ControlElement from "../../ControlElement/ControlElement";

const $ = require('jquery');
import {onThumbPosChange} from "../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";
import modelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";

class ThumbPositionControllerContent {
    private readonly selector: string
    private readonly topElement: string
    private readonly element: string
    private readonly bottomElement: string
    private readonly observableElement: string
    private readonly id: string[]

    constructor(selector: string, topElement: string, element: string, bottomElement: string, observableElement: string, id: string[]) {
        this.selector = selector
        this.topElement = topElement
        this.element = element
        this.bottomElement = bottomElement
        this.observableElement = observableElement
        this.id = id
    }

    addControlElement(): JQuery {
        this.id.forEach(id => {
            new ControlElement("thumb-input-container", id, '.view__thumb-input-container', "thumb value").getControlElement(id)
        })
        return
    }

    getThumbPositionValue = (): void => {
        this.id.forEach(id => {
            let elementClass = new ControlElement("thumb-input-container",
                                                    id,
                                                    '.view__thumb-input-container',
                                                    "thumb value").getControlElementClass()
            let val = $("#" + id + this.observableElement)[0].offsetLeft
            modelSliderStore.dispatch(onThumbPosChange(id, val))
            $(`#${id}.${elementClass}`).attr("value", ModelSliderStore.getThumbScalePosition(id))
            $(`#${id}.${this.topElement}`).text(ModelSliderStore.getThumbScalePosition(id))
            $(`#${id}.${this.bottomElement}`).text(ModelSliderStore.getThumbScalePosition(id))
            $('.view__scale-track')
                .attr("style", ModelSliderStore.getThumbStylePosition('min'))
                .css({width: ModelSliderStore.getThumbsDifference() + 6})
            if (ModelSliderStore.getThumbPosition('min') < 50) {
                $(".view__min-container").attr("style", "opacity: 0")
            }
            if (ModelSliderStore.getThumbPosition('min') > 50) {
                $(".view__min-container").attr("style", "opacity: 1")
            }
            if (ModelSliderStore.getThumbPosition('max') > ModelSliderStore.getSliderScaleSize() - 70) {
                $(".view__max-container").attr("style", "opacity: 0")
            }
            if (ModelSliderStore.getThumbPosition('max') < ModelSliderStore.getSliderScaleSize() - 70) {
                $(".view__max-container").attr("style", "opacity: 1")
            }
        })
    };

    observeThumbPosition = () => {
        let observer = new MutationObserver(this.getThumbPositionValue)
        $(this.observableElement).each((thumb: number) => {
            observer.observe($(this.observableElement)[thumb], {attributes: true})})
    }
}

export default ThumbPositionControllerContent