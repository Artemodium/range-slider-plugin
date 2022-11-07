import {
    ADD_THUMB,
    SET_SLIDER_SCALE_SIZE_PX,
    SET_SLIDER_SCALE_SIZE_NUMBER,
    THUMB_POSITION_CHANGE, SET_THUMB_LOCK
} from "../ModelSlider/ModelSliderActions/ModelSliderActions";

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
    scalePosition: number
}

export type setSliderScaleSizePX = {
    type: typeof SET_SLIDER_SCALE_SIZE_PX
    left: string
    width: string
}

export type setSliderScaleSizeNumber = {
    type: typeof SET_SLIDER_SCALE_SIZE_NUMBER
    start: number
    end: number
    step: number
}

export type setThumbLock = {
    type: typeof SET_THUMB_LOCK
    lock: boolean
}

export type ActionType = thumbPositionChangeActionType | addThumbActionType | setSliderScaleSizePX | setSliderScaleSizeNumber | setThumbLock