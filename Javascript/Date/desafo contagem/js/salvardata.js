(function(){
    let dateEventDOM = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDOM)
    
    const dateEvent = getdate(dateEventDOM)
    console.log(dateEvent);

    const today = new Date();

    let left = dateEvent.getTime() - today.getTime();

    const ONE_MIN  = 60 * 1000;
    const ONE_HOURS = 60 * ONE_MIN;
    const ONE_DAY = 24 * ONE_HOURS;

    const daysLeft = parseInt(left / ONE_DAY);
    left = left - daysLeft * ONE_DAY;

    const hoursLeft = parseInt(left/ONE_HOURS);
    left = left - hoursLeft * ONE_HOURS;

    const minutsLeft = parseInt(left / ONE_MIN);
    left = left - minutsLeft * ONE_MIN;

    const secontsLeft = left / 1000;
    addLeftTime (daysLeft,hoursLeft,minutsLeft,secontsLeft);

    function addLeftTime(day,hour,minutes,seconds){
        const p = document.createElement("p");
        p.textContent = `Contagem regressiva: ${day} dias, ${hour} horas, ${minutes} minuotos, ${seconds} segundos`;
        document.querySelector(".hero-content").appendChild(p)

    }
  
    function getdate(str){
        const [date,hour] = str.split(" ");
        const [dia,mes,ano] = date.split("/");
        const [hora,min] = hour.split("H");
        console.log(hora,min);
        console.log(dia,mes,ano);
        return new Date(ano,mes,dia,hora,min);
    }
})()