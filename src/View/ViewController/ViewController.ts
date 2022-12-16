const $ = require('jquery')

class ViewController {
    private readonly selector: string
    private readonly element: string

    constructor(selector: string, element: string) {
        this.selector = selector
        this.element = element
    }

    getViewController(): JQuery {
        return $('<div>', {
            class: this.element
        }).appendTo(`.${ this.selector }`)
    }

    getViewControllerContainer(viewContainer: string): JQuery {
        return $('<div>', {
            class: viewContainer
        }).appendTo(`.${this.element}`)
    }

    getViewControllerContent(contentContainerName: string, selector: string, title: string): JQuery {
        const container = document.createElement("div")
        container.setAttribute("class", contentContainerName)
        container.innerHTML = `<div class="${contentContainerName}__title">${title}</div>`
        return $(container).appendTo(`.${selector}`)
    }
}

export default ViewController