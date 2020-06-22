const showBio = () => {
  if (document.getElementById('bioPage').className === 'hide') {
    document.getElementById('bioPage').classList.remove('hide');
    document.getElementById('techPage').classList.add('hide');
    document.getElementById('project-page').classList.add('hide');
    document.getElementById('heroImg').classList.add('hide');
  }
};

const showTech = () => {
  if (document.getElementById('techPage').className === 'hide') {
    document.getElementById('techPage').classList.remove('hide');
    document.getElementById('bioPage').classList.add('hide');
    document.getElementById('project-page').classList.add('hide');
    document.getElementById('heroImg').classList.add('hide');
  }
};

const showProject = () => {
  if (document.getElementById('project-page').className === 'hide') {
    document.getElementById('project-page').classList.remove('hide');
    document.getElementById('bioPage').classList.add('hide');
    document.getElementById('techPage').classList.add('hide');
    document.getElementById('heroImg').classList.add('hide');
  }
};

const navbarEvents = () => {
  $('#aboutMe').click(showBio);
  $('#techUsed').click(showTech);
  $('#projectPage').click(showProject);
};

export default { navbarEvents };
