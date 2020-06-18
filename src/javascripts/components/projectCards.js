import print from '../helpers/utils';
import projects from '../helpers/projectData';

const createProjectCards = () => {
  let domString = '';
  const projectData = projects.getProjects();

  for (let i = 0; i < projectData.length; i += 1) {
    if (projectData[i].available === true) {
      domString += '<div class="projectCards">';
      domString += `<header class="projectTitle"><h4 class="projectTitleHeader">${projectData[i].title}</header>`;
      domString += `<img class="projectScreenShot" rel="project screen shot" src="${projectData[i].screenshot}">`;
      domString += `<p class="projectDescription">${projectData[i].description}</p>`;
      domString += `<p class="techUsed">${projectData[i].technologiesUsed}</p>`;
      domString += `<p class="url">${projectData[i].url}</p>`;
      domString += `<p class="githubUrl">${projectData[i].githubUrl}</p>`;
      domString += '</div>';
    }
  }
  print.printToDom('#projectsPage', domString);
};

export default { createProjectCards };
