import renderSlider  from './renderSlider/renderSlider'
import ViewSlider from './View/ViewSlider/ViewSlider'
import ThumbPositionControllerContent from './View/ViewController/ThumbPositionController/ThumbPositionControllerContent/ThumbPositionControllerContent'
import ScalePositionControllerContent
    from './View/ViewController/ScalePositionController/ScalePositionControllerContent/ScalePositionControllerContent'
import ViewController from './View/ViewController/ViewController'
import ViewRuler from "./View/ViewSlider/ViewRuler/ViewRuler"
import SliderInit from "./renderSlider/SliderInit"
import modelSliderStore from "./ModelSlider/ModelSlideStore/ModelSliderStore"
import ControlCard from "./View/ViewController/ControlCard/ControlCard"

SliderInit.startSliderInit(modelSliderStore.modelSliderState)

new renderSlider('.my-slider-custom-plugin').getRenderSlider()

let viewSlider = new ViewSlider(
    '.my-slider-custom-app',
    'my-slider-custom-app__view')
viewSlider.getViewSlider()
viewSlider.getSliderMaxMinValues()
viewSlider.getSliderThumbs()
viewSlider.getSliderScales()

let viewController = new ViewController(
    "my-slider-custom-plugin",
    "view__controller-container")
viewController.getViewController()

viewController.getViewControllerContainer("thumb__position-controller")
viewController.getViewControllerContent(
    'view__thumb-input-container',
    "thumb__position-controller",
    "thumbs:")

let  thumbPositionControllerContent = new ThumbPositionControllerContent(
    '.view__thumb-input-container',
    'topThumb',
    'control-input__value',
    'bottomThumb',
    ["min", "max"],
    '.view__thumb',
    "thumb-input-container",
    "thumb-input-value")
thumbPositionControllerContent.observeThumbPosition()

let thumbsControlCard = new ControlCard(
    '.view__thumb-input-container',
    'control-input__value',
    '.view__thumb',
    [{"title":"Min thumb", "id":"min", "inputVariant": "_changeable", "dataExchangeMethod": "thumb-position"},
        {"title":"Max thumb", "id": "max", "inputVariant": "_changeable", "dataExchangeMethod": "thumb-position"},
        {"title":"Width thumb", "id": "thumb-width", "inputVariant": "_changeable", "dataExchangeMethod": "thumb-width"},
        {"title":"Height thumb", "id": "thumb-height", "inputVariant": "_changeable", "dataExchangeMethod": "thumb-height"},
        {"title":"Shadow thumb", "id": "thumb-shadow", "inputVariant": "_changeable", "type": ""},
        {"title":"Border width thumb", "id": "thumb-border-width", "inputVariant": "_changeable", "dataExchangeMethod": "thumb-border-width"},
        {"title":"Border radius thumb", "id": "thumb-border-radius", "inputVariant": "_changeable","dataExchangeMethod": "thumb-border-radius"},
        {"title":"Top thumb position", "id": "top-thumb-position", "inputVariant": "_changeable","dataExchangeMethod": "top-thumb-position"},
        {"title":"Background color thumb", "id": "thumb-background-color", "inputVariant": "_colorable", "dataExchangeMethod": "thumb-background-color"},
        {"title":"Border color thumb", "id": "thumb-border-color", "inputVariant": "_colorable", "dataExchangeMethod": "thumb-border-color", "type": ""}],
    "thumb-input__element",
    "thumb-input-value",
    "thumbs")
thumbsControlCard.addControlElementsToCard()

viewController.getViewControllerContainer("scale__position-controller")
viewController.getViewControllerContent(
    'view__scale-input-container',
    "scale__position-controller",
    "scale:")

let scalePositionControllerContent = new ScalePositionControllerContent(
    '.view__scale-input-container',
    'scale__position-controller-input',
    '.view__thumb',
    ['min', 'max'],
    'my-slider-custom-app__view')
scalePositionControllerContent.observeScaleSize("scale-px", "scale-input-value")

let scaleControlCard = new ControlCard(
    '.view__scale-input-container',
    'control-input__value',
    '.view__thumb',
    [{"title":"Scale length", "id":"scale-px", "inputVariant": "_displayed", "type": ""},
        {"title":"Scale length relative", "id": "scale-rel", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale start", "id": "scale-start", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale step", "id": "scale-step", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale end", "id": "scale-end", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale height", "id": "scale-height", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale track color", "id": "scale-track-color", "inputVariant": "_colorable", "type": ""},
        {"title":"Scale backLine color", "id": "scale-backLine-color", "inputVariant": "_colorable", "type": ""}],
    "scale-input__element",
    "scale-input-value",
    "scale"
)
scaleControlCard.addControlElementsToCard()

viewController.getViewControllerContainer("slider__position-controller")
viewController.getViewControllerContent(
    'view__slider-input-container',
    "slider__position-controller",
    "slider:")


let sliderControlCard = new ControlCard(
    '.view__slider-input-container',
    'control-input__value',
    '.view__thumb',
    [{"title":"Slider orientation", "id": "slider-orientation", "inputVariant": "_selectable", "options": "horizontal, vertical", "type": ""},
        {"title":"Slider ruler position", "id": "slider-ruler", "inputVariant": "_selectable", "options": "top, bottom, both, off", "type": ""},
        {"title":"Slider thumbs values", "id": "slider-thumbs-values", "inputVariant": "_selectable", "options": "top, bottom, both, off", "type": ""},
        {"title":"Number of the thumbs", "id": "slider-thumbs-count", "inputVariant": "_selectable", "options": "one, two", "type": ""},
        {"title":"Slider title", "id": "slider-title", "inputVariant": "_selectable", "options": "on, off", "type": ""}],
    "slider-input__element",
    "slider-input-value",
    "slider"
)
sliderControlCard.addControlElementsToCard()

new ViewRuler('.view__ruler-container', 'view__ruler').getViewRuler()
viewSlider.getViewRuler()