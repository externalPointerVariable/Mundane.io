export function loadFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark text-light py-4 mt-5 fixed-bottom';
    footer.innerHTML = `
        <div class="container text-center rounded-top">
            <a href="https://github.com/externalPointerVariable/Mundane.io" class="text-light text-decoration-none text-grey">
                <p><span class="text-warning">mundane.io</span>. Feel free to contribute your project.</p>
            </a>
        </div>
    `;
    document.getElementById('app').appendChild(footer);
}