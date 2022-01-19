const output = document.getElementById("display");

let compute = (number)=>{
    output.value += number;
}

let Output = () => {
    try {
        output.value = eval(output.value);
    } catch (error) {
        alert("Invalid Computation!");
    }
}

function del() {
    output.value = "";
}

function clr() {
    output.value = output.value.slice(0,-1);
}

function plusMinus() {
    //let num = document.getElementById("display").innerHTML;
    if (output.value < 0) {
        num.prepend ("-");
    }else if (output.value > 0){
        num.replace("-", "");
    } else {
        output.value == 0;
    }
}