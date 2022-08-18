const withdrawBtn = document.getElementById('withdrawbtn');
withdrawBtn.addEventListener('click', function () {
    const withDraw = inputValue('withdraw');
    const previousBalance = previousValue('withdrawinnertext');
    const balanceValue = previousValue('balanceinnertext');
    if(withDraw > balanceValue){
        alert('You have\'t enough balance to withdraw !!!');
        return false;
    } else {
        const balanceremain = balanceValue - withDraw;
        const finalbalance = previousBalance + withDraw;
        setValue('withdrawinnertext', finalbalance);
        setValue('balanceinnertext', balanceremain);
    }
})
