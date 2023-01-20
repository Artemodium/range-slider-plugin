import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import {
    onTextInputChangeThumbsWidth,
    onThumbBackgroundColorChange,
    onThumbBorderColorChange,
    onThumbBorderRadiusChange,
    onThumbBorderWidthChange,
    onThumbHeightChange,
    onThumbPositionPlusMinus,
    onThumbTopPositionChange,
    onThumbWidthChange,
    onTextInputChangeThumbsPosition,
    onTextInputChangeThumbsHeight,
    onTextInputChangeBorderWidth,
    onTextInputChangeBorderRadius, onTextInputChangeThumbsTop
} from "../../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"


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
        $(`#${id}${this.thumbClass}`)[0].style.left = `${val*ModelSliderStore.getSliderScaleStepRelative()}px`
    }

    moveThumbByControlElement(id: string, val: number, sign?: boolean){
        ModelSliderStore.dispatch(onThumbPositionPlusMinus(id, val, sign))
        $(`#${id}${this.thumbClass}`)[0].style.left = `${ModelSliderStore.getThumbPosition(id)}px`
        $(`#${id}.thumb-input-value`).val(`${ModelSliderStore.getThumbScalePosition(id)}`)
    }

    thumbWidthChange(id: string, val: number){
        ModelSliderStore.dispatch(onThumbWidthChange(val))
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.width = `${ModelSliderStore.getThumbWidth()}px` })
        $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbWidth())
        }

    changeThumbWidthByTextInput(id: string, val: number){
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.width = `${val}px` })
    }

    thumbHeightChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbHeightChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.height = `${ModelSliderStore.getThumbHeight()}px`
            thumbs[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbHeight())
    }

    changeThumbHeightByTextInput(id: string, val: number){
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.height = `${val}px` })
    }

    thumbBorderWidthChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBorderWidthChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.borderWidth = `${ModelSliderStore.getThumbBorderWidth()}px`
            thumbs[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbBorderWidth())
    }

    changeThumbBorderWidthByTextInput(id: string, val: number){
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.borderWidth = `${val}px` })
    }

    thumbBorderRadiusChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbBorderRadiusChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.borderRadius = `${ModelSliderStore.getThumbBorderRadius()}px`
        })
        $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbBorderRadius())
    }

    changeThumbBorderRadiusByTextInput(id: string, val: number){
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.borderRadius = `${val}px` })
    }

    thumbTopChange(id: string, val: number){
        let thumbs = $(`${this.thumbClass}`)
        ModelSliderStore.dispatch(onThumbTopPositionChange(val))
        thumbs.map(thumb => {
            thumbs[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbTop().toFixed(1))
    }

    thumbTopChangeMouseDown(id: string, val: number, flag?: any, isDoing?: boolean){
        ModelSliderStore.dispatch(onThumbTopPositionChange(val))
        let start = flag
        let startDoing = isDoing
        let i = 1
        console.log(startDoing, ++i)
        $(`${this.thumbClass}`).map(thumb => {
            $(`${this.thumbClass}`)[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
        })
        $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbTop().toFixed(1))
        startDoing ? setTimeout(this.thumbTopChangeMouseDown, 1000,  this.id, 0.1, null, true) : ""
    }

    changeThumbThumbsTopByTextInput(id: string, val: number){
        $(`${this.thumbClass}`).map(thumb => { $(`${this.thumbClass}`)[thumb].style.top = `${val}px` })
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
    validateThumbsInputValue = (e: any, id: string): number =>  {
        e.target.value = e.target.value.replace(/\D/g, "")
        if(id === 'min' && ModelSliderStore.getMinSliderScale().includes(parseInt(e.target.value))){
            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
            return e.target.value
        }
        else if(id === 'min' && !(ModelSliderStore.getMinSliderScale().includes(parseInt(e.target.value)))){
            $(`#${this.id}.${this.inputValue}`).addClass("incorrect-value")
        }
        else if(id === 'max' && ModelSliderStore.getMaxSliderScale().includes(parseInt(e.target.value))){
            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
            return e.target.value
        }
        else if(id === 'max' && !(ModelSliderStore.getMaxSliderScale().includes(parseInt(e.target.value)))){
            $(`#${this.id}.${this.inputValue}`).addClass("incorrect-value")
        }
    }
    validateInputNumber = (e: any, id:string, interval?: number[]) => {
        e.target.value = e.target.value.replace(/\D/g, "")
        if(interval.includes(parseInt(e.target.value))) {
            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
            return parseInt(e.target.value)
        }
        else {
            $(`#${this.id}.${this.inputValue}`).addClass("incorrect-value")
        }
    }

    validateInputFloatSignedNumber = (e: any, id:string, interval?: {start: number, end: number, step: number }) => {
        e.target.value = e.target.value.replace(/[^0-9.-]|(?<=[A-z])\.[0-9]|[0-9]+-[0-9]*|\./g, "")
        if(parseInt(e.target.value) >= interval.start && parseInt(e.target.value) <= interval.end) {
            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
            return parseInt(e.target.value)
        }
        else {
            $(`#${this.id}.${this.inputValue}`).addClass("incorrect-value")
        }
    }



    getControl() {
        $(`${this.controlBlockArea}`).on("click", (e: Event) => {
            switch (this.dataExchangeMethod) {
                case "thumb-position":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "min") {
                        if (ModelSliderStore.getThumbsDifferenceOnScale() > 0) {
                            this.moveThumbByControlElement(this.id, 1, true)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if (e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "min") {
                        this.moveThumbByControlElement(this.id, 1, false)
                        $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                    }
                    if (e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "max") {
                        if (ModelSliderStore.getThumbsDifferenceOnScale() > 0) {
                            this.moveThumbByControlElement(this.id, 1, false)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "max") {
                        this.moveThumbByControlElement(this.id, 1, true)
                        $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                    }
                    break
                case "thumb-width":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-width") {
                        if (ModelSliderStore.getThumbWidth() < ModelSliderStore.getWidthRange().length + 2) {
                            this.thumbWidthChange(this.id, 1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-width") {
                        if (ModelSliderStore.getThumbWidth() > 2) {
                            this.thumbWidthChange(this.id, -1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    }
                    break
                case "thumb-height":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-height") {
                        if (ModelSliderStore.getThumbHeight() < 30) {
                            this.thumbHeightChange(this.id, 1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")

                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-height") {
                        if (ModelSliderStore.getThumbHeight() > 6) {
                            this.thumbHeightChange(this.id,-1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    }
                    break
                case "thumb-border-width":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-border-width") {
                        if (ModelSliderStore.getThumbBorderWidth() > 0 && ModelSliderStore.getThumbBorderWidth() < 5) {
                            this.thumbBorderWidthChange(this.id, 1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-border-width") {
                        if (ModelSliderStore.getThumbBorderWidth() <= 5 && ModelSliderStore.getThumbBorderWidth() > 1) {
                            this.thumbBorderWidthChange(this.id, -1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    }
                    break
                case "thumb-border-radius":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "thumb-border-radius") {
                        if (ModelSliderStore.getThumbBorderRadius()<25) {
                            this.thumbBorderRadiusChange(this.id, 1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "thumb-border-radius") {
                        if (ModelSliderStore.getThumbBorderRadius()>0) {
                            this.thumbBorderRadiusChange(this.id, -1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    }
                    break
                case "top-thumb-position":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "top-thumb-position") {
                        if (ModelSliderStore.getThumbTop() < 10) {
                            this.thumbTopChange(this.id, 0.1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "top-thumb-position") {
                        if (ModelSliderStore.getThumbTop() > -5) {
                            this.thumbTopChange(this.id, -0.1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
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
        let input = $(`#${this.id}.${this.inputValue}`)
        $(input).on("keyup", (e: any) => {
            switch (this.dataExchangeMethod) {
                case "thumb-position": {
                    let val = this.validateThumbsInputValue(e, this.id)
                    if (val) {
                        ModelSliderStore.dispatch(onTextInputChangeThumbsPosition(val * ModelSliderStore.getSliderScaleStepRelative(), this.id))
                        this.moveThumbByTextInput(this.id, val)
                    }
                }
                    break
                case "thumb-width": {
                    let val = this.validateInputNumber(e, this.id, ModelSliderStore.getWidthRange())
                    if (val) {
                        ModelSliderStore.dispatch(onTextInputChangeThumbsWidth(val))
                        this.changeThumbWidthByTextInput(this.id, val)
                    }
                }
                    break
                case "thumb-height": {
                    let val = this.validateInputNumber(e, this.id, ModelSliderStore.getHeightRange())
                    if (val) {
                        ModelSliderStore.dispatch(onTextInputChangeThumbsHeight(val))
                        this.changeThumbHeightByTextInput(this.id, val)
                    }
                }
                    break
                case "thumb-border-width":
                {
                    let val = this.validateInputNumber(e, this.id, ModelSliderStore.getBorderWidthRange())
                    if (val) {
                        ModelSliderStore.dispatch(onTextInputChangeBorderWidth(val))
                        this.changeThumbBorderWidthByTextInput(this.id, val)
                    }
                }
                break
                case "thumb-border-radius":
                {
                    let val = this.validateInputNumber(e, this.id, ModelSliderStore.getBorderRadiusRange())
                    if (val) {
                        ModelSliderStore.dispatch(onTextInputChangeBorderRadius(val))
                        this.changeThumbBorderRadiusByTextInput(this.id, val)
                    }
            }
                break
                case "top-thumb-position":
                {
                    let val = this.validateInputFloatSignedNumber(e, this.id, ModelSliderStore.getThumbsTopRange())
                    if (val) {
                        ModelSliderStore.dispatch(onTextInputChangeThumbsTop(val))
                        this.changeThumbThumbsTopByTextInput(this.id, val)
                    }
                }
                break
            }
        })
        let start: any = null
        let delay = 1000
        let startDoing = false
        let selector = $("#top-thumb-position.input-control__value-plus")
        selector.on("mousedown", (e: any ) => {
            switch (this.dataExchangeMethod) {
                case "top-thumb-position":
                    if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`) && this.id === "top-thumb-position") {
                        if (ModelSliderStore.getThumbTop() < 10) {
                           setTimeout(this.thumbTopChangeMouseDown, delay,  this.id, 0.1, null, true)
                            /*start = setTimeout((id: string = this.id, val: number = 0.1) => {
                                start = null
                                startDoing = true
                                ModelSliderStore.dispatch(onThumbTopPositionChange(val))
                                $(`${this.thumbClass}`).map(thumb => {
                                        $(`${this.thumbClass}`)[thumb].style.top = `${ModelSliderStore.getThumbTop()}px`
                                })
                                $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbTop().toFixed(1))
                            }, delay)*/

                        }
                    }
                    //break
            }
        })
       selector.on("mouseup", (e: Event) => {
           if(start){
               console.log(start)
               clearTimeout(start)
           }
           else if( startDoing ){
                startDoing = false
           }
        })
    }
}

export default ControlInputThumbs