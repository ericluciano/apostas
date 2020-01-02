import { fetchVerifySequence } from '../requests/requests.js';
import { createDraw } from '../draw/createDraw.js';
import { render } from '../render.js';

const initListenerVerifySequence = () => {
    Array.from(document.querySelectorAll('.btnVerifySequence')).forEach((e) => e.addEventListener('click', (evt) => {
        evt.preventDefault();
        
        evt.target.classList.add('loading');

        const id = e.getAttribute('data-btn-show-result');
        const numbers = e.getAttribute('data-btn-numbers');
        const action = e.getAttribute('data-btn-action');

        console.log(id, numbers, action);

        fetchVerifySequence({ id, action, numbers })
        .then(res => res.json())
        .then(response => {
            let toRender = 'Nenhum concurso com a sequência acima teve 13 ou mais acertos.';
            if(response.data.length) {
                let tables = createDraw({ rows: response.data });                
                toRender = tables.split(',').join('');
            }
            render(`#${id}`, toRender);
            evt.target.classList.remove('loading');
        })
        .catch((error) => {
            console.log('initListenerVerifySequence', error);
        });

    }));
}

export { initListenerVerifySequence, };