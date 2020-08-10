bindEvents();

function bindEvents() {
    // This loop binds the event
    for (let i = 1; i <= 9; i++) {
        let str = '#btn' + i;
        document.querySelector(str).addEventListener('click', singleClick);
    }
    localStorage.setItem("counter", 1);
    console.log('localstorage clear');
}

function singleClick(event) {
    if(Winner()){
        return;
    }
    let id = event.target.id;
    let counter = parseInt(localStorage.getItem("counter"));
    // console.log(counter);

    if (counter == null) {
        localStorage.setItem("counter", 1);
    }

    if (document.getElementById(id).value != 'X' || document.getElementById(id).value != 'O') {
        localStorage.setItem("counter", counter + 1);
    }

    if (counter % 2 == 0) {
        document.getElementById(id).value = 'O';
        document.getElementById(id).innerHTML = 'O';
        document.getElementById(id).disabled = true;
    } else {
        document.getElementById(id).value = 'X';
        document.getElementById(id).innerHTML = 'X';
        document.getElementById(id).disabled = true;
    }

    console.log('Id of selected button', event.target.id);
    Winner();
    Draw();

}

function Winner() {
    //row
    if (btn1.value == btn2.value && btn1.value == btn3.value) { document.getElementById("result").innerText = "Congrats " + btn1.value + " you have won!";return true; }
    if (btn4.value == btn5.value && btn4.value == btn6.value) { document.getElementById("result").innerText = "Congrats " + btn4.value + " you have won!";return true; }
    if (btn7.value == btn8.value && btn7.value == btn9.value) { document.getElementById("result").innerText = "Congrats " + btn7.value + " you have won!";return true; }
    //column
    if (btn1.value == btn4.value && btn1.value == btn7.value) { document.getElementById("result").innerText = "Congrats " + btn1.value + " you have won!"; return true;}
    if (btn2.value == btn5.value && btn2.value == btn8.value) { document.getElementById("result").innerText = "Congrats " + btn2.value + " you have won!"; return true;}
    if (btn3.value == btn6.value && btn3.value == btn9.value) { document.getElementById("result").innerText = "Congrats " + btn3.value + " you have won!"; return true;}
    //diagonal
    if (btn1.value == btn5.value && btn1.value == btn9.value) { document.getElementById("result").innerText = "Congrats " + btn1.value + " you have won!";return true; }
    if (btn7.value == btn5.value && btn7.value == btn3.value) { document.getElementById("result").innerText = "Congrats " + btn7.value + " you have won!";return true; }

}

function Draw(){
    let counter = parseInt(localStorage.getItem("counter"));
    console.log(counter);
    if(!Winner() && counter>=10){
        console.log("DRAW");
        document.getElementById("result").innerText = "Match is DRAW";
    }
}