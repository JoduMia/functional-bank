function previousValue(elementId) {
    const previous = document.getElementById(elementId);
    const previousTextValue = parseFloat(previous.innerText);
    return previousTextValue;
}

function inputValue(elementId) {
    const input = document.getElementById(elementId);
    let inputValue = input.value;
    console.log(inputValue);
    if(inputValue == ''){
        alert('Empty field is denied !!!');
        return '';
    } else if(inputValue<=0){
        alert('Invalid number is denied. Please input a valid number.');
        input.value = '';
        return 0;
    } else {
        let inputValueNum = parseFloat(inputValue);
        input.value = '';
        return inputValueNum;
    }
}

function setValue(elementId, value) {
    const setPlace = document.getElementById(elementId);
    setPlace.innerText = value;
}