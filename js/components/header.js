// js/components/header.js
export function loadHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#/" data-link>mundane.io</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#/" data-link>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/projects" data-link>Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('app').appendChild(header);
}