export function sendDrawing(canvas) {

    let modal = document.getElementById("myModal");
    const formEl = document.querySelector("#formSendCard")
    formEl.addEventListener("submit", (e) => {
        e.preventDefault()
        //On récupère les éléments du formulaire pour les transmettre en ajax à l'aide d'un JSON
        let data = {
            image: canvas.generateImage(),
            fromEmail: document.querySelector("#fromEmail").value,
            toEmail: document.querySelector("#toEmail").value,
            subject: document.querySelector("#subject").value,
            bodyMail: document.querySelector("#bodyMail").value,
            copieMail: document.querySelector("#copieMail").checked,
        }
        console.log(data);
        fetch("send_mail.php", {
            method: "POST",
            body: JSON.stringify(data)
        }).then((reponse) => {
            console.log(reponse);
            modal.style.display = "none";
            return reponse.json();
        }).then(message=>{
            console.log(message);
            formEl.reset();
            alert(message);
        }).catch(e=>{
            console.log(e.message);
            alert(e.message);
        });
    });
}