const $ = require('jquery');

class SliderAppView{
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getSliderAppView(): JQuery {
        return $('<div>', {
            class: 'slider-app__view'
        }).appendTo(`${ this.selector }`);

    }
}

export default SliderAppView