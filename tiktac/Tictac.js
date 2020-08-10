 window.onload=function(){
     var a=document.getElementById('btn1');
     a.ondblclick=response1;
     a.onclick=response2;
     var b=document.getElementById('btn2');
     b.ondblclick=response3;
     b.onclick=response4;
     var c=document.getElementById('btn3');
     c.ondblclick=response5;
     c.onclick=response6;
     var d=document.getElementById('btn4');
     d.ondblclick=response7;
     d.onclick=response8;
     var e=document.getElementById('btn5');
     e.ondblclick=response9;
     e.onclick=response10;
     var f=document.getElementById('btn6');
     f.ondblclick=response11;
     f.onclick=response12;
     var g=document.getElementById('btn7');
     g.ondblclick=response13;
     g.onclick=response14;
     var h=document.getElementById('btn8');
     h.ondblclick=response15;
     h.onclick=response16;
     var i=document.getElementById('btn9');
     i.ondblclick=response17;
     i.onclick=response18;
     
 }
 function response1(e){
    document.getElementById('btn1').innerText="0";
     console.log(btn1.value);
    btn1.value="0";
     console.log(btn1.value);
    Winner();
 }
 function response2(e){
     document.getElementById('btn1').innerText="X";
     console.log(btn1.value);
     btn1.value="X";
     console.log(btn1.value);
     Winner();
 }
 function response3(e){
    document.getElementById('btn2').innerText="0";
    console.log(btn2.value);
    btn2.value="0";
    console.log(btn2.value);
    Winner();
 }
 function response4(e){
     document.getElementById('btn2').innerText="X";
     console.log(btn2.value);
     btn2.value="X";
     console.log(btn2.value);
     Winner();
 }
 function response5(e){
    document.getElementById('btn3').innerText="0";
     console.log(btn3.value);
     btn3.value="0";
     console.log(btn3.value);
    Winner();   
 }
 function response6(e){
     document.getElementById('btn3').innerText="X";
     console.log(btn3.value);
     btn3.value="X";
     console.log(btn3.value);
     Winner();
 }
 function response7(e){
    document.getElementById('btn4').innerText="0";
    console.log(btn4.value);
    btn4.value="0";
     console.log(btn4.value);
    Winner();
 }
 function response8(e){
     document.getElementById('btn4').innerText="X";
     console.log(btn4.value);
     btn4.value="X";
      console.log(btn4.value);
     Winner();
 }
 function response9(e){
    document.getElementById('btn5').innerText="0";
     console.log(btn5.value);
    btn5.value="0";
     console.log(btn5.value);
    Winner();
 }
 function response10(e){
     document.getElementById('btn5').innerText="X";
      console.log(btn5.value);
     btn5.value="X";
      console.log(btn5.value);
     Winner();
 }
 function response11(e){
    document.getElementById('btn6').innerText="0";
     console.log(btn6.value);
    btn6.value="0";
     console.log(btn6.value);
    Winner();
 }
 function response12(e){
     document.getElementById('btn6').innerText="X";
      console.log(btn6.value);
     btn6.value="X";
      console.log(btn6.value);
     Winner();
 }
 function response13(e){
    document.getElementById('btn7').innerText="0";
     console.log(btn7.value);
     btn7.value="0";
     console.log(btn7.value);
     Winner();
 }
 function response14(e){
     document.getElementById('btn7').innerText="X";
     console.log(btn7.value);
     btn7.value="X";
     console.log(btn7.value);
     Winner();
 }
 function response15(e){
    document.getElementById('btn8').innerText="0";
    console.log(btn8.value);
    btn8.value="0";
    console.log(btn8.value);
    Winner();
 }
 function response16(e){
     document.getElementById('btn8').innerText="X";
     console.log(btn8.value);
     btn8.value="X";
     console.log(btn8.value);
     Winner();
 }
 function response17(e){
    document.getElementById('btn9').innerText="0";
    console.log(btn9.value);
    btn9.value="0";
     console.log(btn9.value);
    Winner();
 }
 function response18(e){
     document.getElementById('btn9').innerText="X";
      console.log(btn9.value);
     btn9.value="X";
      console.log(btn9.value);
     Winner();
 }
 
//  comparing function for who won the game;
function Winner(){
    if(btn1.value!=btn2.value && btn1.value!=btn3.value){document.getElementById("result").innerText="-";}
    if(btn1.value==btn2.value && btn1.value==btn3.value){document.getElementById("result").innerText="You won!";}
    if(btn3.value!=btn2.value && btn3.value!=btn1.value){document.getElementById("result").innerText=" - ";}
    if(btn2.value!=btn1.value && btn2.value!=btn3.value){document.getElementById("result").innerText=" - ";}
    if(btn3.value==btn2.value && btn3.value==btn1.value){document.getElementById("result").innerText="You won!";}
    if(btn1.value==btn4.value && btn1.value==btn7.value){document.getElementById("result").innerText="You won!";}
  
    
    if(btn1.value==btn5.value && btn1.value==btn9.value){document.getElementById("result").innerText="You won!";}
    if(btn2.value==btn5.value && btn2.value==btn8.value){document.getElementById("result").innerText="You won!";}
    if(btn3.value==btn6.value && btn3.value==btn9.value){document.getElementById("result").innerText="You won!";}
    if(btn4.value==btn5.value && btn4.value==btn6.value){document.getElementById("result").innerText="You won!";}
    if(btn7.value==btn8.value && btn7.value==btn9.value){document.getElementById("result").innerText="You won!";}
    if(btn7.value==btn5.value && btn7.value==btn3.value){document.getElementById("result").innerText="You won!";}
    
}