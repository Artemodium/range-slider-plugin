import ViewThumbsContainer from "./ViewThumb/ViewTumbsContainer/ViewThumbsContainer";
import ViewThumbContainer from "./ViewThumb/ViewThumbContainer/ViewThumbContainer";
import ViewThumb from "./ViewThumb/ViewThumb";
import ViewValuesMaxMin from "./ViewValues/ViewValuesMaxMin/ViewValuesMaxMin";
import ViewValuesMin from "./ViewValues/ViewValuesMaxMin/ViewValueMin/ViewValuesMin";
import ViewValuesMax from "./ViewValues/ViewValuesMaxMin/ViewValueMax/ViewValuesMax";
import ViewScaleContainer from "./ViewScaleContainer/ViewScaleContainer";
import ViewScaleBackLine from "./ViewScaleContainer/ViewScaleBackline/ViewScaleBackline";
import ViewScaleTrack from "./ViewScaleContainer/ViewScaleTrack/ViewScaleTrack";
import ViewScale from "./ViewScaleContainer/ViewScale/ViewScale";
import ViewRuler from "./ViewRuler/ViewRuler";
import ViewRulerContainer from "./ViewRuler/ViewRulerContainer/ViewRulerContainer";

const $ = require('jquery');

class ViewSlider{
    private readonly selector: string;
    private readonly element: string

    constructor(selector?: string, element?: string) {
        this.selector = selector;
        this.element = element
    }

    getSliderThumbs(): void{
        const ViewThumbs = new ViewThumbsContainer('.my-slider-custom-app__view', 'view__thumbs-container')
        ViewThumbs.getViewThumbsContainer()
        const ViewThumbContainerMin = new ViewThumbContainer('.view__thumbs-container', 'view__thumb', 'min' )
        const ViewThumbContainerMax = new ViewThumbContainer('.view__thumbs-container', 'view__thumb', 'max' )
        //const ViewThumbContainerMin = new ViewThumbContainer('.my-slider-custom-app__view', 'view__thumb', 'min' )
        //const ViewThumbContainerMax = new ViewThumbContainer('.my-slider-custom-app__view', 'view__thumb', 'max' )
        ViewThumbContainerMin.getViewThumbContainer()
        ViewThumbContainerMax.getViewThumbContainer()
        const viewThumbMin = new ViewThumb('.my-slider-custom-app__view', 'topThumb', 'view__thumb', 'bottomThumb', '.my-slider-custom-app__view', 'min' )
        viewThumbMin.getViewThumb()
        viewThumbMin.handle_thumb()
        const viewThumbMax = new ViewThumb('.my-slider-custom-app__view', 'topThumb', 'view__thumb', 'bottomThumb', '.my-slider-custom-app__view', 'max' )
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
        new ViewScaleContainer('.my-slider-custom-app__view', 'view__scale-container').onScaleClick()
        new ViewScaleBackLine('.view__scale-container', 'view__scale-backLine').getViewScaleBackLine()
        new ViewScaleTrack('.view__scale-container', 'view__scale-track').getViewScaleTrack()
        new ViewScale (".view__scale-container", "view__scale").getViewScale()
    }
    getViewRuler(): void {
        new ViewRulerContainer('.my-slider-custom-app__view', 'view__ruler-container').getViewRulerContainer()
        new ViewRuler('.view__ruler-container', 'view__ruler').getViewRuler()
    }

    getViewSlider(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`${ this.selector }`);
    }
}

export default ViewSlider