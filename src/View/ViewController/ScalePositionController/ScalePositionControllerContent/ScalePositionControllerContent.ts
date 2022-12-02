import $ from "jquery"
import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import {
    onThumbPosChange,
    setSliderScaleSizePx
} from "../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"
import modelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import ControlInputElement from "../../ControlElements/ControlInputElement/ControlInputElement"
import ControlInputScale from "../../ControlElements/ControlLogic/ControlInputScale/ControllnputScale";

class ScalePositionControllerContent {
    private readonly selector: string
    private readonly element: string
    private  readonly scale: string
    private readonly thumb: string
    private readonly thumbId: string[]
    private readonly parameters: {[key:string]: string}[]

    constructor(selector: string, element: string, thumb: string, thumbId: string[], parameters: {[key:string]: string}[], scale?: string) {
        this.selector = selector
        this.element = element
        this.thumb = thumb
        this.scale = scale
        this.thumbId = thumbId
        this.parameters = parameters
    }

    addControlElement(): JQuery {
        this.parameters.forEach(parameter => {
            let controlElement = new ControlInputElement(this.element,
                                                        this.selector,
                                                        parameter.id,
                                                        "input-control__value-plus",
                                                        "input-control__value-minus",
                                                        parameter.id,
                                                        "scale-input-value",
                                                        parameter.inputVariant,
                                                        "scale-input__element")
            let inputControl = new ControlInputScale("my-slider-custom-app__view",
                                                        "scale__position-controller-container",
                                                        "scale-input-value",
                                                        parameter.id,
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

    setScaleSize(scaleId?: string){
        let scale = $("." + this.scale)[0]
        let left = scale.offsetLeft
        let width = scale.offsetWidth
        ModelSliderStore.dispatch(setSliderScaleSizePx(left, width))
        $(`#${scaleId}.scale-input-value`).attr("value",  `${ModelSliderStore.getSliderScaleSizeRelative()}%`)
        $(`#${scaleId}.${this.element}`).attr("value", ModelSliderStore.getSliderScaleSize())
        this.thumbId.forEach((id) => {
            ModelSliderStore.dispatch(onThumbPosChange(id, width * modelSliderStore.getRelativeThumbPosition(id)))
            $(`#${id}${this.thumb}`).attr("style", ModelSliderStore.getThumbStylePosition(id)) // thumbs init
        })
    }

    observeScaleSize(scaleId?: string) {
        let observer = new ResizeObserver(obj => {
            const e = obj[0];
            this.setScaleSize(scaleId)
        })
        observer.observe($("." + this.scale)[0])
    }
}

export default ScalePositionControllerContent