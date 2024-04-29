function check(name) {
    let fullName = ''
    let regex = /^[a-zA-Z]+$/

    if (regex.test(name)) {
    
        if (name.length >= 2) {
            fullName = name.toUpperCase().charAt(0)+name.slice(1)
        }

    }

    greeting(fullName)
}

function greeting(fullName){
    let text = 'hola nombre, bienvenido a mi programa'
    let textReplace = text.replace('nombre', fullName)

    console.log(textReplace);
}

check('edwin')