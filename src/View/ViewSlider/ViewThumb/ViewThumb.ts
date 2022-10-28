const $ = require('jquery');
import ModelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore";

class ViewThumb {
    private readonly selector: string
    private readonly topElement: string
    private readonly element: string
    private readonly bottomElement: string
    private readonly container: string;
    private readonly id: string
    private readonly value: string

    constructor(selector: string, topElement: string, element: string, bottomElement: string, container: string, id?: string, value?: string) {
        this.selector = selector;
        this.topElement = topElement
        this.element = element
        this.bottomElement = bottomElement
        this.container = container
        this.id = id
        this.value = value
        this.handle_mousedown = this.handle_mousedown.bind(this)
    }

    getViewThumb(): JQuery {
        let thumb: JQuery[] = [
            $('<div>', {id: this.id, class: `${this.topElement}`}),
            /*$('<div>', {id: this.id, class: `${this.element}`, style: ModelSliderStore.getThumbStylePosition(this.id)}),*/
            $('<div>', {id: this.id, class: `${this.bottomElement}`})
        ]
        thumb.forEach((el: JQuery)=> {
            el.appendTo(($(`#${this.id}.view__thumb`)))})
        return
    }
    /*getViewThumb(): JQuery {
        return $('<div>', {
           id:this.id, class: `${this.element}`, style: ModelSliderStore.getThumbStylePosition(this.id)
        }).appendTo(`${this.selector}`)
    }*/

    handle_mousedown(e: MouseEvent) {
        let drag: { pageY0: number; elem: HTMLElement; container:string; pageX0: number; offset0: { left: number, top: number }};
        drag = {
            pageX0: undefined,
            pageY0: undefined,
            elem: undefined,
            container: this.container,
            offset0: undefined,
        };
        drag.pageX0 = e.pageX;
        drag.pageY0 = e.pageY;
        drag.elem =$(`#${this.id}.${this.element}`);
        drag.offset0 = $(drag.elem).offset();

        function handle_dragging(e: MouseEvent) {
            let min = ModelSliderStore.getThumbPosition('min')
            let max = ModelSliderStore.getThumbPosition('max')
            let left = drag.offset0.left + (e.clientX - drag.pageX0)
            //let top = drag.offset0.top + (e.pageY - drag.pageY0);
            if ($(drag.elem)[0].id === 'min') {
                if (left > $(drag.container)[0].offsetLeft &&
                    left < $(drag.container)[0].offsetLeft + max) {
                    $(drag.elem).offset({top: top, left: left})
                } else if (e.clientX < $(drag.container)[0].offsetLeft) {
                    $(drag.elem).offset({top: top, left: $(drag.container)[0].offsetLeft})
                } else if (e.clientX > drag.offset0.left + max){
                    $(drag.elem).offset({
                        top: top,
                        left: $(drag.container)[0].offsetLeft + max
                    })
                }
            }
            else if ($(drag.elem)[0].id === 'max') {
                if (left > $(drag.container)[0].offsetLeft + min && left < $(drag.container)[0].offsetLeft + $(drag.container)[0].offsetWidth - 20) {
                    $(drag.elem).offset({top: top, left: left})
                } else if (e.clientX < $(drag.container)[0].offsetLeft + min) {
                    $(drag.elem).offset({top: top, left: $(drag.container)[0].offsetLeft + min})
                } else if (e.clientX > drag.offset0.left){
                    $(drag.elem).offset({
                        top: top,
                        left: $(drag.container)[0].offsetLeft + $(drag.container)[0].offsetWidth - 30
                    })
                }
            }
        }
        function handle_mouseup() {
            $(window)
                .off('mousemove', handle_dragging)
                .off('mouseup', handle_mouseup)
        }

        $(window)
            .on('mouseup', handle_mouseup)
            .on('mousemove', handle_dragging)
    }

    handle_thumb() {
        $(`#${this.id}.${this.element}`)
            .on('mousedown', this.handle_mousedown)
    }
}

export default ViewThumb