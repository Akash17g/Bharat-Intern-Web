function celsius(){
    const celsiusInput = document.getElementById("temp").value;
    const fahrenheit = (celsiusInput * 1.8) + 32;
    document.getElementById("result").textContent = `Result: ${fahrenheit.toFixed(2)} F`;
}


function fahrenheit(){
    const fahrenheitInput = document.getElementById("temper").value;
    const celsiusout =   (fahrenheitInput - 32)*0.556;
    document.getElementById("output").textContent = `Result: ${celsiusout.toFixed(2)} C`;
}