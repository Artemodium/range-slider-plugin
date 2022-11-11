import ModelSliderStore from "../../../ModelSlider/ModelSlideStore/ModelSliderStore";
import {setViewRuler} from "../../../ModelSlider/ModelSliderActionCreators/ModelSliderActionCreators";

const $ = require('jquery')

class ViewRuler {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }
    rulerInit = () => {
        ModelSliderStore.dispatch(setViewRuler(0, 1000, 1))
    }

    getViewRuler(): JQuery {
        let ruler = []
        let range = ModelSliderStore.getSliderScaleRange()
        /*let loopStep = range.end/(range.end*0.1)
        let big = range.end/(range.end*0.01)
        let middle = (range.end/(range.end*0.01))/2*/
       // console.log(ModelSliderStore.getSliderScaleSize())
        let loopLength = 100
        let loopStep = ModelSliderStore.getSliderScaleSize()/ModelSliderStore.getSliderScaleSize()
        let big = ModelSliderStore.getSliderScaleSize()/(ModelSliderStore.getSliderScaleSize()*0.1)
        let middle = ModelSliderStore.getSliderScaleSize()/(ModelSliderStore.getSliderScaleSize()*0.1)/2

        //console.log(loopLength, loopStep, big, middle)

        for(let i=range.start; i<=loopLength; i+=loopStep){
            if(i%big === 0)  ruler.push($('<div>', {class: "rulerMarkBig"}))
            else if(i%middle === 0) ruler.push($('<div>', {class: "rulerMarkMiddle"}))
            else ruler.push($('<div>', {class: "rulerMarkSmall"}))
        }
        let elem = $('<div>', {class: this.element})
        ruler.forEach(el => {
            el.appendTo(elem)
        })
        return (elem).appendTo(`${ this.selector }`)
    }

    observeRulerSize() {
        let observer = new ResizeObserver(obj => {
            const e = obj[0];
            this.getViewRuler()
        })
        observer.observe($(this.selector)[0])
    }
}

export default ViewRuler