export function interfaceColor(canvas) {

//On crée la palette
    document.querySelectorAll("#palette div").forEach(element => {
        // On met les couleurs
        element.style.backgroundColor = element.dataset.color

        // On écoute le clic
        element.addEventListener("click", () => {
            canvas.setColor(element.dataset.color)
        })
    })

// On écoute le clic
    document.getElementById('toolbar').addEventListener('change', e => {
        if (e.target.id === 'stroke') {
            canvas.colorPicker(e.target.value)
            console.log('hello');
        }
    });
}