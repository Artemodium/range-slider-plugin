import {ADD_THUMB} from "../../../ModelSlider/ModelSliderActions/ModelSliderActions";

const $ = require('jquery');
import ModelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import {addThumb} from "../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";

class ViewThumb {
    private readonly selector: string
    private readonly element: string
    private readonly id: string
    private readonly value: string

    constructor(selector: string, element: string, id?: string, value?: string) {
        this.selector = selector;
        this.element = element
        this.id = id
        this.value = value
    }

    getViewThumb(): JQuery {
        ModelSliderStore.dispatch(addThumb(this.element, this.id, this.value))
        return $('<div>', {
           id:this.id, class: `${this.element}`, style: this.value
        }).appendTo(`${this.selector}`)
    }

    handle_mousedown(e: MouseEvent) {
        let drag: { pageY0: number; elem: HTMLElement; pageX0: number; offset0: { left: number, top: number } };
        drag = {
            pageX0: undefined,
            pageY0: undefined,
            elem: undefined,
            offset0: undefined
        };
        drag.pageX0 = e.pageX;
        drag.pageY0 = e.pageY;
        drag.elem = $(this);
        drag.offset0 = $(drag.elem).offset();

        function handle_dragging(e: MouseEvent) {
            let left = drag.offset0.left + (e.clientX - drag.pageX0);
            //let top = drag.offset0.top + (e.pageY - drag.pageY0);
            if(left>480&&left<780){
                $(drag.elem).offset({top: top, left: left});
                }
        }
        function handle_mouseup(e: MouseEvent) {
            $(document)
                .off('mousemove', handle_dragging)
                .off('mouseup', handle_mouseup);
        }
        $(document)
            .on('mouseup', handle_mouseup)
            .on('mousemove', handle_dragging);
    }

    handle_thumb(){
        $(this.element)
            .on('mousedown', this.handle_mousedown)
    }
}

export default ViewThumb