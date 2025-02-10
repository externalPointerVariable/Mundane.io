export const keyboardCheck = {
    title: 'Keyboard Check🎹',
    code: `
        const keyboardTable = document.querySelector('.keyboardcheck');
        
        // Create the table structure
        keyboardTable.innerHTML = \`
        <table class="table rounded">
            <thead class="thead-dark">
                <tr>
                    <th>Key</th>
                    <th>Code</th>
                    <th>Key Code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="key-cell"></td>
                    <td class="code-cell"></td>
                    <td class="key-code-cell"></td>
                </tr>
            </tbody>
        </table>
        \`;

        document.addEventListener('keydown', (e) => {
            const keyCell = keyboardTable.querySelector('.key-cell');
            const codeCell = keyboardTable.querySelector('.code-cell');
            const keyCodeCell = keyboardTable.querySelector('.key-code-cell');

            keyCell.textContent = e.key;
            codeCell.textContent = e.code;
            keyCodeCell.textContent = e.keyCode;
        });
    `,
    html: `
    <div class="keyboardcheck alert alert-primary">
        <p class="lead">Press any key on your keyboard to see the magic 🪄</p>
    </div>
    `
};
