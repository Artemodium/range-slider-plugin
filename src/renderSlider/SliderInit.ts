import modelSliderStore from "../ModelSlider/ModelSlideStore/ModelSliderStore";

class SliderInit {
    static startSliderInit(state: any) {
        state.sliderThumbs.max = { thumbPosition: 'left: 250px', relativePosition: 0.578, scalePosition: undefined }
        state.sliderThumbs.min = { thumbPosition: 'left: 50px', relativePosition: 0.115, scalePosition: undefined }
        state.sliderThumbs.metrics = { width: 3, height: 20, top: -1, shadow: false, BGColor: "#ff0000", borderWidth: 2, borderRadius: 4, borderColor: "#000000"}
        state.sliderScaleRange = { start: 0, end: 100, step: 1 }
        state.sliderScale = {left: undefined, width: undefined, widthRelative: 25, stepRelative: undefined }
        state.ruler = {}
        state.thumbsLock = {lock: false}
        return modelSliderStore.modelSliderState = state
    }

}

export default SliderInit