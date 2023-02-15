function tempCon(){

    var val = document.getElementById("input_value");
    var result = document.getElementById("result");
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    // val.addEventListener("keyup",tempCon);
    // input.addEventListener("change",tempCon);
    // output.addEventListener("change",tempCon);

    let inputVal = input.value;
    let outputVal = output.value;

    //celcius to others
    if(inputVal === "celcius" && outputVal === "Fahrenheit"){
        result.value = ((val.value)*9/5)+32; 
    }else if(inputVal === "celcius" && outputVal === "Kelvin"){
        result.value = Number(val.value) + 273.15; 
    }else if(inputVal === "celcius" && outputVal === "celcius"){
        result.value = val.value; 
    }
    
    //Fahrenheit to others
    if(inputVal === "Fahrenheit" && outputVal === "Fahrenheit"){
        result.value = val.value; 
    }else if(inputVal === "Fahrenheit" && outputVal === "Kelvin"){
        result.value = ((val.value-32)*5/9)+273.15; 
    }else if(inputVal === "Fahrenheit" && outputVal === "celcius"){
        result.value = (val.value-32)*5/9; 
    }

    //Kelvin to others
    if(inputVal === "Kelvin" && outputVal === "Fahrenheit"){
        result.value = ((val.value - 273.15)*9/5)+32; 
    }else if(inputVal === "Kelvin" && outputVal === "Kelvin"){
        result.value = val.value; 
    }else if(inputVal === "Kelvin" && outputVal === "celcius"){
        result.value = val.value - 273.15; 
    }
}

function reset(){
    tempCon();
}