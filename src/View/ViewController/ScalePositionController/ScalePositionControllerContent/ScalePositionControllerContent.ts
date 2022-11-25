import $ from "jquery";
import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import {
    onThumbPosChange,
    setSliderScaleSizePx
} from "../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";
import modelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import ControlInputElement from "../../ControlElements/ControlInputElement/ControlInputElement";
import ControlInputThumbs from "../../ControlElements/ControlLogic/ControlInputThumbs/ControlInputThumbs";

class ScalePositionControllerContent {
    private readonly selector: string
    private readonly element: string
    private  readonly scale: string
    private readonly thumb: string
    private readonly thumbId: string[]

    constructor(selector: string, element: string, thumb: string, thumbId: string[], scale?: string) {
        this.selector = selector
        this.element = element
        this.thumb = thumb
        this.scale = scale
        this.thumbId = thumbId
    }

    addControlElement(): JQuery {
        let controlElement = new ControlInputElement(this.element, this.selector, "Scale size PX")
        console.log(this.element, this.selector,)
        controlElement.getControlElement('is')
        return
    }

    getScalePositionControllerContent(): JQuery {
        let input: JQuery[] = [
            $('<span>', {class: 'input-minus', text:"-"}),
            $('<input>',{class: this.element}),
            $('<span>', {class: 'input-plus', text:"+"})
        ]
        input.forEach((el:JQuery)=> {
            el.appendTo(($(`${this.selector}`)))})
        return $(`${this.element}`).appendTo(`${this.selector}`)
    }

    setScaleSize(){
        let left = $("." + this.scale)[0].offsetLeft
        let width = $("." + this.scale)[0].offsetWidth
        ModelSliderStore.dispatch(setSliderScaleSizePx(left, width))
        $(`.${this.element}`).attr("value", ModelSliderStore.getSliderScaleSize())
        this.thumbId.forEach((id) => {
            ModelSliderStore.dispatch(onThumbPosChange(id, width * modelSliderStore.getRelativeThumbPosition(id)))
            $(`#${id}${this.thumb}`).attr("style", ModelSliderStore.getThumbStylePosition(id)) // thumbs init
        })
    }

    observeScaleSize() {
        let observer = new ResizeObserver(obj => {
            const e = obj[0];
            this.setScaleSize()
        })
        observer.observe($("." + this.scale)[0])
    }
}

export default ScalePositionControllerContent