function Number(number1,number2) {
    let addition=number1+number2
    let subtraction=number1-number2
    let multiplicaton=number1*number2
    let division=number1/number2 
    if (typeof date !=="string") {
        console.log("the addition is: ",addition,"\n","the subtraction is: ",subtraction,"\n","the multiplication is: ",multiplicaton) 

        if (number1>0 && number2>0) {
            console.log("the division is: ",division) 
        } else{
            console.log("error")
         }
  }  else{
    console.log("error")
}
     
   
}

Number(1,"ff")