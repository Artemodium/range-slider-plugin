import {
     setSliderScaleSizeRelative
} from "../../../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";
import ModelSliderStore from "../../../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import $ from "jquery";

class ControlInputScale {
    private readonly slider: string
    private readonly controlBlockArea: string
    private readonly controlInput: string
    private readonly id: string
    private readonly plusClass: string
    private readonly minusClass: string

    constructor(slider: string,
                controlBlockArea: string,
                controlInput: string,
                id: string,
                plusClass?: string,
                minusClass?: string,
    ) {
        this.slider = slider
        this.controlBlockArea = controlBlockArea
        this.controlInput = controlInput
        this.id = id
        this.plusClass = plusClass
        this.minusClass = minusClass
    }

    resizeScale(width: number){
        ModelSliderStore.dispatch(setSliderScaleSizeRelative(width))
        $(`.${this.slider}`).attr("style", `width: ${ModelSliderStore.getSliderScaleSizeRelative()}%`)
        $(`#scale-rel.${this.controlInput}`).attr("value",  `${ModelSliderStore.getSliderScaleSizeRelative()}%`)
    }

    getControl() {
        $(`#scale-rel.${this.controlInput}`).attr("value",  `${ModelSliderStore.getSliderScaleSizeRelative()}%`)
        $(`.${this.controlBlockArea}`).on("click", (e:Event) =>  {
            if (e.target === document.querySelector(`#${this.id}.${this.plusClass}`) && this.id === "scale-rel") {
                e.stopImmediatePropagation()
                if (ModelSliderStore.getSliderScaleSizeRelative() < 100) {
                    this.resizeScale(ModelSliderStore.getSliderScaleSizeRelative() + 1)
                }
            }
            if (e.target === document.querySelector(`#${this.id}.${this.minusClass}`) && this.id === "scale-rel") {
                e.stopImmediatePropagation()
                if (ModelSliderStore.getSliderScaleSizeRelative() > 0) {
                    this.resizeScale(ModelSliderStore.getSliderScaleSizeRelative() - 1)
                }
            }
        })
    }
}

export default ControlInputScale