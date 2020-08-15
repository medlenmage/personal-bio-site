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
            <a class="url" href="${project.url}">${project.url}</a>
            <a class="githubUrl" href="${project.githubUrl}">${project.githubUrl}</a>
          </div>
      `;
      });
      print.printToDom('#projectsPage', domString);
    })
    .catch((err) => console.error('get projects broke', err));
};

// const createProjectCards = () => {
//   let domString = '';
//   // const projectData = projects.getProjects();
//   const projectData = axios.get(`${baseUrl}/projects.json}`);
//   projectData();

//   for (let i = 0; i < projectData.length; i += 1) {
//     if (projectData[i].available === true) {
//       domString += '<div class="projectCards">';
//       domString += `<header class="projectTitle"><h4 class="projectTitleHeader">${projectData[i].title}</header>`;
//       domString += `<img class="projectScreenShot" rel="project screen shot" src="${projectData[i].screenshot}">`;
//       domString += `<p class="projectDescription">${projectData[i].description}</p>`;
//       domString += `<p class="techUsed">${projectData[i].technologiesUsed}</p>`;
//       domString += `<p class="url">${projectData[i].url}</p>`;
//       domString += `<p class="githubUrl">${projectData[i].githubUrl}</p>`;
//       domString += '</div>';
//     }
//   }
//   print.printToDom('#projectsPage', domString);
// };

export default { createProjectCards };
