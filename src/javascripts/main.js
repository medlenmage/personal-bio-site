import 'bootstrap';
import '../styles/main.scss';
import projectCards from './components/projectCards';
import navbarEvent from './components/navbar';

const init = () => {
  projectCards.createProjectCards();
  navbarEvent.navbarEvents();
};

init();
