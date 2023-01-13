import {ActionType} from "../../slider-app-types/slider-app-types";

import {
    SCALE_THUMB_POSITION_PLUS_MINUS,
    SET_SLIDER_SCALE_SIZE_NUMBER,
    SET_SLIDER_SCALE_SIZE_PX,
    SET_SLIDER_SCALE_SIZE_RELATIVE,
    SET_THUMB_LOCK,
    SET_VIEW_RULER,
    TEXT_INPUT_CHANGE,
    THUMB_BACKGROUND_COLOR_CHANGE,
    THUMB_BORDER_COLOR_CHANGE,
    THUMB_BORDER_RADIUS_CHANGE,
    THUMB_BORDER_WIDTH_CHANGE,
    THUMB_HEIGHT_CHANGE,
    THUMB_POSITION_CHANGE,
    THUMB_WIDTH_CHANGE,
    TOP_THUMB_POSITION_CHANGE
} from "../ModelSliderActions/ModelSliderActions";

let modelSliderStore = <any>{
        modelSliderState: {
            sliderThumbs: {
                max: { },
                min: { },
                metrics: { },
                styles: { }
            },
            sliderScaleRange: { },
            sliderScale: { },
            ruler: { },
            lock: { }
        },
        dispatch(action: ActionType){
            switch (action.type) {
                /*case ADD_THUMB:
                    return this.modelSliderState.sliderThumbs={
                        ...this.modelSliderState.sliderThumbs, [action.id]: {thumbPosition: action.position,
                            relativePosition: parseInt(action.position.match(/[-]*[0-9]+/)[0])/this.getSliderScaleSize(),
                            scalePosition: action.scalePosition}}*/
                case SET_SLIDER_SCALE_SIZE_PX:
                    return this.modelSliderState.sliderScale = {...this.modelSliderState.sliderScale,
                                                                    left: action.left,
                                                                    width: action.width,
                                                                    stepRelative: (parseInt(action.width)-5)/this.getSliderScaleEnd()}
                case SET_SLIDER_SCALE_SIZE_NUMBER:
                    return this.modelSliderState.sliderScaleRange = {...this.modelSliderState.sliderScaleRange,
                                                                        start: action.start,
                                                                        end: action.end,
                                                                        step: action.step}
                case SET_SLIDER_SCALE_SIZE_RELATIVE:
                    console.log(this.modelSliderState.sliderScale)
                    return this.modelSliderState.sliderScale = {...this.modelSliderState.sliderScale,
                                                                    widthRelative: action.width }
                case THUMB_POSITION_CHANGE:
                    if (!modelSliderStore.isThumbLock()) {
                        return this.modelSliderState.sliderThumbs[action.id] = {
                            thumbPosition: `left: ${action.val < 0 ? 0 : action.val > this.getSliderScaleSize() - 5 ? this.getSliderScaleSize() - 5 : action.val}px`,
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
                case SCALE_THUMB_POSITION_PLUS_MINUS:
                        let mod = action.plus ? 1 : -1
                        let val = action.val * mod
                        let PX_val = Math.round(this.getSliderScaleSize() / 100) * mod
                        let relative_val = val / PX_val * mod
                            return {
                                ...this.modelSliderState.sliderThumbs[action.id] = {
                                    thumbPosition: `left: ${this.getThumbPosition(action.id) + PX_val}px`,
                                    relativePosition: this.getRelativeThumbPosition(action.id) + relative_val,
                                    scalePosition: this.getThumbScalePosition(action.id) + val
                                }
                            }
                case THUMB_WIDTH_CHANGE:
                    return { ...this.modelSliderState.sliderThumbs.metrics.width += action.val }
                case THUMB_HEIGHT_CHANGE:
                    this.modelSliderState.sliderThumbs.metrics.height += action.val
                    this.modelSliderState.sliderThumbs.metrics.top -= action.val/1.5
                    break
                case THUMB_BORDER_WIDTH_CHANGE:
                    this.modelSliderState.sliderThumbs.metrics.top -= action.val
                    this.modelSliderState.sliderThumbs.metrics.borderWidth += action.val
                    break
                case THUMB_BORDER_RADIUS_CHANGE:
                    this.modelSliderState.sliderThumbs.metrics.borderRadius += action.val
                    break
                case TOP_THUMB_POSITION_CHANGE:
                    this.modelSliderState.sliderThumbs.metrics.top += action.val
                    break
                case THUMB_BACKGROUND_COLOR_CHANGE:
                    this.modelSliderState.sliderThumbs.metrics.backgroundColor = action.val
                    break
                case THUMB_BORDER_COLOR_CHANGE:
                    this.modelSliderState.sliderThumbs.metrics.borderColor = action.val
                    break
                case TEXT_INPUT_CHANGE:
                    this.modelSliderState.sliderThumbs[action.id].thumbPosition = `left: ${action.val}px`
                    break
                default:
                    return this.modelSliderState
            }
        },

        calculateRelativeThumbPosition(val: number) {
            return val / this.getSliderScaleSize()
        },
        calculateScalePosition(val: number) {
            return Math.round(val / (this.getSliderScaleSize() - 5) * this.getSliderScaleRange().end) < this.getSliderScaleRange().end ?
                    Math.round(val / (this.getSliderScaleSize() - 5) * this.getSliderScaleRange().end) :
                    this.getSliderScaleRange().end
        },
        getThumbPosition(id: string): number {
            return parseInt(this.modelSliderState.sliderThumbs[id].thumbPosition.match(/-*[0-9]+/))
        },
        getRelativeThumbPosition(id: string){
            return this.modelSliderState.sliderThumbs[id].relativePosition
        },
        getThumbStylePosition(id: string): string {
            return this.modelSliderState.sliderThumbs[id].thumbPosition
        },
        getThumbWidth(): number{
            return this.modelSliderState.sliderThumbs.metrics.width
        },
        getThumbHeight(): number{
            return this.modelSliderState.sliderThumbs.metrics.height
        },
        getThumbBorderWidth(): number{
            return this.modelSliderState.sliderThumbs.metrics.borderWidth
        },
        getThumbBorderRadius(): number{
            return this.modelSliderState.sliderThumbs.metrics.borderRadius
        },
        getThumbTop(): number{
            return this.modelSliderState.sliderThumbs.metrics.top
        },
        getThumbBackgroundColor(): number{
            return this.modelSliderState.sliderThumbs.metrics.backgroundColor
        },
        getThumbBorderColor(): number{
            return this.modelSliderState.sliderThumbs.metrics.borderColor
        },
        getThumbScalePosition(id: string): number {
            return this.modelSliderState.sliderThumbs[id].scalePosition
        },
        getThumbsDifference(): number {
            return this.getThumbPosition('max') - this.getThumbPosition('min')
        },
        getThumbsDifferenceOnScale(): number {
            return this.getThumbScalePosition('max') - this.getThumbScalePosition('min')
        },
        isThumbLock(): boolean {
            return this.modelSliderState.lock.lock
        },
        getSliderScaleSize(): string {
            return this.modelSliderState.sliderScale.width
        },
        getSliderScaleStart(): string {
            return this.modelSliderState.sliderScaleRange.start
        },
        getSliderScaleEnd(): number {
          return this.modelSliderState.sliderScaleRange.end
        },
        getSliderScaleStepRelative(): number {
            return this.modelSliderState.sliderScale.stepRelative
        },
        getSliderScaleSizeRelative(): number {
            return this.modelSliderState.sliderScale.widthRelative
        },
        getSliderScaleRange(): {start: number, end: number} {
            return this.modelSliderState.sliderScaleRange
        },
        getSliderScaleLeftOffset(): number {
            return parseInt(this.modelSliderState.sliderScale.left)
        },
}

export default modelSliderStore