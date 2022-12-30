import ModelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore"
import {onThumbPosChange} from "../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"

const $ = require('jquery')

class ViewScaleContainer {
    private readonly selector: string
    private readonly element: string
    private readonly thumb: string
    private readonly thumbId: {max: string, min:string}

    constructor(selector: string, element: string, thumb: string, thumbId: {max: string, min:string}) {
        this.selector = selector
        this.element = element
        this.thumb = thumb
        this.thumbId = thumbId
    }

    getViewScaleContainer(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`)
    }

    onScaleClick(): void {
        let max = this.thumbId.max
        let min = this.thumbId.min
        let thumb = this.thumb
        $(`.${this.element}`).on('click', function (e: MouseEvent) {
            let clickPosition = e.clientX - ModelSliderStore.getSliderScaleLeftOffset()
            let minThumbPos = ModelSliderStore.getThumbPosition(min)
            let maxThumbPos = ModelSliderStore.getThumbPosition(max)
            Math.abs(clickPosition - minThumbPos) > Math.abs(clickPosition - maxThumbPos) ?
                ModelSliderStore.dispatch(onThumbPosChange(max, clickPosition)) &&
                ($(`#${max}.${thumb}`)[0].style.left = `${ModelSliderStore.getThumbPosition(max)}px`) &&
                $(`#${max}.thumb-input-value`).val(`${ModelSliderStore.getThumbScalePosition(max)}`):
                ModelSliderStore.dispatch(onThumbPosChange(min, clickPosition)) &&
                ($(`#${min}.${thumb}`)[0].style.left = `${ModelSliderStore.getThumbPosition(min)}px`) &&
                $(`#${min}.thumb-input-value`).val(`${ModelSliderStore.getThumbScalePosition(min)}`)
        })
    }
}

export default ViewScaleContainer