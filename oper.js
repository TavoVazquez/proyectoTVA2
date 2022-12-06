function cal1(){
    const s = document.getElementById("s").value;
    const p = document.getElementById("p").value;
    const a = document.getElementById("a").value;
   
   
  document.calc.total.value = (Number(p)+Number(a))/s;
  }
  function cal2(){
    const kd = document.getElementById("kd").value;
    const kp= document.getElementById("kp").value;
   
   
  document.calc.total.value = (Number(kd))/(Number(kd)+Number(kp));
  }
  function cal3(){
    const kd = document.getElementById("kd").value;
    const kp= document.getElementById("kp").value;
   
   
  document.calc.total.value = ((Number(kd))*Number(kp))/(Number(kd)+Number(kp));
  }
  function cal4(){
    const kd = document.getElementById("kd").value;
    const kp= document.getElementById("kp").value;
    const i= document.getElementById("i").value;
   
   
  document.calc.total.value = ((Number(kd))*Number(kp))/(Number(kd)+Number(kp))*((Number(i))*Number(kp))/(Number(kd));
  }