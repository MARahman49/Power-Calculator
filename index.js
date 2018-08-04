

function findPower(){
    var base = document.getElementById("base")
    var exponent = document.getElementById("exp")
    var answer = document.getElementById("answer")
    var baseError = document.getElementById('baseError')
    var expError = document.getElementById('expError')
    var alert = document.getElementById("alert")
    if(base.value.length == 0 && exponent.value.length == 0){
        expError.innerHTML = "*Required"
        baseError.innerHTML = "*Required"
    }
    else if(base.value.length == 0){
        base.setAttribute("class", "form-control my-input border");
        baseError.innerHTML = "*Required"
        expError.innerHTML = ""
    }
    else if(exponent.value.length == 0){
        baseError.innerHTML = ""
        expError.innerHTML = "*Required"
    }
    else{
    baseError.innerHTML = ""
    expError.innerHTML = ""
    alert.removeAttribute("hidden")
    answer.innerHTML = `${base.value} Power ${exponent.value} is equal to ${power(base.value , exponent.value)}`
    }
}

function power(a , b){
    if(b == 0){
        return 1
    }else{
        var data = a * power(a , b - 1)
        return data
    }
}
