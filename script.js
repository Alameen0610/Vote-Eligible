const ebox = document.getElementById("ebox");
const msg = document.getElementById("msg");
const age = document.getElementById("age");
const agebtn = document.getElementById("agebtn");

agebtn.addEventListener('click',()=>{
    let agevalue = parseInt(age.value);

    if(age.value === ''){
        alert("please filled value");
        return;
    }
    if(agevalue < 18){
        ebox.style.backgroundColor = "red";
        msg.textContent = " Your Not Eligible";
        msg.innerHTML += '<span> &#128078;</span>';
    }
    else{
        ebox.style.backgroundColor = "green";
        msg.textContent = " Your Eligible";
        msg.innerHTML += '<span> &#128077;</span>';
    }
})