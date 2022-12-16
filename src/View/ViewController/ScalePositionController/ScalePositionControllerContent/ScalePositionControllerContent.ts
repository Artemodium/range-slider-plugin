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
    private  readonly slider: string
    private readonly thumb: string
    private readonly thumbId: string[]

    constructor(selector: string, element: string, thumb: string, thumbId: string[], slider?: string) {
        this.selector = selector
        this.element = element
        this.thumb = thumb
        this.slider = slider
        this.thumbId = thumbId
    }

    setScaleSize(scaleId: string, inputValue: string){
        let scale = $("." + this.slider)[0]
        let left = scale.offsetLeft
        let width = scale.offsetWidth
        ModelSliderStore.dispatch(setSliderScaleSizePx(left, width))
        $(`#${scaleId}.${inputValue}`).attr("value", ModelSliderStore.getSliderScaleSize())
        this.thumbId.forEach((id) => {
            ModelSliderStore.dispatch(onThumbPosChange(id, width * modelSliderStore.getRelativeThumbPosition(id)))
            $(`#${id}${this.thumb}`)[0].style.left = `${ModelSliderStore.getThumbPosition(id)}px` //thumbs init
        })
    }

    observeScaleSize(scaleId: string, inputValue: string) {
        let observer = new ResizeObserver(obj => {
            const e = obj[0];
            this.setScaleSize(scaleId, inputValue)
        })
        observer.observe($("." + this.slider)[0])
    }
}

export default ScalePositionControllerContent