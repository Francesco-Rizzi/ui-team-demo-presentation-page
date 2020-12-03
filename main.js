const demoContainer = document.getElementById('demoItemsContent');
const mentionContainer = document.getElementById('mentionItemsContent');
const date = document.getElementById('date');
const externalSvg = `<svg width="18px" height="18px" viewBox="0 0 24 24"><g stroke="#333" class="externalSvg" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline><path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path></g></svg>`;

const render = (items, container) => {

    const renderText = (item) => {
        if (item?.url?.length) {
            return `<a target="_blank" href="${item.url}">${item.title}${externalSvg}</a>`;
        }
        return item.title;
    }

    let html = '';
    items.forEach(item => {
        html+=`<li>
            ${renderText(item)} 
        </li>`;
    });

    if (!items.length) {
        if (container === mentionContainer) {
            document.getElementById('mentionsItems').remove();
        } else {
            html = `<li>Unfornately, at this time there aren't features that can be showed in a live demo.</li>`;
        }
    }

    container.innerHTML = html;
}

render(demoItems, demoContainer);
render(mentionItems, mentionContainer);
date.innerText = new Date().toJSON().slice(0,10).split('-').reverse().join('/');