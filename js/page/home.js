
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

    return container;
}

export function loadHomeContent() {
    return homeContent;
}
