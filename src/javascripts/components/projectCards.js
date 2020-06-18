import print from '../helpers/utils';
import projects from '../helpers/projectData';

const createProjectCards = () => {
  let domString = '';
  const projectData = projects.getProjects();

  for (let i = 0; i < projectData.length; i += 1) {
    if (projects[i].available === true) {
      domString += '<div class="projectCards">';
      domString += `<header class="projectTitle"><h4 class="projectTitleHeader">${projects[i].title}</header>`;
      domString += `<img class="projectScreenShot" rel="project screen shot" src="${projects[i].screenshot}">`;
      domString += `<p class="projectDescription">${projectData[i].description}</p>`;
      domString += `<p class="techUsed">${projects[i].technologiesUsed}</p>`;
      domString += `<p class="url">${projects[i].url}</p>`;
      domString += `<p class="githubUrl">${projects[i].githubUrl}</p>`;
      domString += '</div>';
    }
  }
  print.printToDom('#projectsPage', domString);
};

export default { createProjectCards };
