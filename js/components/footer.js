export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer bg-light text-center text-lg-start';

    const div = document.createElement('div');
    div.className = 'text-center p-3';
    div.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    div.innerHTML = '© 2025 My Static Website';

    footer.appendChild(div);

    document.body.appendChild(footer);
}
