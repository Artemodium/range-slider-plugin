import  renderSlider  from './renderSlider/renderSlider';
import ViewScaleContainer from "./ViewSlider/ViewScaleContainer/ViewScaleContainer";
import SliderAppView from "./ViewSlider/ViewSlider";
import ViewThumb from "./ViewSlider/ViewThumb/ViewThumb";
import ViewThumbValue from "./ViewSlider/ViewThumb/ViewThumbValue/ViewThumbValue";
import ViewScale from "./ViewSlider/ViewScaleContainer/ViewScale/ViewScale";

new renderSlider('.slider-container').getRenderSlider();
new SliderAppView('.slider-app').getSliderAppView();
new ViewThumb('.slider-app__view').getViewThumb();
new ViewThumbValue('.view__thumb').getViewThumbValue();
new ViewScaleContainer('.slider-app__view').getViewScaleContainer();
new ViewScale ('.view__scale-container').getViewScale()
