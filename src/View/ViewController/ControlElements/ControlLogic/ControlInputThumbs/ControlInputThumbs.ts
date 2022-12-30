import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import {
    onTextInputChange,
    onThumbBackgroundColorChange, onThumbBorderColorChange,
    onThumbBorderRadiusChange,
    onThumbBorderWidthChange,
    onThumbHeightChange,
    onThumbPositionPlusMinus, onThumbTopPositionChange,
    onThumbWidthChange
} from "../../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"
import controlInputElement from "../../ControlInputElement/ControlInputElement";
import {event} from "jquery";

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
    moveThumbByTextInput(id: string, val: number){
        console.log(ModelSliderStore.getSliderScaleStepRelative())
        $(`#${id}${this.thumbClass}`)[0].style.left = `${val*ModelSliderStore.getSliderScaleStepRelative()}px`
        //$(`#${id}.thumb-input-value`).val(`${ModelSliderStore.getThumbScalePosition(id)}`)
    }

    moveThumbByControlElement(id: string, val: number, sign?: boolean){
        ModelSliderStore.dispatch(onThumbPositionPlusMinus(id, val, sign))
        $(`#${id}${this.thumbClass}`)[0].style.left = `${ModelSliderStore.getThumbPosition(id)}px`
        console.log(`${ModelSliderStore.getThumbPosition(id)}px`)
        $(`#${id}.thumb-input-value`).val(`${ModelSliderStore.getThumbScalePosition(id)}`)
    }

    thumbWidthChange(id: string, val: number){
        ModelSliderStore.dispatch(onThumbWidthChange(val))
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.width = `${ModelSliderStore.getThumbWidth()}px` })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbWidth())
        }

    thumbHeightChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbHeightChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.height = `${ModelSliderStore.getThumbHeight()}px`
            thumbs[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbHeight())
    }

    thumbBorderWidthChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBorderWidthChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.borderWidth = `${ModelSliderStore.getThumbBorderWidth()}px`
            thumbs[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbBorderWidth())
    }

    thumbBorderRadiusChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBorderRadiusChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.borderRadius = `${ModelSliderStore.getThumbBorderRadius()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbBorderRadius())
    }

    thumbTopChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbTopPositionChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).attr("value", ModelSliderStore.getThumbTop().toFixed(1))
    }

    getBGColorInput = (event: any) => {
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBackgroundColorChange(event.target.value))
        $(document.querySelector(`#${this.id}.thumb-input__element-text`)).val(ModelSliderStore.getThumbBackgroundColor())
        thumbs.map(thumb => {
            thumbs[thumb].style.backgroundColor = ModelSliderStore.getThumbBackgroundColor()
        })
    }

    getBorderColorInput = (event: any) => {
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBorderColorChange(event.target.value))
        $(document.querySelector(`#${this.id}.thumb-input__element-text`)).val(ModelSliderStore.getThumbBorderColor())
        thumbs.map(thumb => {
            thumbs[thumb].style.borderColor = ModelSliderStore.getThumbBorderColor()
        })
    }
    validateValue = (e: any): any =>  {
        const value = e.target.value
        e.target.value = value.replace(/\D/g, "")
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
                    $(`#${this.id}.thumb-input-value`).on("keyup", (e: any) => {
                        let val = $(`#${this.id}.thumb-input-value`).val().toString()
                        $(`#${this.id}.thumb-input-value`)[0].oninput = this.validateValue(e)
                       // console.log(res)
                        if (val in [...Array(ModelSliderStore.getThumbScalePosition("max") + 1).keys()]) {
                            ModelSliderStore.dispatch(onTextInputChange(val, this.id))
                            this.moveThumbByTextInput(this.id, parseInt(val))
                        }
                    })
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
                        if (ModelSliderStore.getThumbTop() < 10) {
                            this.thumbTopChange(this.id, 0.1)
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "top-thumb-position") {
                        if (ModelSliderStore.getThumbTop() > -5) {
                            this.thumbTopChange(this.id, -0.1)
                        }
                    }
                    break
                case "thumb-background-color":
                    if (e.target === document.querySelector(`#${this.id}.thumb-input__element-color`) && this.id === "thumb-background-color") {
                        let theInput = document.querySelector(`#${this.id}.thumb-input__element-color`)
                        theInput.addEventListener("input", this.getBGColorInput, false)
                    }
                    break
                case "thumb-border-color":
                    if (e.target === document.querySelector(`#${this.id}.thumb-input__element-color`) && this.id === "thumb-border-color") {
                        let theInput = document.querySelector(`#${this.id}.thumb-input__element-color`)
                        theInput.addEventListener("input", this.getBorderColorInput, false)
                    }
                    break
            }
        })
    }
}

export default ControlInputThumbs