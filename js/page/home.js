export async function loadHome() {
    const main = document.createElement('main');
    main.style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };
    main.className = 'container my-5';
    main.innerHTML = `
        <section class="text-center">
            <h1 class="display-4 mb-4">Mundane.io</h1>
            <p class="lead">A collection of basic JavaScript projects to help you learn and experiment</p>
            <a href="/projects" class="btn btn-primary btn-lg mt-3" data-link>Explore Projects</a>
        </section>
    `;
    document.getElementById('app').appendChild(main);
}