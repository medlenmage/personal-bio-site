const showBio = () => {
  if (document.getElementById('bioPage').className === 'hideBio') {
    document.getElementById('bioPage').classList.remove('hideBio');
    document.getElementById('techPage').classList.add('hideTech');
    document.getElementById('project-page').classList.add('hideProject');
  }
};

const showTech = () => {
  if (document.getElementById('techPage').className === 'hideTech') {
    document.getElementById('techPage').classList.remove('hideTech');
    document.getElementById('bioPage').classList.add('hideBio');
    document.getElementById('project-page').classList.add('hideProject');
  }
};

const showProject = () => {
  if (document.getElementById('project-page').className === 'hideProject') {
    document.getElementById('project-page').classList.remove('hideProject');
    document.getElementById('bioPage').classList.add('hideBio');
    document.getElementById('techPage').classList.add('hideTech');
  }
};

const navbarEvents = () => {
  $('#aboutMe').click(showBio);
  $('#techUsed').click(showTech);
  $('#projectPage').click(showProject);
};

export default { navbarEvents };
