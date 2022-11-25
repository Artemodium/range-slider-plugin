import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import {onThumbPositionPlusMinus} from "../../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"

class ControlInputThumbs {
    private readonly controlElement: string
    private readonly thumbClass: string
    private readonly id: string
    private readonly plusClass: string
    private readonly minusClass: string

    constructor(controlElement: string,
                id: string,
                thumbClass: string,
                plusClass?: string,
                minusClass?: string,
               ) {
        this.controlElement = controlElement
        this.id = id
        this.thumbClass = thumbClass
        this.plusClass = plusClass
        this.minusClass = minusClass
    }

    moveThumbByControlElement(id: string, val: number, sign: boolean){
        ModelSliderStore.dispatch(onThumbPositionPlusMinus(id, val, sign))
        $(`#${id}${this.thumbClass}`).attr("style", ModelSliderStore.getThumbStylePosition(id))
        }

    getControl() {
        $(`${this.controlElement}`).on("click", (e:Event) =>  {
            if (e.target === document.querySelector(`#${this.id}.${this.plusClass}`) && this.id === "min") {
                if (ModelSliderStore.getThumbsDifference() > 0) {
                    this.moveThumbByControlElement(this.id, 1, true)
                }
            } else if (e.target === document.querySelector(`#${this.id}.${this.minusClass}`) && this.id === "min") {
                this.moveThumbByControlElement(this.id, 1, false)
            }

            if (e.target === document.querySelector(`#${this.id}.${this.minusClass}`) && this.id === "max") {
                if (ModelSliderStore.getThumbsDifference() > 0) {
                    this.moveThumbByControlElement(this.id, 1, false)
                }
            } else if (e.target === document.querySelector(`#${this.id}.${this.plusClass}`) && this.id === "max") {
                this.moveThumbByControlElement(this.id, 1, true)
            }
        })
    }
}

export default ControlInputThumbs