import ModelSliderStore from "../ModelSlider/ModelSlideStore/ModelSliderStore"

function sliderInit(state: any) {
    state.sliderThumbs.max = {thumbPosition: 'left: 50px', relativePosition: 0.578, scalePosition: undefined}
    state.sliderThumbs.min = {thumbPosition: 'left: 250px', relativePosition: 0.115, scalePosition: undefined}
    state.sliderScaleRange = { start:  0, end: 50, step: 1 }
    state.sliderScale = { }
    state.ruler = { }
    state.thumbsLock = { lock: false }
    return ModelSliderStore.modelSliderState = state
}

export default sliderInit