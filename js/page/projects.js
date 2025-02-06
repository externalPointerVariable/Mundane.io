export async function loadProjects() {
    const main = document.createElement('main');
    main.className = 'container my-5';
    main.innerHTML = `
        <div class="row">
            <div class="col-md-3">
                <div id="sidebar" class="sticky-top"></div>
            </div>
            <div class="col-md-9">
                <div id="projects-container"></div>
            </div>
        </div>
    `;
    
    document.getElementById('app').appendChild(main);
    
    // Dynamically load projects
    const projects = await import('../../js/projects/');
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('projects-container');
    
    Object.entries(projects).forEach(([name, project], index) => {
        // Add to sidebar
        sidebar.innerHTML += `
            <a href="#project-${index}" class="d-block mb-2 text-decoration-none">
                ${name}
            </a>
        `;
        
        // Add project card
        const projectCard = document.createElement('div');
        projectCard.className = 'card mb-4 project-card';
        projectCard.id = `project-${index}`;
        projectCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
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