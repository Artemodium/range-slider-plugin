const $ = require('jquery')

class ViewScaleTrack {
    private readonly selector: string
    private readonly element: string


    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewScaleTrack(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`)
    }
}

export default ViewScaleTrack