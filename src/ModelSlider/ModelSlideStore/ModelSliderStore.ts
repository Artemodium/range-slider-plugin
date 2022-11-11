import {ActionType} from "../../slider-app-types/slider-app-types";
import {
    ADD_THUMB,
    SET_SLIDER_SCALE_SIZE_NUMBER,
    SET_SLIDER_SCALE_SIZE_PX, SET_THUMB_LOCK, SET_VIEW_RULER,
    THUMB_POSITION_CHANGE
} from "../ModelSliderActions/ModelSliderActions";
import $ from "jquery";

let modelSliderStore = <any>{
        modelSliderState: {
            sliderThumbs: { max: { },
                            min: { },
            },
            sliderScaleRange: { },
            sliderScale: { },
            ruler: { },
            lock: { }
        },
        dispatch(action: ActionType){
            //console.log(this.modelSliderState.sliderThumbs)
            switch (action.type) {
                case ADD_THUMB:
                    return this.modelSliderState.sliderThumbs={
                        ...this.modelSliderState.sliderThumbs, [action.id]: {thumbPosition: action.position,
                            relativePosition: parseInt(action.position.match(/[-]*[0-9]+/)[0])/this.getSliderScaleSize(),
                            scalePosition: action.scalePosition}}
                case SET_SLIDER_SCALE_SIZE_PX:
                    //console.log(this.modelSliderState.sliderScale.width)
                    return this.modelSliderState.sliderScale = {...this.modelSliderState.sliderScale, left: action.left, width: action.width}
                case SET_SLIDER_SCALE_SIZE_NUMBER:
                    return this.modelSliderState.sliderScaleRange = {...this.modelSliderState.sliderScaleRange,
                                                                        start: action.start,
                                                                        end: action.end,
                                                                        step: action.step}
                case THUMB_POSITION_CHANGE:
                    if (!modelSliderStore.isThumbLock()) {
                        return this.modelSliderState.sliderThumbs[action.id] = {
                            thumbPosition: `left: ${action.val < 0 ? 0 : action.val > this.getSliderScaleSize() - 30 ? this.getSliderScaleSize() - 30 : action.val}px`,
                            relativePosition: this.calculateRelativeThumbPosition(action.val),
                            scalePosition: this.calculateScalePosition(action.val)
                        }
                    }
                    else
                        return this.modelSliderState.sliderThumbs[action.id] = {
                            thumbPosition: `left: ${action.val < this.getThumbPosition('min') ? this.getThumbPosition('min') : 
                                action.val > this.getThumbPosition('max') ? this.getThumbPosition('max'): action.val}px`,
                            relativePosition: this.calculateRelativeThumbPosition(action.val),
                            scalePosition: this.calculateScalePosition(action.val)
                        }
                case SET_THUMB_LOCK:
                    return this.modelSliderState.lock.lock = action.lock
                case SET_VIEW_RULER:
                    return {...this.modelSliderState.ruler, start: action.start, end: action.end, step: action.step, width: action.width}
                default:
                    return this.modelSliderState
            }
        },

        calculateRelativeThumbPosition(val: number) {
            return val / this.getSliderScaleSize()
        },
        calculateScalePosition(val: number) {
            return Math.round(val / (this.getSliderScaleSize() - 30) * this.getSliderScaleRange().end) < this.getSliderScaleRange().end ?
                    Math.round(val / (this.getSliderScaleSize() - 30) * this.getSliderScaleRange().end) :
                    this.getSliderScaleRange().end
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
        isThumbLock(): boolean {
            return this.modelSliderState.lock.lock
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
        thumbsObserver(observableFunc: any): void {
            let observer = new MutationObserver(observableFunc)
            $(".view__thumb").each((thumb: number) => {
                observer.observe($(".view__thumb")[thumb], {attributes: true})})
        },
        getScaleRulerDelimiter(): number {
            return this.modelSliderState.sliderScaleRange.end/10
        },
        getRuleSizes(): {start: number, end: number, step: number, width: number} {
            return this.modelSliderState.ruler
        }
}

export default modelSliderStore