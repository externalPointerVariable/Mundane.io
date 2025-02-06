export function loadFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark text-light py-4 mt-5';
    footer.innerHTML = `
        <div class="container text-center">
            <p>&copy; ${new Date().getFullYear()} mundane.io. All rights reserved.</p>
        </div>
    `;
    document.getElementById('app').appendChild(footer);
}