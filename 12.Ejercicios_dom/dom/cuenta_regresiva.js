const d = document;


export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();


    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24) )/ (1000 * 60 * 60)),
        minutes,
        seconds;

        $countdown.innerHTML = `<h3>Faltan : ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`
        console.log(countdownDate, now, limitTime);
    }, 1000); 
}