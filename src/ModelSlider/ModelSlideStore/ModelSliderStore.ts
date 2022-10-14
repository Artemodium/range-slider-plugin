import {ActionType} from "../../slider-app-types/slider-app-types";
import {ADD_THUMB, THUMB_POSITION_CHANGE} from "../ModelSliderActions/ModelSliderActions";

let modelSliderStore = <any>{
        modelSliderState: {
            sliderThumbs: { }
        },
        dispatch(action: ActionType){
            switch (action.type) {
                case ADD_THUMB:
                    return this.modelSliderState.sliderThumbs={...this.modelSliderState.sliderThumbs, [action.id]: {thumbPosition: action.position}}
                case THUMB_POSITION_CHANGE:
                    return this.modelSliderState.sliderThumbs[action.id].thumbPosition = `left: ${action.val}px`
                default:
                    return this.modelSliderState
            }
        },
        getThumbPosition(id: string): number {
            return parseInt(this.modelSliderState.sliderThumbs[id].thumbPosition.match(/[-]*[0-9]+/))
        },
        getThumbStylePosition(id: any): string {
            return this.modelSliderState.sliderThumbs[id].thumbPosition ? this.modelSliderState.sliderThumbs[id].thumbPosition : 'left: 100px'
        }
}

export default modelSliderStore