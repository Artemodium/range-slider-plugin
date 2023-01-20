import {
    ADD_THUMB,
    SET_SLIDER_SCALE_SIZE_PX,
    SET_SLIDER_SCALE_SIZE_NUMBER,
    THUMB_POSITION_CHANGE,
    SET_THUMB_LOCK,
    SET_VIEW_RULER,
    SCALE_THUMB_POSITION_PLUS_MINUS,
    SET_SLIDER_SCALE_SIZE_RELATIVE,
    THUMB_WIDTH_CHANGE,
    THUMB_HEIGHT_CHANGE,
    THUMB_BORDER_WIDTH_CHANGE,
    THUMB_BORDER_RADIUS_CHANGE,
    TOP_THUMB_POSITION_CHANGE,
    THUMB_BACKGROUND_COLOR_CHANGE,
    THUMB_BORDER_COLOR_CHANGE,
    TEXT_INPUT_CHANGE_THUMBS_POSITION,
    TEXT_INPUT_CHANGE_THUMBS_WIDTH,
    TEXT_INPUT_CHANGE_THUMBS_HEIGHT,
    TEXT_INPUT_CHANGE_BORDER_WIDTH, TEXT_INPUT_CHANGE_BORDER_RADIUS, TEXT_INPUT_CHANGE_THUMBS_TOP
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

export type setSliderScaleSizeRelative = {
    type: typeof SET_SLIDER_SCALE_SIZE_RELATIVE
    width: number
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

export type setViewRuler = {
    type: typeof SET_VIEW_RULER
    start: number
    end: number
    step: number
    width: number
}

export type scaleThumbPositionPlusMinus = {
    type: typeof SCALE_THUMB_POSITION_PLUS_MINUS
    id: string
    val: number
    plus: boolean
}

export type thumbWidthChange = {
    type: typeof THUMB_WIDTH_CHANGE
    val: number
}

export type thumbHeightChange = {
    type: typeof THUMB_HEIGHT_CHANGE
    val: number
}

export type thumbBorderWidthChange = {
    type: typeof THUMB_BORDER_WIDTH_CHANGE
    val: number
}

export type thumbBorderRadiusChange = {
    type: typeof THUMB_BORDER_RADIUS_CHANGE
    val: number
}

export type topThumbPositionChange = {
    type: typeof TOP_THUMB_POSITION_CHANGE
    val: number
}

export type thumbBackgroundColorChange = {
    type: typeof THUMB_BACKGROUND_COLOR_CHANGE
    val: string
}

export type thumbBorderColorChange = {
    type: typeof THUMB_BORDER_COLOR_CHANGE
    val: string
}

export type textInputChangeThumbsPosition = {
    type: typeof TEXT_INPUT_CHANGE_THUMBS_POSITION
    id: string
    val: string
}

export type textInputChangeThumbsWidth = {
    type: typeof TEXT_INPUT_CHANGE_THUMBS_WIDTH
    val: string
}

export type textInputChangeThumbsHeight = {
    type: typeof TEXT_INPUT_CHANGE_THUMBS_HEIGHT
    val: string
}

export type textInputChangeBorderWidth = {
    type: typeof TEXT_INPUT_CHANGE_BORDER_WIDTH
    val: string
}

export type textInputChangeBorderRadius = {
    type: typeof TEXT_INPUT_CHANGE_BORDER_RADIUS
    val: string
}

export type textInputChangeThumbsTop = {
    type: typeof TEXT_INPUT_CHANGE_THUMBS_TOP
    val: string
}

export type ActionType = thumbPositionChangeActionType
                        | addThumbActionType
                        | setSliderScaleSizePX
                        | setSliderScaleSizeNumber
                        | setThumbLock
                        | setViewRuler
                        | scaleThumbPositionPlusMinus
                        | setSliderScaleSizeRelative
                        | thumbWidthChange
                        | thumbHeightChange
                        | thumbBorderWidthChange
                        | thumbBorderRadiusChange
                        | topThumbPositionChange
                        | thumbBackgroundColorChange
                        | thumbBorderColorChange
                        | textInputChangeThumbsPosition
                        | textInputChangeThumbsWidth
                        | textInputChangeThumbsHeight
                        | textInputChangeBorderWidth
                        | textInputChangeBorderRadius
                        | textInputChangeThumbsTop
