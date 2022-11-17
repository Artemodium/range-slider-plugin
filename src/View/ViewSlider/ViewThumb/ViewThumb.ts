const $ = require('jquery')
import {setThumbLock} from "../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators"
import ModelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore"

class ViewThumb {
    private readonly selector: string
    private readonly topElement: string
    private readonly element: string
    private readonly bottomElement: string
    private readonly container: string
    private readonly id: string
    private readonly value: string

    constructor(selector: string, topElement: string, element: string, bottomElement: string, container: string, id?: string, value?: string) {
        this.selector = selector
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
            $('<div>', {id: this.id, class: `${this.bottomElement}`})
        ]
        thumb.forEach((el: JQuery)=> {
            el.appendTo(($(`#${this.id}.${this.element}`)))})
        return
    }

    handle_mousedown(e: MouseEvent) {
        let drag: { pageY0: number; elem: HTMLElement; container:string; pageX0: number; offset0: { left: number, top: number }}
        drag = {
            pageX0: undefined,
            pageY0: undefined,
            elem: undefined,
            container: this.container,
            offset0: undefined,
        };
        drag.pageX0 = e.pageX
        drag.pageY0 = e.pageY
        drag.elem = $(`#${this.id}.${this.element}`)
        drag.offset0 = $(drag.elem).offset()

        function handle_dragging(e: MouseEvent) {
            let min = ModelSliderStore.getThumbPosition('min')
            let max = ModelSliderStore.getThumbPosition('max')
            let left = drag.offset0.left + (e.clientX - drag.pageX0)
            let containerLength = $(drag.container)[0].offsetLeft + $(drag.container)[0].offsetWidth
            //let top = drag.offset0.top + (e.pageY - drag.pageY0)
            if ($(drag.elem)[0].id === 'min') {
                if (left > $(drag.container)[0].offsetLeft &&
                    left < $(drag.container)[0].offsetLeft + max) {
                    ModelSliderStore.dispatch(setThumbLock(false))
                    $(drag.elem).offset({top: top, left: left})
                } else if (e.clientX < $(drag.container)[0].offsetLeft) {
                    ModelSliderStore.dispatch(setThumbLock(false))
                    $(drag.elem).offset({top: top, left: $(drag.container)[0].offsetLeft})
                } else if (e.clientX > $(drag.container)[0].offsetLeft + max){
                    $(drag.elem).offset({top: top, left: $(drag.container)[0].offsetLeft + max
                    })
                    ModelSliderStore.dispatch(setThumbLock(true))
                    $('.view__scale-track')
                        .css({width: 0})
                }
            }
            else if ($(drag.elem)[0].id === 'max') {
                if (left > $(drag.container)[0].offsetLeft + min && left < containerLength - 5) {
                    ModelSliderStore.dispatch(setThumbLock(false))
                    $(drag.elem).offset({top: top, left: left})
                } else if (e.clientX < $(drag.container)[0].offsetLeft + min) {
                    ModelSliderStore.dispatch(setThumbLock(true))
                    $(drag.elem).offset({top: top, left: $(drag.container)[0].offsetLeft + min})
                    $('.view__scale-track')
                        .css({width: 0})
                } else if (e.clientX > containerLength) {
                    ModelSliderStore.dispatch(setThumbLock(false))
                    $(drag.elem).offset({
                        top: top,
                        left: $(drag.container)[0].offsetLeft + $(drag.container)[0].offsetWidth - 5
                    })
                }
            }
        }
        function handle_mouseup(e: MouseEvent) {
            $(document)
                .off('mousemove', handle_dragging)
                .off('mouseup', handle_mouseup)
        }
        $(document)
            .on('mouseup', handle_mouseup)
            .on('mousemove', handle_dragging)
    }

    handle_thumb() {
        $(`#${this.id}.${this.element}`)
            .on('mousedown', this.handle_mousedown)
    }
}

export default ViewThumb