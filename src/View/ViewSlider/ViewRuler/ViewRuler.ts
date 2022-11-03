import ModelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore";

const $ = require('jquery')

class ViewRuler {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewRuler(): JQuery {
        let ruler = []
        let range = ModelSliderStore.getSliderScaleRange()

        for(let i=range.start; i<=range.end/10; i++){
            i%10 === 0 ?
            ruler.push($('<span>', {class: "rulerMarkBig", text:"|"})) :
                ruler.push($('<span>', {class: "rulerMarkSmall", text:"|"}))
        }
        let elem = $('<div>', {class: this.element})
        ruler.forEach(el => {
            el.appendTo(elem)
        })
        return (elem
        ).appendTo(`${ this.selector }`)
    }
}

export default ViewRuler