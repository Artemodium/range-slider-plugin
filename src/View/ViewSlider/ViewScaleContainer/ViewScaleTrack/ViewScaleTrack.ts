const $ = require('jquery');

class ViewScaleTrack {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getViewScaleTrack(): JQuery {
        return $('<div>', {
            class: 'view__scale-track', type:"range", min:"0", max:"100"
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewScaleTrack