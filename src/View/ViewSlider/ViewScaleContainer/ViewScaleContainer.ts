import ModelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import {onThumbPosChange} from "../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";

const $ = require('jquery');

class ViewScaleContainer {
    private readonly selector: string;
    private readonly element: string;

    constructor(selector: string, element: string) {
        this.selector = selector;
        this.element = element;
    }

    getViewScaleContainer(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`);
    }

    onScaleClick(): void {
        let minThumbPos = ModelSliderStore.getThumbPosition("min")
        let maxThumbPos = ModelSliderStore.getThumbPosition("max")
        $(this.selector).on('click', function (e: MouseEvent) {
            let clickPosition = e.clientX - ModelSliderStore.getSliderScaleLeftOffset()
            minThumbPos = ModelSliderStore.getThumbPosition("min")
            maxThumbPos = ModelSliderStore.getThumbPosition("max")
            Math.abs(clickPosition - minThumbPos) > Math.abs(clickPosition - maxThumbPos) ?
                ModelSliderStore.dispatch(onThumbPosChange('max', clickPosition-12)) &&
                $("#max.view__thumb").attr("style", ModelSliderStore.getThumbStylePosition('max')):
                ModelSliderStore.dispatch(onThumbPosChange('min', clickPosition-12)) &&
                $("#min.view__thumb").attr("style", ModelSliderStore.getThumbStylePosition('min'))
        })
       /*$(this.selector).off('mouseup', function (e: MouseEvent) {
            minThumbPos = ModelSliderStore.getThumbPosition("min")
            maxThumbPos = ModelSliderStore.getThumbPosition("max")
            let clickPosition = e.clientX - ModelSliderStore.getSliderScaleLeftOffset() - 12
            //console.log(clickPosition, minThumbPos, maxThumbPos)
            minThumbPos === maxThumbPos ? ModelSliderStore.dispatch(onThumbPosChange('min', minThumbPos-12)) &&
                $("#min.view__thumb").attr("style", ModelSliderStore.getThumbStylePosition('min')) : ''
            minThumbPos === maxThumbPos && clickPosition < minThumbPos ? console.log(clickPosition, minThumbPos, maxThumbPos) : ''
        })*/
    }
}

export default ViewScaleContainer