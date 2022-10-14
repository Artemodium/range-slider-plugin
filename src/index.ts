import renderSlider  from './renderSlider/renderSlider'
import ViewScaleContainer from "./View/ViewSlider/ViewScaleContainer/ViewScaleContainer"
import SliderAppView from "./View/ViewSlider/ViewSlider"
import ViewThumb from "./View/ViewSlider/ViewThumb/ViewThumb"
import ViewScale from "./View/ViewSlider/ViewScaleContainer/ViewScale/ViewScale"
import ViewScaleTrack from "./View/ViewSlider/ViewScaleContainer/ViewScaleTrack/ViewScaleTrack"
import ViewScaleBackline from "./View/ViewSlider/ViewScaleContainer/ViewScaleBackline/ViewScaleBackline"
import ViewControlerContainer from "./View/ViewController/ViewControllerContainer/ViewControlerContainer";
import ThumbPositionController from "./View/ViewController/ThumbPositionController/ThumbPositionController";
import ThumbPositionControllerContainer from "./View/ViewController/ThumbPositionController/ThumbPositionControllerContainer/ThumbPositionControllerContainer";

new renderSlider('.my-slider-custom-plugin').getRenderSlider()
new SliderAppView('.my-slider-custom-app').getSliderAppView()
new ViewThumb('.my-slider-custom-app__view', 'view__thumb', 'min', 'left: 50px').getViewThumb()
new ViewThumb('.my-slider-custom-app__view', '.view__thumb', 'min', 'left: 50px').handle_thumb()
new ViewThumb('.my-slider-custom-app__view', 'view__thumb', 'max', 'left: 250px').getViewThumb()
new ViewThumb('.my-slider-custom-app__view', '.view__thumb', 'max', 'left: 250px').handle_thumb()
new ViewScaleContainer('.my-slider-custom-app__view').getViewScaleContainer()
new ViewScaleBackline('.view__scale-container').getViewScaleBackline()
new ViewScaleTrack('.view__scale-container').getViewScaleTrack()
new ViewScale ('.view__scale-container').getViewScale()
new ViewControlerContainer('.my-slider-custom-plugin').getViewControllerContainer()
new ThumbPositionControllerContainer('.view__controller-container', 'view__thumb-input-container', 'min').getThumbPositionControllerContainer()
new ThumbPositionController('view__thumb-input-container', 'view__thumb-input', '.view__thumb', 'min').getThumbPositionController()
new ThumbPositionController('.view__controller-container', '.view__thumb-input', '.view__thumb','min').observeThumbPosition()
new ThumbPositionControllerContainer('.view__controller-container', 'view__thumb-input-container', 'max').getThumbPositionControllerContainer()
new ThumbPositionController('view__thumb-input-container', 'view__thumb-input', '.view__thumb','max').getThumbPositionController()
new ThumbPositionController('.view__controller-container', '.view__thumb-input', '.view__thumb','max').observeThumbPosition()


