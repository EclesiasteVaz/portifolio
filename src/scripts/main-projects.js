
async function getProjects() {
    let response = await fetch("https://eclesiastevaz.github.io/api-projects/server.json");
    return await response.json();
}

async function showProjects() {
    let projects = await getProjects();
    const listTag = document.querySelector('.list-cards-project');
    projects.forEach(element => {
        listTag.innerHTML += `
            <div class="card-project" >
                <div class="img">
                <div class="img-card" style="background-image: url('${element.image}');"></div>
                </div>
                <div class="content-card-project">
                    <h2 class="title-card-project">${element.name}</h2>
                    <span class="techs-card-project">Criado com: <span class="tech-name">${element.techs}</span></span>
                    <span class="techs-card-project"> | Plataforma: <span class="tech-name">${element.category}</span></span>
                    <p class="description">
                       ${element.descritpion}
                    </p>
                    <a href="${element.link}" class="btn-link">Visitar projecto</a>
                </div>
            </div>
        `;
    });
}

showProjects();

