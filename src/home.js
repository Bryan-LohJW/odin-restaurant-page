import macaroon from './macaroon.jpg';
import clear from './clear';

const homeFunc = () => {
    clear();
    const page = document.querySelector('.page');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = 'Home';

    const innerContent = document.createElement('div');
    innerContent.classList.add('inner-content');
    innerContent.classList.add('home');

    const contentone = document.createElement('div');
    contentone.classList.add('small-content');
    contentone.classList.add('small-content-1');
    const para = document.createElement('p');
    para.innerHTML = 'Welcome to Love LOL, your local pastries baked with love'
    const myMacaroon = new Image();
    myMacaroon.setAttribute('id', 'macaroon');
    myMacaroon.src = macaroon;
    contentone.appendChild(para);
    contentone.appendChild(myMacaroon);

    const contenttwo = document.createElement('div');
    contenttwo.classList.add('small-content');
    contenttwo.classList.add('small-content-2');
    const paraa = document.createElement('p');
    paraa.innerHTML = 'Welcome to Love Recipe, your local pastries baked with love'
    const myMacaroona = new Image();
    myMacaroona.setAttribute('id', 'macaroon');
    myMacaroona.src = macaroon;
    contenttwo.appendChild(paraa);
    contenttwo.appendChild(myMacaroona);

    const contentthree = document.createElement('div');
    contentthree.classList.add('small-content');
    contentthree.classList.add('small-content-3');
    const paraaap = document.createElement('p');
    paraaap.innerHTML = 'Welcome to Love Recipe, your local pastries baked with love'
    const myMacaroonaa = new Image();
    myMacaroonaa.setAttribute('id', 'macaroon');
    myMacaroonaa.src = macaroon;
    contentthree.appendChild(paraaap);
    contentthree.appendChild(myMacaroonaa);

    innerContent.appendChild(contentone);
    innerContent.appendChild(contenttwo);
    innerContent.appendChild(contentthree);
    page.appendChild(title);
    page.appendChild(innerContent);
}

export default homeFunc;