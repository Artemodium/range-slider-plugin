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
    private readonly observableElement: string
    private readonly parameters: {[key:string]: string}[]
    private readonly controlInputElementContainer: string
    private readonly controlViewContainer: string
    private readonly thumbInputValue: string

    constructor(selector: string,
                topElement: string,
                element: string,
                bottomElement: string,
                observableElement: string,
                parameters: {[key:string]: string}[],
                controlInputElementContainer: string,
                controlViewContainer: string,
                thumbInputValue: string) {
        this.selector = selector
        this.topElement = topElement
        this.element = element
        this.bottomElement = bottomElement
        this.observableElement = observableElement
        this.parameters = parameters
        this.controlInputElementContainer = controlInputElementContainer
        this.controlViewContainer = controlViewContainer
        this.thumbInputValue = thumbInputValue
    }

    addControlElement(): JQuery {
        this.parameters.forEach(parameter => {
            let controlElement = new ControlInputElement(this.controlInputElementContainer,
                                                         this.controlViewContainer,
                                                         parameter.id,
                                                         "input-control__value-plus",
                                                         "input-control__value-minus",
                                                         parameter.id,
                                                         "thumb-input-value",
                                                         parameter.inputVariant,
                                                         "thumb-input__element")
            let inputControl = new ControlInputThumbs(this.controlViewContainer,
                                                        parameter.id,
                                                        this.observableElement,
                                                "input-control__value-plus",
                                               "input-control__value-minus")
            switch (parameter.inputVariant) {
                case "_changeable":
                    controlElement.getControlElementChangeable(parameter.id)
                    break
                case "_selectable":
                    controlElement.getControlElementSelectable(parameter.id)
                    break
                case "_colorable":
                    controlElement.getControlElementColorable(parameter.id)
                    break
                case "_displayed":
                    controlElement.getControlElementDisplayed(parameter.id)
                    break
                }

            inputControl.getControl()
        })
        return
    }

    getThumbPositionValue = (): void => {
        this.parameters.slice(0,2).forEach(parameter => {
            let val = $("#" + parameter.id + this.observableElement)[0].offsetLeft
            modelSliderStore.dispatch(onThumbPosChange(parameter.id, val))
            $(`#${parameter.id}.${this.thumbInputValue}`).attr("value", ModelSliderStore.getThumbScalePosition(parameter.id))
            $(`#${parameter.id}.${this.topElement}`).text(ModelSliderStore.getThumbScalePosition(parameter.id))
            $(`#${parameter.id}.${this.bottomElement}`).text(ModelSliderStore.getThumbScalePosition(parameter.id))
            $('.view__scale-track')
                .attr("style", `left: ${ModelSliderStore.getThumbPosition('min')}px`)
                .css({width: ModelSliderStore.getThumbsDifference() + 5 })
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