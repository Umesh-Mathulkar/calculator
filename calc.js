let outputs=document.getElementById("output");
let display = (num) => {
    outputs.value += num
}
let calculate = () =>{
    try{
        outputs.value = eval(outputs.value);

    }
    catch(err){
        alert ("invalid operation")
    }
}

let van=()=>{
    outputs.value="";
}

let del = ()=>{
    outputs.value = outputs.value.slice(0,-1);  
}