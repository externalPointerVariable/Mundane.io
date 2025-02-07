// js/page/projects.js
export async function loadProjects() {
    const div = document.createElement('div');
    div.className = 'container my-5';
    div.innerHTML = `
        <div class="row">
            <div class="col-md-3">
                <div id="sidebar" class="sticky-top"></div>
            </div>
            <div class="col-md-9">
                <div id="projects-container"></div>
            </div>
        </div>
    `;
    
    document.getElementById('app').appendChild(div);
    
    // Dynamically load projects
    const projectsModule = await import('../projects/index.js');
    const projects = Object.values(projectsModule);
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('projects-container');
    
    projects.forEach((project, index) => {
        const projectName = `Project ${index + 1}`;
        
        // Add to sidebar
        sidebar.innerHTML += `
            <a href="#project-${index}" class="d-block mb-2 text-decoration-none">
                ${project.title}
            </a>
        `;
        
        // Add project card
        const projectCard = document.createElement('div');
        projectCard.className = 'card mb-4 project-card';
        projectCard.id = `project-${index}`;
        projectCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <div class="row g-4">
                    <div class="col-md-6 output-container">
                        ${project.html}
                    </div>
                    <div class="col-md-6 code-container position-relative">
                        <pre><code>${project.code}</code></pre>
                        <button class="btn btn-sm btn-secondary copy-btn">
                            Copy Code
                        </button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(projectCard);
    });

    // Add copy functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.parentElement.querySelector('code').innerText;
            navigator.clipboard.writeText(code);
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy Code', 2000);
        });
    });
}