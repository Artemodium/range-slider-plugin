import ControlInputThumbs from "../../ControlElements/ControlLogic/ControlInputThumbs/ControlInputThumbs";
const $ = require('jquery');
import {onThumbPosChange} from "../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";
import modelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import ControlInputElement from "../../ControlElements/ControlInputElement/ControlInputElement";

class ThumbPositionControllerContent {
    private readonly selector: string
    private readonly topElement: string
    private readonly element: string
    private readonly bottomElement: string
    private readonly id: string[]
    private readonly observableElement: string
    private readonly controlInputElementContainer: string
    private readonly thumbInputValue: string

    constructor(selector: string,
                topElement: string,
                element: string,
                bottomElement: string,
                id: string[],
                observableElement: string,
                controlInputElementContainer: string,
                thumbInputValue: string) {
        this.selector = selector
        this.topElement = topElement
        this.element = element
        this.bottomElement = bottomElement
        this.id = id
        this.observableElement = observableElement
        this.controlInputElementContainer = controlInputElementContainer
        this.thumbInputValue = thumbInputValue
    }


    getThumbPositionValue = (): void => {
        this.id.forEach(id => {
            let val = $("#" + id + this.observableElement)[0].offsetLeft
            modelSliderStore.dispatch(onThumbPosChange(id, val))
            $(`#${id}.${this.thumbInputValue}`).attr("value", ModelSliderStore.getThumbScalePosition(id))
            $(`#${id}.${this.topElement}`).text(ModelSliderStore.getThumbScalePosition(id))
            $(`#${id}.${this.bottomElement}`).text(ModelSliderStore.getThumbScalePosition(id))
            $(`#${id}.thumb-input-value`).val(`${ModelSliderStore.getThumbScalePosition(id)}`)
            $('.view__scale-track')
                .attr("style", `left: ${ModelSliderStore.getThumbPosition('min') + 5 }px`)
                .css({width: ModelSliderStore.getThumbsDifference() - 3 })
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