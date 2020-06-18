const showBio = () => {
  // const bioId = document.getElementById('#bioPage');
  // const techId = document.getElementById('#techPage');
  // const projectId = document.getElementById('#projectPage');

  if ($('#bioPage').style.display === 'none') {
    $('#bioPage').style.display = 'block';
    $('#techPage').style.display = 'none';
    $('#projectPage').style.display = 'none';
  }
};

const navbarEvents = () => {
  $('#aboutMe').on('click', showBio);
};

export default { navbarEvents };
