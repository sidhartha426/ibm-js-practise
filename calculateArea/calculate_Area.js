function calculateArea() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);

    document.getElementById('result').textContent = `The area of the rectangle is: ${length * width}`;
}