document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const displayArea = document.getElementById('displayArea');

    if (userInput && displayArea) {
        userInput.addEventListener('input', (event) => {
            const currentValue = event.target.value;

            const modifiedValue = currentValue.replace(/ /g, '_');

            displayArea.textContent = modifiedValue;
        });
    }
});
