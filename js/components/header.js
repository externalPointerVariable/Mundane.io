export function createHeader() {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');

    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

    const brand = document.createElement('a');
    brand.className = 'navbar-brand';
    brand.href = '#';
    brand.textContent = 'My Website';

    const button = document.createElement('button');
    button.className = 'navbar-toggler';
    button.type = 'button';
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#navbarNav');
    button.setAttribute('aria-controls', 'navbarNav');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');

    const span = document.createElement('span');
    span.className = 'navbar-toggler-icon';

    button.appendChild(span);

    const div = document.createElement('div');
    div.className = 'collapse navbar-collapse';
    div.id = 'navbarNav';

    const ul = document.createElement('ul');
    ul.className = 'navbar-nav';

    const homeLi = document.createElement('li');
    homeLi.className = 'nav-item';

    const homeLink = document.createElement('a');
    homeLink.className = 'nav-link';
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.onclick = function() { loadContent('home'); };

    homeLi.appendChild(homeLink);

    const aboutLi = document.createElement('li');
    aboutLi.className = 'nav-item';

    const aboutLink = document.createElement('a');
    aboutLink.className = 'nav-link';
    aboutLink.href = '#';
    aboutLink.textContent = 'About';
    aboutLink.onclick = function() { loadContent('about'); };

    aboutLi.appendChild(aboutLink);

    ul.appendChild(homeLi);
    ul.appendChild(aboutLi);
    div.appendChild(ul);

    nav.appendChild(brand);
    nav.appendChild(button);
    nav.appendChild(div);

    header.appendChild(nav);

    document.body.appendChild(header);
}
