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
        <section class="text-center translate-x-6">
            <h1 class="display-1 mb-3 p-5 pb-2 text-warning font-monospace">Mundane.io</h1>
            <p class="blockquote text-white">A collection of basic <kbd class="text-info">JavaScript</kbd> projects to help you learn and experiment</p>
            <a href="/projects" class="btn btn-warning btn-lg mt-3" data-link>Explore Projects</a>
        </section>
    `;
    document.getElementById('app').appendChild(main);
}