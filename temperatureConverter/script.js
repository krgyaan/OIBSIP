let degree = document.getElementById('degree')
let button = document.getElementById('submit');
let answer = document.getElementById('result');

const GivenUnit = () => { 
    var givenUnit = document.getElementById('type');
    var value = givenUnit.options[givenUnit.selectedIndex].text;
    return value;
}
const DesireUnit = () => {
    var convertedUnit = document.getElementById('convert-type');
    var value = convertedUnit.options[convertedUnit.selectedIndex].text;
    return value;
}

const tempConv = () => {
    // Celsius to Fahrenheit	°F = °C×(9/5) + 32
    if (GivenUnit() === '°C' && DesireUnit() === 'Fahrenheit (°F)') {
        let C = degree.value;
        let ans = (C * (9 / 5) + 32).toFixed(2);
        answer.innerText = `${ans}°F`;
    }
    // Fahrenheit to Celsius 	°C = (°F - 32)×(5/9)
    else if (GivenUnit() === '°F' && DesireUnit() === 'Celsius (°C)') {
        let F = degree.value;
        let ans = ((F - 32) * (5 / 9)).toFixed(2);
        answer.innerText = `${ans}°C`;
    }
    // Kelvin to Celcius	°C = K - 273.15
    else if (GivenUnit() === 'K' && DesireUnit() === 'Celsius (°C)') {
        let K = degree.value;
        let ans = (K - 273.15).toFixed(2);
        answer.innerText = `${ans}°C`;
    }
    // Celsius to Kelvin 	K = °C + 273.15
    else if (GivenUnit() === '°C' && DesireUnit() === 'Kelvin') {
        let C = degree.value;
        let ans = ((C + 273.15)).toFixed(2);
        answer.innerText = `${ans} K`;
    }
    // Fahrenheit to Kelvin 	K = (°F - 32)×(5/9) + 273.15
    else if (GivenUnit() === '°F' && DesireUnit() === 'Kelvin') {
        let F = degree.value;
        let ans = ((F - 32)*(5/9) + 273.15).toFixed(2);
        answer.innerText = `${ans} K`;
    }
    // Kelvin to Fahrenheit	F = (K - 273.15 )×(9/5) +32
    else if (GivenUnit() === 'K' && DesireUnit() === 'Fahrenheit (°F)') {
        let K = degree.value;
        let ans = ((K - 273.15 )*(9/5) +32).toFixed(2);
        answer.innerText = `${ans} K`;
    }
    else {
        answer.innerText = degree.value + GivenUnit();
    }
}
