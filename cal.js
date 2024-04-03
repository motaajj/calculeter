let zero = document.querySelectorAll(`#numbers`)[0];
let one = document.querySelectorAll(`#numbers`)[1];
let two = document.querySelectorAll(`#numbers`)[2];
let three = document.querySelectorAll(`#numbers`)[3];
let four = document.querySelectorAll(`#numbers`)[4];
let five = document.querySelectorAll(`#numbers`)[5];
let sex = document.querySelectorAll(`#numbers`)[6];
let seven = document.querySelectorAll(`#numbers`)[7];
let eat = document.querySelectorAll(`#numbers`)[8];
let nine = document.querySelectorAll(`#numbers`)[9];
let dott = document.querySelectorAll(`#numbers`)[10];

let space = document.querySelectorAll(`input`)[0];


dott.onclick =()=>{
    space.value = space.value + dott.value;
}
   
zero.onclick = ()=>{
  
    space.value = space.value +  Number(zero.value);
    console.log(Number(zero.textContent));
}

one.onclick = ()=>{
    space.value = space.value +  Number(one.value);
}

two.onclick = ()=>{
    space.value = space.value + Number(two.value);
}

three.onclick = ()=>{
    space.value = space.value +  Number(three.value);
}

four.onclick = ()=>{
    space.value = space.value +  Number(four.value);
}

five.onclick = ()=>{
    space.value = space.value + Number(five.value);
}

sex.onclick = ()=>{
    space.value = space.value +  Number(sex.value);
}
seven.onclick = ()=>{
    space.value = space.value +  Number(seven.value);
}
eat.onclick = ()=>{
    space.value = space.value +  Number(eat.value);
}
nine.onclick = ()=>{
    space.value = space.value +  Number(nine.value);
}

let negative = document.querySelector(`.minus`);
let plus = document.getElementById(`plus`)
let portion = document.querySelector(`.portion`);
let del = document.querySelector(`.del`);
let zz = document.getElementById(`zz`);

//sin and cos an else 

let sin = document.querySelector(`.sin`);
let cos = document.querySelector(`.cos`);
let tan = document.querySelector(`.tan`);
let cosh = document.querySelector(`.cosh`);

sin.onclick = ()=>{
    space.value = Math.sin(eval(space.value));
    if(space.value == `NaN`){
       alert("Error: Cannot calculate sin of zero , start with Numbers");
        space.value = ``;
     }
}

cos.onclick = ()=>{
 space.value = Math.cos(eval(space.value));

 if(space.value == `NaN`){
    alert("Error: Cannot calculate cos of zero , start with Numbers");
    space.value = ``;
 }
 

}

tan.onclick = ()=>{
    space.value = Math.tan(eval(space.value));
    if(space.value == `NaN`){
        alert("Error: Cannot calculate tangent of zero , start with Numbers");
        space.value = ``;
       
    }
}

cosh.onclick = ()=>{
    space.value = Math.cosh(eval(space.value));

    if(space.value == `NaN`){
        alert("Error: Cannot calculate cosh of zero , start with Numbers");
        space.value = ``;
       
    }
}

negative.onclick = ()=>{
    space.value = space.value + negative.textContent;
}

plus.onclick = ()=>{

    space.value = space.value+ plus.textContent;

}

portion.onclick = ()=>{
    space.value = space.value+ portion.textContent;
}

zz.onclick = ()=>{
    space.value = space.value + zz.textContent;
}

del.onclick = ()=>{
    space.value.length > 0 ? space.value=space.value.slice(0,-1) : space.value;
}


let asign = document.querySelector(`.asign`);


asign.onclick = ()=>{
    

if(space.value.includes(plus.textContent)){
    space.value = eval(space.value);
}  else if(space.value.includes(negative.textContent)){
    space.value = eval(space.value);
} else if(space.value.includes(portion.textContent)){
    space.value = eval(space.value);
    
}
else if(space.value.includes(zz.textContent)){
    space.value = eval(space.value);
} 
}



space.onchange = ()=>{
    console.log((space.value));
}





