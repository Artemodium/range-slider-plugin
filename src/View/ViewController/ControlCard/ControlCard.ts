import ControlInputElement from "../ControlElements/ControlInputElement/ControlInputElement"
import ControlInputThumbs from "../ControlElements/ControlLogic/ControlInputThumbs/ControlInputThumbs"
import ControlInputScale from "../ControlElements/ControlLogic/ControlInputScale/ControllnputScale"

class ControlCard{
    private readonly selector: string
    private readonly element: string
    private readonly controlElement: string
    private readonly templateParameters: {[key:string]: string}[]
    private readonly controlInputElementContainer: string
    private readonly inputValue: string
    private readonly inputControlType: string

    constructor(selector: string,
                element: string,
                controlElement: string,
                templateParameters: {[key:string]: string}[],
                controlInputElementContainer: string,
                inputValue: string,
                inputControlType: string) {
        this.selector = selector
        this.element = element
        this.controlElement = controlElement
        this.templateParameters = templateParameters
        this.controlInputElementContainer = controlInputElementContainer
        this.inputValue = inputValue
        this.inputControlType = inputControlType
    }

    addControlElementsToCard() {
        this.templateParameters.forEach(parameter => {
            let controlElement = new ControlInputElement(
                this.controlInputElementContainer,
                this.selector,
                parameter.title,
                "input-control__value-plus",
                "input-control__value-minus",
                parameter.id,
                this.inputValue,
                parameter.inputVariant,
                this.controlInputElementContainer
            )

            switch (parameter.inputVariant) {
                case "_changeable":
                    controlElement.getControlElementChangeable(parameter.id)
                    break
                case "_selectable":
                    controlElement.getControlElementSelectable(parameter.id)
                    break
                case "_colorable":
                    controlElement.getControlElementColorable(parameter.id)
                    break
                case "_displayed":
                    controlElement.getControlElementDisplayed(parameter.id)
                    break
            }

            switch (this.inputControlType) {
                case ("thumbs"):
                    new ControlInputThumbs(
                        this.selector,
                        parameter.id,
                        this.controlElement,
                        "input-control__value-plus",
                        "input-control__value-minus").getControl()
                    break
                case ("scale"):
                    new ControlInputScale(
                        'my-slider-custom-app__view',
                        "scale__position-controller-container",
                        "scale-input-value",
                        parameter.id,
                        "input-control__value-plus",
                        "input-control__value-minus").getControl()
                    break
            }
        })
    }
}

export default ControlCard