
const createSocialLinks = function() {
    const socialContainer = document.createElement('div');
    socialContainer.className = 'd-flex justify-content-center mt-3';

    const socials = [
        { name: 'Github', icon: 'bi-github', url: 'https://github.com' },
        { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com' },
        { name: 'X', icon: 'bi-twitter', url: 'https://www.twitter.com' } // Assuming 'X' refers to Twitter
    ];

    socials.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'text-dark mx-3';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Follow us on ${social.name}`);

        const icon = document.createElement('i');
        icon.className = `bi ${social.icon} display-6`;

        link.appendChild(icon);
        socialContainer.appendChild(link);
    });

    return socialContainer;
}


const homeContent = function() {
    const container = document.createElement('div');
    container.className = 'container text-center mt-5';

    const heading = document.createElement('h1');
    heading.textContent = 'Mundane.io';
    heading.className = 'display-4';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to Mundane.io, the place to find mundane codes for JavaScript';
    paragraph.className = 'lead';

    const socialHeading = document.createElement('h2');
    socialHeading.textContent = 'Follow Us';
    socialHeading.className = 'mt-5';

    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(socialHeading);
    container.appendChild(createSocialLinks());

    return container;
}

export function loadHomeContent() {
    return homeContent;
}
