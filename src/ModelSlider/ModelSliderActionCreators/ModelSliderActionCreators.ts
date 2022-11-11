import {
    ADD_THUMB,
    SET_SLIDER_SCALE_SIZE_NUMBER,
    SET_SLIDER_SCALE_SIZE_PX, SET_THUMB_LOCK, SET_VIEW_RULER,
    THUMB_POSITION_CHANGE
} from "../ModelSliderActions/ModelSliderActions";

export let addThumb = (className: string, id:string, position: string, scalePosition: number) => ({
    type: ADD_THUMB,
    className: className,
    id: id,
    position: position,
    scalePosition: scalePosition
} as const)

export let onThumbPosChange = (id: string, val: number) => ({
   type: THUMB_POSITION_CHANGE,
   id: id,
   val: val
} as const)

export let setSliderScaleSizePx = (left: number, width: number) => ({
    type: SET_SLIDER_SCALE_SIZE_PX,
    left: left,
    width: width
} as const)

export let setThumbLock = (lock: boolean) => ({
    type: SET_THUMB_LOCK,
    lock: lock
} as const)

export let setSliderScaleSizeNumber = (start?: number, end?: number, step?: number) => ({
    type: SET_SLIDER_SCALE_SIZE_NUMBER,
    start: start,
    end: end,
    step: step
} as const)

export let setViewRuler = (start: number, end: number, step: number, width?: number) => ({
    type: SET_VIEW_RULER,
    start: start,
    end: end,
    step: step,
    width: width
} as const )