

const backbone = () => {
    const content = document.querySelector('#content');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const name = document.createElement('h1');
    name.classList.add('restaurant-name');
    name.innerHTML = 'Love Recipe';

    const home = document.createElement('div');
    home.classList.add('sidebtn');
    home.setAttribute('id','side-home');
    home.innerHTML = 'Home';

    const about = document.createElement('div');
    about.classList.add('sidebtn');
    about.setAttribute('id','side-about');
    about.innerHTML = 'About Us';

    const menu = document.createElement('div');
    menu.classList.add('sidebtn');
    menu.setAttribute('id','side-menu');
    menu.innerHTML = 'Our Menu';

    sidebar.appendChild(name);
    sidebar.appendChild(home);
    sidebar.appendChild(about);
    sidebar.appendChild(menu);
    content.appendChild(sidebar);
}

export default backbone;