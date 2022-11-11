import ModelSliderStore from "../../../../ModelSlider/ModelSlideStore/ModelSliderStore"

const $ = require('jquery')

class ViewScaleTrack {
    private readonly selector: string
    private readonly element: string


    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    /*getScaleTrackSize = () => {
        $(`.${this.element}`)
            .attr("style", `left: ${ModelSliderStore.getThumbPosition('min') + 12}px`)
            .css({width: ModelSliderStore.getThumbsDifference()})
    }

    observeScaleSize(){
        ModelSliderStore.thumbsObserver(this.getScaleTrackSize)
    }*/

    getViewScaleTrack(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`)
    }
}

export default ViewScaleTrack