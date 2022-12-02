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

let  thumbPositionControllerContent = new ThumbPositionControllerContent('view__thumb-input-container',
                                                                            'topThumb',
                                                                            'control-input__value',
                                                                            'bottomThumb',
                                                                            '.view__thumb',
                                                                            [{"id":"min", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "max", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "thumb-width", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "thumb-height", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "thumb-shadow", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "thumb-border-width", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "thumb-border-radius", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "thumb-border-width", "inputVariant": "_changeable", "type": ""},
                                                                                {"id": "thumb-border-color", "inputVariant": "_colorable", "type": ""},
                                                                                {"id": "thumb-background-color", "inputVariant": "_colorable"},],
                                                                                "thumb-input-container",
                                                                                '.view__thumb-input-container',
                                                                                "thumb-input-value")
thumbPositionControllerContent.addControlElement()
thumbPositionControllerContent.observeThumbPosition()

let scalePositionController = new ScalePositionController('.view__controller-container',
                                                            'scale__position-controller')
scalePositionController.getScalePositionController()
let scalePositionControllerContainer = new ScalePositionControllerContainer('.scale__position-controller',
                                                                            'scale__position-controller-container',
                                                                            "Scale position:")
scalePositionControllerContainer.getScalePositionControllerContainer()

let scalePositionControllerContent = new ScalePositionControllerContent('.scale__position-controller-container',
                                                                        'scale__position-controller-input',
                                                                        '.view__thumb',
                                                                        ['min', 'max'],
                                                                        [{"id":"scale-px", "inputVariant": "_displayed", "type": ""},
                                                                                   {"id": "scale-rel", "inputVariant": "_changeable", "type": ""},
                                                                            {"id": "scale-height", "inputVariant": "_changeable", "type": ""},
                                                                            {"id": "scale-track-color", "inputVariant": "_colorable", "type": ""},
                                                                            {"id": "scale-backLine-color", "inputVariant": "_colorable", "type": ""},],
                                                                        'my-slider-custom-app__view',)
scalePositionControllerContent.addControlElement()
scalePositionControllerContent.observeScaleSize("scale-px")

new ViewRuler('.view__ruler-container', 'view__ruler').getViewRuler()
viewSlider.getViewRuler()