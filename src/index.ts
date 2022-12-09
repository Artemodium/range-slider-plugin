import renderSlider  from './renderSlider/renderSlider'
import ViewSlider from './View/ViewSlider/ViewSlider'
import ThumbPositionControllerContent from './View/ViewController/ThumbPositionController/ThumbPositionControllerContent/ThumbPositionControllerContent';
import ThumbPositionControllerContainer from './View/ViewController/ThumbPositionController/ThumbPositionControllerContainer/ThumbPositionControllerContainer';
import ScalePositionController from './View/ViewController/ScalePositionController/ScalePositionController';
import ScalePositionControllerContent
    from './View/ViewController/ScalePositionController/ScalePositionControllerContent/ScalePositionControllerContent';
import ScalePositionControllerContainer
    from './View/ViewController/ScalePositionController/ScalePositionControllerContainer/ScalePositionControllerContainer';
import ThumbPositionController from './View/ViewController/ThumbPositionController/ThumbPositionController';
import ViewController from './View/ViewController/ViewController';
import ViewRuler from "./View/ViewSlider/ViewRuler/ViewRuler";
import SliderInit from "./renderSlider/SliderInit";
import modelSliderStore from "./ModelSlider/ModelSlideStore/ModelSliderStore";
import ControlCard from "./View/ViewController/ControlCard/ControlCard";

SliderInit.startSliderInit(modelSliderStore.modelSliderState)

new renderSlider('.my-slider-custom-plugin').getRenderSlider()

let viewSlider = new ViewSlider('.my-slider-custom-app',
                                'my-slider-custom-app__view')
viewSlider.getViewSlider()
viewSlider.getSliderMaxMinValues()
viewSlider.getSliderThumbs()
viewSlider.getSliderScales()

let viewController = new ViewController('.my-slider-custom-plugin')
viewController.getViewController()

let thumbPositionControllers = new ThumbPositionController('.view__controller-container',
                                                            'thumb__position-controller',
                                                            )
thumbPositionControllers.getThumbPositionController()

let thumbPositionControllerContainerMin = new ThumbPositionControllerContainer('.thumb__position-controller',
                                                                                'view__thumb-input-container',
                                                                                "Thumbs:")
thumbPositionControllerContainerMin.getThumbPositionControllerContainer()

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
    [{"title":"Min thumb", "id":"min", "inputVariant": "_changeable", "type": ""},
        {"title":"Max thumb", "id": "max", "inputVariant": "_changeable", "type": ""},
        {"title":"Width thumb", "id": "thumb-width", "inputVariant": "_changeable", "type": ""},
        {"title":"Height thumb", "id": "thumb-height", "inputVariant": "_changeable", "type": ""},
        {"title":"Shadow thumb", "id": "thumb-shadow", "inputVariant": "_changeable", "type": ""},
        {"title":"Border width thumb", "id": "thumb-border-width", "inputVariant": "_changeable", "type": ""},
        {"title":"Border radius thumb", "id": "thumb-border-radius", "inputVariant": "_changeable", "type": ""},
        {"title":"Border color thumb", "id": "thumb-border-color", "inputVariant": "_colorable", "type": ""},
        {"title":"Background color thumb", "id": "thumb-background-color", "inputVariant": "_colorable"},],
    "thumb-input__element",
    "thumb-input-value",
    "thumbs")
thumbsControlCard.addControlElementsToCard()

let scalePositionController = new ScalePositionController('.view__controller-container',
                                                            'scale__position-controller')
scalePositionController.getScalePositionController()
let scalePositionControllerContainer = new ScalePositionControllerContainer('.scale__position-controller',
                                                                            'scale__position-controller-container',
                                                                            "Scale position:")
scalePositionControllerContainer.getScalePositionControllerContainer()

let scalePositionControllerContent = new ScalePositionControllerContent(
    '.scale__position-controller-container',
    'scale__position-controller-input',
    '.view__thumb',
    ['min', 'max'],
    [{"title":"Scale length", "id":"scale-px", "inputVariant": "_displayed", "type": ""},
        {"title":"Scale length relative", "id": "scale-rel", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale height", "id": "scale-height", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale track color", "id": "scale-track-color", "inputVariant": "_colorable", "type": ""},
        {"title":"Scale backLine color", "id": "scale-backLine-color", "inputVariant": "_colorable", "type": ""},],
    'my-slider-custom-app__view')

let scaleControlCard = new ControlCard(
    '.scale__position-controller-container',
    'scale__position-controller-input',
    '.view__thumb',
    [{"title":"Scale length", "id":"scale-px", "inputVariant": "_displayed", "type": ""},
        {"title":"Scale length relative", "id": "scale-rel", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale height", "id": "scale-height", "inputVariant": "_changeable", "type": ""},
        {"title":"Scale track color", "id": "scale-track-color", "inputVariant": "_colorable", "type": ""},
        {"title":"Scale backLine color", "id": "scale-backLine-color", "inputVariant": "_colorable", "type": ""}],
    "scale-input__element",
    "scale-input-value",
    "scale"
)
scaleControlCard.addControlElementsToCard()
//scalePositionControllerContent.addControlElement()
scalePositionControllerContent.observeScaleSize("scale-px", "scale-input-value")

new ViewRuler('.view__ruler-container', 'view__ruler').getViewRuler()
viewSlider.getViewRuler()