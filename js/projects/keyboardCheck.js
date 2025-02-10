export const keyboardCheck = {
    title: 'Keyboard Check🎹',
    code: `
        const keyboardTable = document.querySelector('.keyboardcheck'); // Fixed typo
        document.addEventListener('keydown', (e) => {
            keyboardTable.innerHTML = \`
            <table class="table rounded">
                <thead class="thead-dark">
                    <tr>
                        <th scope = "col">Key</th>
                        <th scope = "col">Code</th>
                        <th scope = "col">Key Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>\${e.key}</td>
                        <td>\${e.code}</td>
                        <td>\${e.keyCode}</td>
                    </tr>
                </tbody>
            </table>
            \`;
        });
    `,
    html: `
    <div class="keyboardcheck alert alert-primary">
        <p class="lead">Press any key on your keyboard to see the magic 🪄</p>
    </div>
    `
}