const projects = [
  {
    title: "pet adoption", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is just a class assignment im using for a filler", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/medlenmage/jm-pet-adoption", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/medlenmage/jm-pet-adoption"
  },
  {
    title: "sorting hat", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is just a class assignment im using for a filler", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/medlenmage/sorting-hat", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/medlenmage/sorting-hat"
  },
  {
    title: "product card site", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is just a class assignment im using for a filler", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/medlenmage/product-cards", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/medlenmage/product-cards"
  },

  
   
]

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = () => {
  let domString = '';

    for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += '<div class="projectCards">'
      domString += `<header class="projectTitle"><h4 class="projectTitleHeader">${projects[i].title}</header>`
      domString += `<img class="projectScreenShot" rel="project screen shot" src="${projects[i].screenshot}">`
      domString += `<p class="projectDescription">${projects[i].description}</p>`
      domString += `<p class="techUsed">${projects[i].technologiesUsed}</p>` 
      domString += `<p class="url">${projects[i].url}</p>`
      domString += `<p class="githubUrl">${projects[i].githubUrl}</p>`
      domString += '</div>'  
  }
}
  printToDom('#projectsPage', domString);

}

const init = () => {
  createProjectCards();
}

init();
