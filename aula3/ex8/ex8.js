document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    const number = parseInt(numberInput);

    if (isNaN(number) || number < 0 || number > 100) {
        resultElement.textContent = 'Por favor, insira um número entre 0 e 100.';
        return;
    }

    if (isPrime(number)) {
        resultElement.textContent = `${number} é um número primo.`;
    } else {
        resultElement.textContent = `${number} não é um número primo.`;
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
