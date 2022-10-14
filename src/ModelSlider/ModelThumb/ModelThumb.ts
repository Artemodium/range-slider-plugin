class ModelThumb {
    className: string = ''
    thumbSize: string = 'left: 100px'
    thumbBorder: string = '5px'
    thumbBGColor: string = 'white'
    thumbBorderColor: string = 'black'

    constructor(className: string,
                thumbSize: string,
                thumbBorder: string,
                thumbBGColor: string,
                thumbBorderColor: string) {
                    this.className = className
                    this.thumbSize = thumbSize
                    this.thumbBorder = thumbBorder
                    this.thumbBGColor = thumbBGColor
                    this.thumbBorderColor = thumbBorderColor
                }

    modelThumbState = {
        className: this.className,
        thumbSize: this.thumbSize,
        thumbBorder: this.thumbBorder,
        thumbBGColor: this.thumbBGColor,
        thumbBorderColor: this.thumbBorderColor

    }
}

export default ModelThumb