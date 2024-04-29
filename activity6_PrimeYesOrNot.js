function Prime(number) {

    if (number <= 1) {
       return false
    } else if (number <= 3) {
        return  true
    } else if (number % 2 == 0 || number % 3 == 0) {
        return false
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
           return false
        }
    }
    return true
}


function check(){
    let number = 100
    if (Prime(number)) {
        console.log(number +' es primo');
    } else {
        console.log(number +' no es primo');
}
}

check()
