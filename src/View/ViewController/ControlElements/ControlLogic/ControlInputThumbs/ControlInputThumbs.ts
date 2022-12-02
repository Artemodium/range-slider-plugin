import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import {onThumbPositionPlusMinus} from "../../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"

class ControlInputThumbs {
    private readonly controlBlockArea: string
    private readonly thumbClass: string
    private readonly id: string
    private readonly plusClassName: string
    private readonly minusClassName: string

    constructor(controlBlockArea: string,
                id: string,
                thumbClass: string,
                plusClassName?: string,
                minusClassName?: string,
               ) {
        this.controlBlockArea = controlBlockArea
        this.id = id
        this.thumbClass = thumbClass
        this.plusClassName = plusClassName
        this.minusClassName = minusClassName
    }

    moveThumbByControlElement(id: string, val: number, sign: boolean){
        ModelSliderStore.dispatch(onThumbPositionPlusMinus(id, val, sign))
        $(`#${id}${this.thumbClass}`).attr("style", ModelSliderStore.getThumbStylePosition(id))
        }

    getControl() {
        $(`${this.controlBlockArea}`).on("click", (e:Event) =>  {
            if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "min") {
                if (ModelSliderStore.getThumbsDifferenceOnScale() > 0) {
                    this.moveThumbByControlElement(this.id, 1, true)
                }
            } else if (e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "min") {
                this.moveThumbByControlElement(this.id, 1, false)
            }
            if (e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "max") {
                if (ModelSliderStore.getThumbsDifferenceOnScale() > 0) {
                    this.moveThumbByControlElement(this.id, 1, false)
                }
            } else if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "max") {
                this.moveThumbByControlElement(this.id, 1, true)
            }
        })
    }
}

export default ControlInputThumbs