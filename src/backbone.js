
const backbone = () => {
    const content = document.querySelector('#content');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const home = document.createElement('div');
    home.classList.add('sidebtn');
    home.setAttribute('id','side-home')

    const about = document.createElement('div');
    about.classList.add('sidebtn');
    about.setAttribute('id','side-about')

    const menu = document.createElement('div');
    menu.classList.add('sidebtn');
    menu.setAttribute('id','side-menu')

    sidebar.appendChild(home);
    sidebar.appendChild(about);
    sidebar.appendChild(menu);
    content.appendChild(sidebar);
}

export default backbone;