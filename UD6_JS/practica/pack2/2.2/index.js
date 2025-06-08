const p_time = document.getElementById('p_time');
const btn_reset = document.getElementById('btn_reset');

let start_date = Date.now(); // Static Time

// Reset function 
function timeCount (){
  setInterval(()=>{ 
    const currentDate = Date.now(); // Dinamyc time
    const timePassed = Math.floor((currentDate-start_date)/1000); 
    p_time.innerHTML = timePassed;
  },1000) // Every 1000 ml = 1s
};

timeCount();

function resetTime(){
  start_date = Date.now();
};

btn_reset.addEventListener('click',()=>{
    resetTime();
});