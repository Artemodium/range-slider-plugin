import modelSliderStore from "../ModelSlider/ModelSlideStore/ModelSliderStore";

class SliderInit {
    static startSliderInit(state: any) {
        state.sliderThumbs.max = {thumbPosition: 'left: 250px', relativePosition: 0.578, scalePosition: undefined}
        state.sliderThumbs.min = {thumbPosition: 'left: 50px', relativePosition: 0.115, scalePosition: undefined}
        state.sliderScaleRange = {start: 0, end: 100, step: 1}
        state.sliderScale = {}
        state.ruler = {}
        state.thumbsLock = {lock: false}
        return modelSliderStore.modelSliderState = state
    }

    /*static sliderRerender(state: any): any {
        return modelSliderStore.modelSliderState.sliderThumbs.max = state
    }*/
}

export default SliderInit