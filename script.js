document.getElementById('tableForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const startMultiplier = parseInt(document.getElementById('startMultiplier').value);
    const endMultiplier = parseInt(document.getElementById('endMultiplier').value);
    const startMultiplicand = parseInt(document.getElementById('startMultiplicand').value);
    const endMultiplicand = parseInt(document.getElementById('endMultiplicand').value);
    
    const errorMessage = document.getElementById('errorMessage');
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    if (isNaN(startMultiplier) || isNaN(endMultiplier) || isNaN(startMultiplicand) || isNaN(endMultiplicand)) {
        errorMessage.textContent = 'Please enter valid numbers.';
        return;
    }

    if (startMultiplier > endMultiplier || startMultiplicand > endMultiplicand) {
        errorMessage.textContent = 'Start value must be less than or equal to end value.';
        return;
    }

    if (startMultiplier < -50 || endMultiplier > 50 || startMultiplicand < -50 || endMultiplicand > 50) {
        errorMessage.textContent = 'Values must be between -50 and 50.';
        return;
    }

    if ((endMultiplier - startMultiplier) * (endMultiplicand - startMultiplicand) > 10000) {
        errorMessage.textContent = 'The range is too large. Please enter a smaller range.';
        return;
    }

    errorMessage.textContent = '';
    const table = document.createElement('table');

    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); // Empty top-left cell

    for (let i = startMultiplier; i <= endMultiplier; i++) {
        const th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = startMultiplicand; i <= endMultiplicand; i++) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = i;
        row.appendChild(th);

        for (let j = startMultiplier; j <= endMultiplier; j++) {
            const td = document.createElement('td');
            td.textContent = i * j;
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
});
