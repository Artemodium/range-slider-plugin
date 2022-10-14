import {ADD_THUMB, THUMB_POSITION_CHANGE} from "../ModelSlider/ModelSliderActions/ModelSliderActions";

export type thumbPositionChangeActionType = {
    type: typeof THUMB_POSITION_CHANGE
    id: string
    val: number
}

export type addThumbActionType = {
    type: typeof ADD_THUMB
    className: string
    id: string
    position: string
}

export type ActionType = thumbPositionChangeActionType | addThumbActionType