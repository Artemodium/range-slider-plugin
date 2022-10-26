import ViewThumb from "./ViewThumb/ViewThumb";
import ViewValuesMaxMin from "./ViewValues/ViewValuesMaxMin/ViewValuesMaxMin";
import ViewValuesMin from "./ViewValues/ViewValuesMaxMin/ViewValueMin/ViewValuesMin";
import ViewValuesMax from "./ViewValues/ViewValuesMaxMin/ViewValueMax/ViewValuesMax";
import ViewScaleContainer from "./ViewScaleContainer/ViewScaleContainer";
import ViewScaleBackline from "./ViewScaleContainer/ViewScaleBackline/ViewScaleBackline";
import ViewScaleTrack from "./ViewScaleContainer/ViewScaleTrack/ViewScaleTrack";
import ViewScale from "./ViewScaleContainer/ViewScale/ViewScale";

const $ = require('jquery');

class ViewSlider{
    private readonly selector: string;
    private readonly element: string

    constructor(selector?: string, element?: string) {
        this.selector = selector;
        this.element = element
    }

    getSliderThumbs(): void{
        const viewThumbMin = new ViewThumb('.my-slider-custom-app__view', 'view__thumb', '.my-slider-custom-app__view', 'min' )
        viewThumbMin.getViewThumb()
        viewThumbMin.handle_thumb()
        const viewThumbMax = new ViewThumb('.my-slider-custom-app__view', 'view__thumb', '.my-slider-custom-app__view', 'max' )
        viewThumbMax.getViewThumb()
        viewThumbMax.handle_thumb()
    }

    getSliderMaxMinValues(): void {
        new ViewValuesMaxMin('.my-slider-custom-app__view',
                                'view__max-min-container',
                                'view__min-container',
                                'view__max-container').getViewValuesMaxMin()
        new ViewValuesMin('.view__max-min-container', 'view__min-container').getViewValueMin()
        new ViewValuesMax('.view__max-min-container', 'view__max-container').getViewValueMax()
    }

    getSliderScales(): void {
        new ViewScaleContainer('.my-slider-custom-app__view', 'view__scale-container').getViewScaleContainer()
        new ViewScaleBackline('.view__scale-container').getViewScaleBackline()
        new ViewScaleTrack('.view__scale-container').getViewScaleTrack()
        new ViewScale ('.view__scale-container').getViewScale()
    }

    getViewSlider(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewSlider