function cousin(number) {
    if(number>1){
        if(number%2 ==0){
            return "no es primo"
        }else return "es primo"

    }else return "valide bien el numero"
}
exit= cousin(97)
console.log(exit)
