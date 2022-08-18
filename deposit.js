const depositbtn = document.getElementById('depositbtn');
depositbtn.addEventListener('click', function () {
    const depositValue = inputValue('deposit');
    const previousVal = previousValue('depositinnertext');
    const balanceValue = previousValue('balanceinnertext');
    const depositfinal = depositValue + previousVal;
    const balanceFinal = balanceValue + depositValue;
    setValue('depositinnertext', depositfinal);
    setValue('balanceinnertext', balanceFinal)

})
