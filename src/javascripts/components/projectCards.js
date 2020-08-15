import print from '../helpers/utils';
import projectData from '../helpers/data/projectData';

const createProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        domString += `
          <div class="projectCards">
            <header class="projectTitle"><h4 class="projectTitleHeader">${project.title}</header>
            <img class="projectScreenShot" rel="project screen shot" src="${project.screenshot}">
            <p class="projectDescription">${project.description}</p>
            <p class="techUsed">${project.technologiesUsed}</p>
            <div class="links">
              <a class="url" href="${project.url}">${project.url}</a>
              <a class="githubUrl" href="${project.githubUrl}">${project.githubUrl}</a>
            </div>
          </div>
      `;
      });
      print.printToDom('#projectsPage', domString);
    })
    .catch((err) => console.error('get projects broke', err));
};

export default { createProjectCards };
