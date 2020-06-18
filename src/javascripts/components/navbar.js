const showBio = () => {
  // const bioId = document.getElementById('#bioPage');
  // const techId = document.getElementById('#techPage');
  // const projectId = document.getElementById('#projectPage');
  console.error('are we working');
  if (document.getElementById('bioPage').class === 'hideBio') {
    document.getElementById('bioPage').classList.remove('hideBio');
    document.getElementById('bioPage').classList.add('showBio');
  }
};

const navbarEvents = () => {
  $('#aboutMe').click(showBio);
};

export default { navbarEvents };
