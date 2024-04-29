function checkYear(year) {
    let leapYear = ''

    if (year % 4 == 0 && year % 100 !== 0) {
        leapYear = 'el año '+ year +' es bisiesto'
    } else {
        leapYear = 'el año '+ year +' no es bisiesto'
    }
    return leapYear
}

console.log(checkYear(2024));
