import homeFunc from './home';
import aboutFunc from './about';

const backbone = () => {
    const content = document.querySelector('#content');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const sidebarWrapper = document.createElement('div');
    sidebarWrapper.classList.add('sidebar-wrapper');

    const name = document.createElement('h1');
    name.classList.add('restaurant-name');
    name.innerHTML = 'Love Recipe';

    const home = document.createElement('div');
    home.classList.add('sidebtn');
    home.setAttribute('id','side-home');
    home.innerHTML = 'Home';
    home.onclick = homeFunc;

    const about = document.createElement('div');
    about.classList.add('sidebtn');
    about.setAttribute('id','side-about');
    about.innerHTML = 'About Us';
    about.onclick = aboutFunc;

    const menu = document.createElement('div');
    menu.classList.add('sidebtn');
    menu.setAttribute('id','side-menu');
    menu.innerHTML = 'Our Menu';

    const page = document.createElement('div');
    page.classList.add('page');


    sidebarWrapper.appendChild(name);
    sidebarWrapper.appendChild(home);
    sidebarWrapper.appendChild(about);
    sidebarWrapper.appendChild(menu);
    sidebar.appendChild(sidebarWrapper);
    content.appendChild(sidebar);
    content.appendChild(page);
}

export default backbone;