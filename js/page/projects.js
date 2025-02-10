export async function loadProjects() {
    const div = document.createElement('div');
    div.className = 'container my-5';
    div.innerHTML = `
        <div class="row">
            <div class="col-md-3">
                <div id="sidebar" class="sticky-top bg-white rounded"></div>
            </div>
            <div class="col-md-9 d-flex justify-content-center">
                <div id="projects-container" class="w-100 pt-0"></div>
            </div>
        </div>
    `;
    document.getElementById('app').appendChild(div);

    // Dynamically load projects
    const projectsModule = await import('../projects/index.js');
    const projects = Object.values(projectsModule);

    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('projects-container');

    const escapeHTML = str => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    projects.forEach((project, index) => {
        const projectName = project.title;

        // Add to sidebar
        const sidebarLink = document.createElement('a');
        sidebarLink.href = `#project-${index}`;
        sidebarLink.className = 'd-block mb-2 text-decoration-none';
        sidebarLink.textContent = projectName;
        sidebarLink.addEventListener('click', (e) => {
            e.preventDefault();
            showProject(index);
        });
        sidebar.appendChild(sidebarLink);

        // Add project card
        const projectCard = document.createElement('div');
        projectCard.className = 'card mb-4 project-card';
        projectCard.id = `project-${index}`;
        projectCard.style.display = 'none';
        projectCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title font-monospace">${project.title}</h5>
                <div class="row g-4">
                    <div class="col-md-6 output-container">
                        ${project.html}
                    </div>
                    <div class="col-md-6 code-container position-relative bg-black">
                        <pre><code class="text-white">
                            --HTML-- <br> ${escapeHTML(project.html)}
                            <hr>
                            --JavaScript-- <br> ${escapeHTML(project.code)}
                        </code></pre>
                        <button class="btn btn-sm btn-secondary copy-btn text-info">
                            <i class="bi bi-copy"></i> Copy Code
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(projectCard);
        if (project.code.trim()) {
            const script = document.createElement('script');
            script.textContent = project.code;
            projectCard.querySelector('.output-container').appendChild(script);
        }
    });

    // Show the first project by default
    showProject(0);

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.parentElement.querySelector('code').innerText;
            navigator.clipboard.writeText(code);
            btn.textContent = 'Copied!';
            setTimeout(() => btn.innerHTML = '<i class="bi bi-copy"></i> Copy Code', 2000);
        });
    });
}

function showProject(index) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, i) => {
        if (i === index) {
            project.style.display = 'block';
            project.classList.add('fade-up-animation');
        } else {
            project.style.display = 'none';
            project.classList.remove('fade-up-animation');
        }
    });
}
