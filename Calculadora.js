function sum(a, b){
    return(a + b) 
}

function sub(a, b){
    return(a - b)
}

function mult(a, b){
    return a*b
}

function div(a, b){
    if (b <= 0) {
        return alert('O valor b deve ser maior que zero')
    } else {
        return a/b
    }
}
