export async function loadHome() {
    const main = document.createElement('main');
    main.className = 'container my-5';
    main.innerHTML = `
        <section class="text-center">
            <h1 class="display-4 mb-4">Welcome to mundane.io</h1>
            <p class="lead">A collection of basic JavaScript projects to help you learn and experiment</p>
            <a href="/projects" class="btn btn-primary btn-lg mt-3" data-link>Explore Projects</a>
        </section>
    `;
    document.getElementById('app').appendChild(main);
}