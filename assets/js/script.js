document.querySelector('#button').addEventListener('click', () => {
    let divisor = Number(document.querySelector('input#divisor').value);
    let dividend = Number(document.querySelector('input#dividend').value);

    if (divisor == 0 || dividend == 0) {
        window.alert('Type a valid number');
        return;
    }

    document.querySelector('.division').style.display = 'flex';

    document.querySelector('div#divisor').innerHTML = divisor;
    document.querySelector('div#dividend').innerHTML = dividend;

    let result = dividend / divisor;
    let remainder = dividend % divisor;

    document.querySelector('div#result').innerHTML = parseInt(result);
    document.querySelector('div#remainder').innerHTML = remainder;


    document.querySelector('input#divisor').value = '';
    document.querySelector('input#dividend').value = '';
    document.querySelector('input#divisor').focus();
})