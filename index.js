const dataChip = (chip) => {
  let allChip = document.querySelectorAll(".chip");
  for (var i = 0; i < allChip.length; i++) {
    allChip[i].classList.remove("top-[2rem]");
    allChip[i].classList.add("top-[0.4rem]");
  }

  let hide = document.querySelectorAll(".textdiv");
  for (var i = 0; i < hide.length; i++) {
    hide[i].classList.remove("hidden");
    hide[i].classList.add("hidden");
  }

  let chipName = document.getElementById("chipName");
  let chipInsert = document.getElementById(chip + "Chip");
  chipInsert.classList.remove("top-[0.4rem]");
  chipInsert.classList.add("top-[2rem]");
  chipName.innerHTML = chip;

  let show = document.getElementById(chip + "Div");
  show.classList.remove("hidden");
  

};

let option = 1;

const optionDisplay = () => {
  let chipMessage = document.getElementById("displaytext");
  if (option == 1) {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    newdate = day + "/" + month + "/" + year;
    chipMessage.innerHTML = newdate;
    option++
  }else if(option=== 2){
    let dateObj = new Date();
    let min = dateObj.getMinutes();
    let hr = dateObj.getHours();

    if(hr>12){
        hr=hr-12
    }

    time = hr + " : " + min
    chipMessage.innerHTML = time;
    option++
  }
  else{
    option=1
    chipMessage.innerHTML = "Vashu Kashyap";
  }

};

let off=false;

const shutdown = () => {

    if(!off){
    let messages = document.querySelectorAll(".off");
    for (var i = 0; i < messages.length; i++) {
        messages[i].innerHTML = ''
    }
    let led = document.getElementById("led");
    led.classList.remove('blinkled')
    led.classList.remove("w-8");
    led.classList.remove("h-8");
    off=true
    }
    else{
        let led = document.getElementById("led");
        let chipMessage = document.getElementById("displaytext");
        chipMessage.innerHTML = 'Refresh page'
        led.classList.add('blinkled')
        off=false
    }

}
