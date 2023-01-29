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
//import {clearInterval} from "timers";


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

    moveThumbByMouseDown(id: string, val: number, selector: JQuery, sign: string) {
        let active = setInterval(() => {
            let onSign = sign === this.plusClassName ? true : false
            if ( (ModelSliderStore.getThumbsDifferenceOnScale() < 2 && sign === this.plusClassName && id === "min") ||
                (ModelSliderStore.getThumbsDifferenceOnScale() < 2 && sign === this.minusClassName && id === "max") ||
                (ModelSliderStore.getThumbScalePosition(id) < ModelSliderStore.getSliderScaleStart() + 2  && sign === this.minusClassName && id === "min") ||
                (ModelSliderStore.getThumbScalePosition(id) > ModelSliderStore.getSliderScaleEnd() - 2 && sign === this.plusClassName && id === "max") )
                    clearInterval(active)
            ModelSliderStore.dispatch(onThumbPositionPlusMinus(id, val, onSign))
            $(`#${id}.${this.inputValue}`).val(`${ModelSliderStore.getThumbScalePosition(id)}`)
            $(`#${id}${this.thumbClass}`)[0].style.left = `${ModelSliderStore.getThumbPosition(id)}px`
            $(`#${id}.thumb-input-value`).val(`${ModelSliderStore.getThumbScalePosition(id)}`)
        }, 10)
        selector.on("mouseup", () => {
            clearInterval(active)
        }).on("mouseleave", () => {
            clearInterval(active)
        })
        return false
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

    thumbTopChangeMouseDown(id: string, val: number, selector: JQuery) {
        let thumbs = $(`${this.thumbClass}`)
        let mdcTimer = setInterval(() => {
                ModelSliderStore.dispatch(onThumbTopPositionChange(val))
                $(`#${id}.${this.inputValue}`).val(ModelSliderStore.getThumbTop().toFixed(1))
                if( ModelSliderStore.getThumbTop()>9.9 || ModelSliderStore.getThumbTop()<-4.9 ) { clearInterval(mdcTimer) }
                thumbs.map(thumb => {
                    thumbs[thumb].style.top = `${ModelSliderStore.getThumbTop()}px` })
            }, 100)
        selector.on("mouseup", () => {
            clearInterval(mdcTimer)
        }).on("mouseleave", () => {
            clearInterval(mdcTimer)
        })
        return false
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
        e.target.value = e.target.value.replace(/[^0-9.-]|(?<=[A-z])\.[0-9]|[0-9]+-[0-9]*/g, "")
        e.target.value = e.target.value.replace(/^0\d/g, e.target.value[0] + "." + e.target.value[1])
        e.target.value = e.target.value.replace(/^\./g, "0" + e.target.value[0])
        e.target.value[0] === "-" && e.target.value.length>4 ? e.target.value = e.target.value.slice(0, 4) : e.target.value
        e.target.value[0] !== "-" && e.target.value.length>3 ? e.target.value = e.target.value.slice(0, 3) : e.target.value
        if(parseInt(e.target.value) >= interval.start && parseInt(e.target.value) <= interval.end ) {
            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
            return parseFloat(e.target.value)
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
                    } else if (e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) &&
                        this.id === "min" &&
                        ModelSliderStore.getThumbScalePosition(this.id) >= ModelSliderStore.getSliderScaleStart()+1) {
                        this.moveThumbByControlElement(this.id, 1, false)
                        $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                    }
                    if (e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "max") {
                        if (ModelSliderStore.getThumbsDifferenceOnScale() > 0) {
                            this.moveThumbByControlElement(this.id, 1, false)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if (e.target === document.querySelector(`#${this.id}.${this.plusClassName}`)
                        && this.id === "max"
                        && ModelSliderStore.getThumbScalePosition(this.id) <= ModelSliderStore.getSliderScaleEnd()-1) {
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
                        if (ModelSliderStore.getThumbTop() < 9.9) {
                            this.thumbTopChange(this.id, 0.1)
                            $(`#${this.id}.${this.inputValue}`).removeClass("incorrect-value")
                        }
                    } else if(e.target === document.querySelector(`#${this.id}.${this.minusClassName}`) && this.id === "top-thumb-position") {
                        if (ModelSliderStore.getThumbTop() > -4.9) {
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
        switch (this.dataExchangeMethod) {
            case "top-thumb-position":
                for (const sign of [this.plusClassName, this.minusClassName]) {
                    let active: any
                    let startDoing = false
                    $(`#${this.id}.${sign}`).on("mousedown", (e: any) => {
                        if (e.target === document.querySelector(`#${this.id}.${sign}`) && this.id === "top-thumb-position") {
                            startDoing = false
                            let val: number
                            val = sign === this.plusClassName ? 0.1 : -0.1
                            if (ModelSliderStore.getThumbTop() < 9.9 && ModelSliderStore.getThumbTop() >= -4.9) {
                                active = setTimeout(() => {
                                    startDoing = true
                                    startDoing ? this.thumbTopChangeMouseDown(this.id, val, $(`#${this.id}.${sign}`)) : ""
                                }, 1000)
                            }
                        }
                            }).on("mouseup", () => {
                                clearInterval(active)
                            }).on("mouseleave", () => {
                                clearInterval(active)
                            })
            }
                break
                case "thumb-position":
                    for (const sign of [this.plusClassName, this.minusClassName]) {
                        let active: any
                        let startDoing = false
                        $(`#${this.id}.${sign}`).on("mousedown", (e: any) => {
                            for(const id of["max", "min"]) {
                                if (e.target === document.querySelector(`#${this.id}.${sign}`) && this.id === id) {
                                    startDoing = true
                                    active = setTimeout(() => {
                                        if( (ModelSliderStore.getThumbsDifferenceOnScale() < 2 && sign === this.plusClassName && id === "min") ||
                                            (ModelSliderStore.getThumbsDifferenceOnScale() < 2 && sign === this.minusClassName && id === "max") ||
                                            (ModelSliderStore.getThumbScalePosition(id) < ModelSliderStore.getSliderScaleStart() + 2  && sign === this.minusClassName && id === "min") ||
                                            (ModelSliderStore.getThumbScalePosition(id) > ModelSliderStore.getSliderScaleEnd() - 2 && sign === this.plusClassName && id === "max") ) {
                                                console.log("clear")
                                                clearInterval(active)
                                                startDoing = false
                                            }
                                            startDoing ? this.moveThumbByMouseDown(this.id, 1, $(`#${this.id}.${sign}`), sign) : ""
                                        }, 1000)
                                }
                            }
                        }).on("mouseup", () => {
                            clearInterval(active)
                        }).on("mouseleave", () => {
                            clearInterval(active)
                        })
                    }
        }
    }
}

export default ControlInputThumbs