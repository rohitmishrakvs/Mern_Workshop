bindEvent();
var counter = 0;
var π = 3.14159265;

//Event bind function
function bindEvent() {
    for (let i = 1; i <= 20; i++) {
        let str = '#btn' + i;
        document.querySelector(str).addEventListener('click', SingleClick);
    }
}
function SingleClick(e) {
    let id = e.target.value;
    //console.log(id);
    if (e.target.id == 'btn1') {
        document.querySelector('#result').innerHTML = " ";
        counter = -1;
    }
    if (e.target.id == 'btn20') {
        var num = result.innerHTML;
        //    console.log(num);
        document.querySelector('#result').innerHTML = eval(num);
    }
    if (counter == 0) {
        document.querySelector('#result').innerHTML = id;
    }
    else {
        if (e.target.id == 'btn2') {
            document.querySelector('#result').innerHTML += 'π';
        }
        if (e.target.id == 'btn19') {
            var k = result.innerHTML;
            // console.log(k);
            document.querySelector('#result').innerHTML = SqareRoot(k);
        }
        document.querySelector('#result').innerHTML += id
    }
    counter = counter + 1;
    //console.log(counter);
}


function SqareRoot(a) {
    //   console.log(eval(a));
    return Math.sqrt(eval(a));
}