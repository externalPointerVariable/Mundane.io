import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';
import { loadHome } from './page/home.js';
import { loadProjects } from './page/projects.js';

const routes = {
    '#/': loadHome,
    '#/projects': loadProjects
};

async function router() {
    const hash = window.location.hash || '#/';
    const app = document.getElementById('app');
    app.innerHTML = '';
    
    await loadHeader();
    await routes[hash]();
    await loadFooter();
}

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            window.location.hash = href;
        }
    });
    router();
});