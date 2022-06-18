// the forecast in kelvin is 293 which is constant
const kelvin = 293

// the forecast in celsius is 273 degree less than kelvin which is also constant
const celsius = kelvin - 273

// this is the equation of fahrenheit
var fahrenheit = celsius * (9/5) + 32

// round the fahrenheit to the nearest whole number
fahrenheit = Math.floor(fahrenheit)

// print the fahrenheit
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");

var newton = celsius * (33/100)

newton = Math.floor(newton)

// print the newton
console.log("The temperature is " + newton + " degrees Newton.");