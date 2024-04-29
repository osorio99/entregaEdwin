 function lettersAndNumbers() {
    let text = 'hola mi nombre es davidtor01'

    let numberOfLetters = text.length - space(text)
  
    let  numbers = text.replace(/[^0-9]/g,"").length

        console.log('letras: '+ numberOfLetters);
        console.log('numeros: '+ numbers);
 }
 function space(text) {
    
     let numberOfSpaces = text.split(" ").length - 1;
     
     console.log('espacios: '+ numberOfSpaces);
     return numberOfSpaces
 }

 lettersAndNumbers()

