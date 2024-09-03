function classificarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Os lados devem ser valores positivos.');
        return;
    }

    let tipo;
    if (lado1 === lado2 && lado2 === lado3) {
        tipo = 'Equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        tipo = 'Isósceles';
    } else {
        tipo = 'Escaleno';
    }

    document.getElementById('tipo-triangulo').innerText = `O triângulo é ${tipo}.`;
}
