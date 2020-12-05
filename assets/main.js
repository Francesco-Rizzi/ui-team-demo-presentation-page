const demoContainer = document.getElementById('demoItemsContent');
const mentionContainer = document.getElementById('mentionItemsContent');
const date = document.getElementById('date');
const externalSvg = `<svg width="18px" height="18px" viewBox="0 0 24 24"><g stroke="#333" class="externalSvg" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline><path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path></g></svg>`;
const animationTime = 1000;

const render = (items, container) => {

    const isMention = container === mentionContainer;

    const renderText = (item) => {
        if (item?.url?.length) {
            return `<a target="_blank" href="${item.url}">${item.title}${externalSvg}</a>`;
        }
        return item.title;
    }

    let html = '';
    items.forEach(item => {
        html+=`<li class="${isMention ? '' : 'toEnter'}">
            ${renderText(item)} 
        </li>`;
    });

    if (!items.length) {
        if (isMention) {
            document.getElementById('mentionsItems').remove();
        } else {
            html = `<li class="toEnter">Unfornately, at this time there aren't features that can be shown in a live demo.</li>`;
        }
    }

    container.innerHTML = html;
}

const animate = () => {

    const opening = document.getElementById('intro');

    opening.addEventListener('click', () => {

        opening.classList.add('fade');

        setTimeout(() => {

            opening.remove();
            document.getElementById('banner').classList.add('entered');

            setTimeout(() => {

                document.getElementById('title').classList.add('entered');
                document.querySelector('#demoItems .subtitle').classList.add('entered');

                setTimeout(() => {

                    document.querySelector('#date').classList.add('entered'); 
                    
                    setTimeout(() => {

                        document.querySelector('#banner').classList.add('showText'); 
                        document.querySelector('#date').classList.add('showText'); 
                        document.getElementById('title').classList.add('showText');
                        document.querySelector('#demoItems .subtitle').classList.add('showText');

                        const elementsToEnter = Array.from(document.querySelectorAll('.toEnter'));
                        elementsToEnter.forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('entered');
                            }, i*animationTime + animationTime);
                        })
                        setTimeout(() => {

                            document.querySelector('.pyro .before').classList.add('fade'); 
                            document.querySelector('.pyro .after').classList.add('fade'); 
                            
                            setTimeout(() => {

                                document.querySelector('.pyro .before').remove(); 
                                document.querySelector('.pyro .after').remove();

                            }, 6000)

                        }, animationTime * elementsToEnter.length)

                    }, animationTime);

                }, animationTime)

            }, animationTime)

        }, animationTime);
    })

}

render(demoItems, demoContainer);
render(mentionItems, mentionContainer);
date.innerText = new Date().toJSON().slice(0,10).split('-').reverse().join('/');
animate();