function classChange(){
    document.getElementById("hideClick").classList.add('hide');
    document.getElementById("hideOn").classList.remove('hide');
}

let output=document.getElementById("output");

let display=(num)=>{
    output.value+=num;
}

const result=()=>{
    try {
        output.value=eval(output.value);    
    } catch (error) {
        alert("Wrong Opration")
    }
    
}

let deletes=()=>{
    output.value=output.value.slice(0,-1);
}
let cleares=()=>{
    output.value=""
}