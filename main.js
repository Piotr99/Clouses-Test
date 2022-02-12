const timer = (time = 1000)=>{
    let number = 0;
     function showTime(){
         number++
        document.body.textContent = `${number} sekund`;
    }
    return setInterval(showTime,time);
}

const czas= timer;
const afterFiveSeconds = czas(5000)
const number = "BLABLABLA Clouses test"
document.body.textContent = number;


