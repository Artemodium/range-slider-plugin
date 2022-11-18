import controlElement from "../ControlElement/ControlElement";

class ControlCard{
    private readonly className: string
    private readonly id: string
    private readonly containerName: string
    private readonly title: string
    private readonly controlElement: controlElement[]

    constructor(className: string, id: string, containerName: string, title: string, controlElement?: controlElement[]) {
        this.className = className
        this.id = id
        this.containerName = containerName
        this.title = title
        this.controlElement = controlElement
    }

    setControlCard(): JQuery {
        let controlCard = document.createElement("div")
        controlCard.setAttribute("class", this.className)
        controlCard.setAttribute("id", this.id)
        controlCard.innerHTML =`<p class= "${this.className} input-control__title">
                                ${this.title}
                                </p>`
        this.controlElement.forEach(element => $(element).appendTo(controlCard))
        return $(controlCard).appendTo(this.containerName)
    }
}

export default ControlCard