import {ActionType} from "../../slider-app-types/slider-app-types";
import {
    ADD_THUMB,
    SET_SLIDER_SCALE_SIZE_NUMBER,
    SET_SLIDER_SCALE_SIZE_PX,
    THUMB_POSITION_CHANGE
} from "../ModelSliderActions/ModelSliderActions";

let modelSliderStore = <any>{
        modelSliderState: {
            sliderThumbs: { max: {thumbPosition: 'left: 250px', relativePosition: 0.578, scalePosition: 606},
                            min: {thumbPosition: 'left: 50px', relativePosition: 0.115, scalePosition: 122},
            },
            sliderScaleRange: {start: 0, end: 500, step: 1},
            sliderScale: {left: '', width: '' },
        },
        dispatch(action: ActionType){
            switch (action.type) {
                /*case ADD_THUMB:
                    return this.modelSliderState.sliderThumbs={
                        ...this.modelSliderState.sliderThumbs, [action.id]: {thumbPosition: action.position,
                            relativePosition: parseInt(action.position.match(/[-]*[0-9]+/)[0])/this.getSliderScaleSize(),
                            scalePosition: action.scalePosition}}*/
                case SET_SLIDER_SCALE_SIZE_PX:
                    return this.modelSliderState.sliderScale = {...this.modelSliderState.sliderScale, left: action.left, width: action.width}
                case SET_SLIDER_SCALE_SIZE_NUMBER:
                    return this.modelSliderState.sliderScaleRange = {...this.modelSliderState.sliderScaleRange,
                                                                        start: action.start,
                                                                        end: action.end,
                                                                        step: action.step}
                case THUMB_POSITION_CHANGE:
                   // console.log(this.modelSliderState.sliderThumbs)
                    return this.modelSliderState.sliderThumbs[action.id] = {
                        thumbPosition: `left: ${action.val < 0 ? 0 : action.val > this.getSliderScaleSize()-30 ? this.getSliderScaleSize()-30: action.val }px`,
                        relativePosition: action.val/this.getSliderScaleSize(),
                        scalePosition: Math.round(action.val/(this.getSliderScaleSize()-30)*this.getSliderScaleRange().end)<this.getSliderScaleRange().end ?
                            Math.round(action.val/(this.getSliderScaleSize()-30)*this.getSliderScaleRange().end):
                            this.getSliderScaleRange().end }
                default:
                    return this.modelSliderState
            }
        },
        getThumbPosition(id: string): number {
            return parseInt(this.modelSliderState.sliderThumbs[id].thumbPosition.match(/[-]*[0-9]+/))
        },
        getRelativeThumbPosition(id: string){
            return this.modelSliderState.sliderThumbs[id].relativePosition
        },
        getThumbStylePosition(id: string): string {
            return this.modelSliderState.sliderThumbs[id].thumbPosition
        },
        getThumbsDifference(): number {
            return this.getThumbPosition('max') - this.getThumbPosition('min')
        },
        getSliderScaleSize(): string {
            return this.modelSliderState.sliderScale.width
        },
        getSliderScaleRange(): {start: number, end: number} {
            return this.modelSliderState.sliderScaleRange
        },
        getSliderScaleLeftOffset(): number {
            return parseInt(this.modelSliderState.sliderScale.left)
        },
        getThumbScalePosition(id: string): number {
            return this.modelSliderState.sliderThumbs[id].scalePosition
        },
}

export default modelSliderStore