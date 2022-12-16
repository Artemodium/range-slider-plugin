import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import {
    onThumbBorderRadiusChange,
    onThumbBorderWidthChange,
    onThumbHeightChange,
    onThumbPositionPlusMinus, onThumbTopPositionChange,
    onThumbWidthChange
} from "../../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"
import controlInputElement from "../../ControlInputElement/ControlInputElement";

class ControlInputThumbs {
    private readonly controlBlockArea: string
    private readonly thumbClass: string
    private readonly dataExchangeMethod: string
    private readonly id: string
    private readonly inputValue: string
    private readonly plusClassName: string
    private readonly minusClassName: string

    constructor(controlBlockArea: string,
                id: string,
                thumbClass: string,
                dataExchangeMethod: string,
                inputValue: string,
                plusClassName?: string,
                minusClassName?: string,
               ) {
        this.controlBlockArea = controlBlockArea
        this.id = id
        this.thumbClass = thumbClass
        this.dataExchangeMethod = dataExchangeMethod
        this.inputValue = inputValue
        this.plusClassName = plusClassName
        this.minusClassName = minusClassName
    }

    moveThumbByControlElement(id: string, val: number, sign: boolean){
        ModelSliderStore.dispatch(onThumbPositionPlusMinus(id, val, sign))
        $(`#${id}${this.thumbClass}`)[0].style.left = `${ModelSliderStore.getThumbPosition(id)}px`
        }

    thumbWidthChange(id: string, val: number){
        ModelSliderStore.dispatch(onThumbWidthChange(val))
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.width = `${ModelSliderStore.getThumbWidth()}px` })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbWidth())
        }

    thumbHeightChange(id: string, val: number){
        let inputHeightSelector = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbHeightChange(val))
        inputHeightSelector.map(thumb => {
            inputHeightSelector[thumb].style.height = `${ModelSliderStore.getThumbHeight()}px`
            inputHeightSelector[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbHeight())
    }

    thumbBorderWidthChange(id: string, val: number){
        let inputHeightSelector = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBorderWidthChange(val))
        inputHeightSelector.map(thumb => {
            inputHeightSelector[thumb].style.borderWidth = `${ModelSliderStore.getThumbBorderWidth()}px`
            inputHeightSelector[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbBorderWidth())
    }

    thumbBorderRadiusChange(id: string, val: number){
        let inputHeightSelector = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBorderRadiusChange(val))
        inputHeightSelector.map(thumb => {
            inputHeightSelector[thumb].style.borderRadius = `${ModelSliderStore.getThumbBorderRadius()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbBorderRadius())
    }

    thumbTopChange(id: string, val: number){
        let inputHeightSelector = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbTopPositionChange(val))
        inputHeightSelector.map(thumb => {
            inputHeightSelector[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbTop())
    }

    getControl() {
        $(`${this.controlBlockArea}`).on("click", (e: Event) => {
            switch (this.dataExchangeMethod) {
                case "thumb-position":
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
                    break
                case "thumb-width":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-width") {
                        if (ModelSliderStore.getThumbWidth() < 10) {
                            this.thumbWidthChange(this.id, 1)
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-width") {
                        if (ModelSliderStore.getThumbWidth() > 1) {
                            this.thumbWidthChange(this.id, -1)
                        }
                    }
                    break
                case "thumb-height":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-height") {
                        if (ModelSliderStore.getThumbHeight() < 30) {
                            this.thumbHeightChange(this.id, 1)
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-height") {
                        if (ModelSliderStore.getThumbHeight() > 6) {
                            this.thumbHeightChange(this.id,-1)
                        }
                    }
                    break
                case "thumb-border-width":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-border-width") {
                        if (ModelSliderStore.getThumbBorderWidth() > 0 && ModelSliderStore.getThumbBorderWidth() < 5) {
                            this.thumbBorderWidthChange(this.id, 1)
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-border-width") {
                        if (ModelSliderStore.getThumbBorderWidth() <= 5 && ModelSliderStore.getThumbBorderWidth() > 1) {
                            this.thumbBorderWidthChange(this.id, -1)
                        }
                    }
                    break
                case "thumb-border-radius":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-border-radius") {
                        if (ModelSliderStore.getThumbBorderRadius()) {
                            this.thumbBorderRadiusChange(this.id, 1)
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-border-radius") {
                        if (ModelSliderStore.getThumbBorderRadius()) {
                            this.thumbBorderRadiusChange(this.id, -1)
                        }
                    }
                    break
                case "top-thumb-position":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "top-thumb-position") {
                        if (ModelSliderStore.getThumbTop()<10) {
                            this.thumbTopChange(this.id, 1/2)
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "top-thumb-position") {
                        if (ModelSliderStore.getThumbTop()>-5) {
                            this.thumbTopChange(this.id, -1/2)
                        }
                    }
                    break
            }
        })
    }
}

export default ControlInputThumbs