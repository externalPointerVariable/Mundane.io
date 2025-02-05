import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { loadHomeContent } from './page/home.js';
// Remove this import if it's still present
// import { createSocialLinks } from './components/socials.js';

document.addEventListener("DOMContentLoaded", function() {
    createHeader();
    
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
    document.body.appendChild(contentDiv);
    
    const homeContent = loadHomeContent();
    contentDiv.appendChild(homeContent());
    
    createFooter();
});
