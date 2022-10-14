import {ADD_THUMB, THUMB_POSITION_CHANGE} from "../ModelSliderActions/ModelSliderActions";

export let addThumb = (className: string, id:string, position: string) => ({
    type: ADD_THUMB,
    className: className,
    id: id,
    position: position
} as const)

export let onThumbPosChange = (id:string, val: number) => ({
   type: THUMB_POSITION_CHANGE,
   id: id,
   val: val
} as const)