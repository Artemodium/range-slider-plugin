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
import ControlElement from "./View/ViewController/ControlElements/ControlInputElement/ControlInputElement";


SliderInit.startSliderInit(modelSliderStore.modelSliderState)

new renderSlider('.my-slider-custom-plugin').getRenderSlider()

let viewSlider = new ViewSlider('.my-slider-custom-app',
                                'my-slider-custom-app__view')
viewSlider.getViewSlider()
viewSlider.getSliderMaxMinValues()
viewSlider.getSliderThumbs()
//viewSlider.getSliderMaxMinValues()
viewSlider.getSliderScales()
//viewSlider.getViewRuler()

let viewController = new ViewController('.my-slider-custom-plugin')
viewController.getViewController()

let thumbPositionControllers = new ThumbPositionController('.view__controller-container',
                                                            'thumb__position-controller',
                                                            )
thumbPositionControllers.getThumbPositionController()

let thumbPositionControllerContainerMin = new ThumbPositionControllerContainer('.thumb__position-controller',
                                                                                'view__thumb-input-container',
                                                                                "Thumbs position")
thumbPositionControllerContainerMin.getThumbPositionControllerContainer()

let  thumbPositionControllerContent = new ThumbPositionControllerContent('view__thumb-input-container',
                                                                            'topThumb',
                                                                            'control-input__value',
                                                                            'bottomThumb',
                                                                            '.view__thumb',
                                                                            ["min", "max"],
                                                                            "thumb-input-container",
                                                                            '.view__thumb-input-container')
thumbPositionControllerContent.addControlElement()
thumbPositionControllerContent.observeThumbPosition()

let scalePositionController = new ScalePositionController('.view__controller-container',
                                                            'scale__position-controller')
scalePositionController.getScalePositionController()
let scalePositionControllerContainer = new ScalePositionControllerContainer('.scale__position-controller',
                                                                            'scale__position-controller-content',
                                                                            "Scale position")
scalePositionControllerContainer.getScalePositionControllerContainer()

let scalePositionControllerContent = new ScalePositionControllerContent('.scale__position-controller-content',
                                                                        'scale__position-controller-input',
                                                                          '.view__thumb',
                                                                          ['min', 'max'],
                                                                          'my-slider-custom-app__view'
)
scalePositionControllerContent.addControlElement()
//scalePositionControllerContent.getScalePositionControllerContent()
scalePositionControllerContent.setScaleSize()
scalePositionControllerContent.observeScaleSize()
new ViewRuler('.view__ruler-container', 'view__ruler').getViewRuler()
viewSlider.getViewRuler()