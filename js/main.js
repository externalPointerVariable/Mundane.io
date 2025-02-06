import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';
import { loadHome } from './page/home.js';
import { loadProjects } from './page/projects.js';

const routes = {
    '/': loadHome,
    '/projects': loadProjects
};

async function router() {
    const path = window.location.pathname;
    const app = document.getElementById('app');
    app.innerHTML = '';
    
    await loadHeader();
    await routes[path]();
    await loadFooter();
}

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            window.history.pushState(null, null, href);
            router();
        }
    });
    router();
});