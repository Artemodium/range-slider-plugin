import '../styles/styles.sass'
const $ = require('jquery');

class renderSlider{
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getRenderSlider(): JQuery {
        return $('<div>', {
            class: 'slider-app'
        }).appendTo(`${ this.selector }`);
    }
}

export default renderSlider;