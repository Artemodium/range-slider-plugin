import {
    ADD_THUMB,
    SCALE_THUMB_POSITION_PLUS_MINUS,
    SET_SLIDER_SCALE_SIZE_NUMBER,
    SET_SLIDER_SCALE_SIZE_PX,
    SET_SLIDER_SCALE_SIZE_RELATIVE,
    SET_THUMB_LOCK,
    SET_VIEW_RULER, THUMB_BORDER_RADIUS_CHANGE,
    THUMB_BORDER_WIDTH_CHANGE,
    THUMB_HEIGHT_CHANGE,
    THUMB_POSITION_CHANGE,
    THUMB_WIDTH_CHANGE, TOP_THUMB_POSITION_CHANGE
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

export let setSliderScaleSizeRelative = (width: number) => ({
    type: SET_SLIDER_SCALE_SIZE_RELATIVE,
    width: width
} as const)

export let setSliderScaleSizeNumber = (start?: number, end?: number, step?: number) => ({
    type: SET_SLIDER_SCALE_SIZE_NUMBER,
    start: start,
    end: end,
    step: step
} as const)

export let setThumbLock = (lock: boolean) => ({
    type: SET_THUMB_LOCK,
    lock: lock
} as const)

export let setViewRuler = (start: number, end: number, step: number, width?: number) => ({
    type: SET_VIEW_RULER,
    start: start,
    end: end,
    step: step,
    width: width
} as const )

export const onThumbPositionPlusMinus = (id: string, val: number, plus: boolean) => ({
    type: SCALE_THUMB_POSITION_PLUS_MINUS,
    id: id,
    val: val,
    plus: plus
} as const)

export const onThumbWidthChange = (val: number) => ({
    type: THUMB_WIDTH_CHANGE,
    val: val
} as const)

export const onThumbHeightChange = (val: number) => ({
    type: THUMB_HEIGHT_CHANGE,
    val: val
} as const)

export const onThumbBorderWidthChange = (val: number) => ({
    type: THUMB_BORDER_WIDTH_CHANGE,
    val: val
} as const)

export const onThumbBorderRadiusChange = (val: number) => ({
    type: THUMB_BORDER_RADIUS_CHANGE,
    val: val
} as const)

export const onThumbTopPositionChange = (val: number) => ({
    type: TOP_THUMB_POSITION_CHANGE,
    val: val
} as const)
