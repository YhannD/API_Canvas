export function interfaceTools(canvas) {
    
// On gère le clic sur le normal
    document.querySelector("#normal").addEventListener("click", () => {
        canvas.normalStroke()
    })

// On gère le clic sur le medium
    document.querySelector("#medium").addEventListener("click", () => {
        canvas.mediumStroke()
    })

// On gère le clic sur le large
    document.querySelector("#large").addEventListener("click", () => {
        canvas.largeStroke()
    })

// On gère le clic sur le plus
    document.querySelector("#plus").addEventListener("click", () => {
        canvas.biggerStroke()
    })

// On gère le clic sur le moins
    document.querySelector("#moins").addEventListener("click", () => {
        canvas.smallerStroke()
    })

// On gère le clic sur la gomme
    document.querySelector("#gomme").addEventListener("click", () => {
        canvas.setColor("white")
    })
// On gère le clic sur la croix
    document.querySelector("#croix").addEventListener("click", () => {
        canvas.erase()
    })
}