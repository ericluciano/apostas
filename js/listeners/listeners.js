import { fetchVerifySequence } from '../requests/requests.js';
import { createDraw } from '../draw/createDraw.js';
import { render } from '../render.js';

const initCloseBtnVerify = (e) => { 
        // handle click
        function handler(evt) {
            evt.preventDefault();            
            const id = evt.target.getAttribute('data-btn-show-result');
            render(`#${id}`, '');
            evt.target.classList.add('hide');
            // remove listener individual
            e.removeEventListener('click', handler, false);
        }

        e.addEventListener('click', handler, false);
}

const initListenerVerifySequence = () => {
    Array.from(document.querySelectorAll('.btnVerifySequence')).forEach((e) => e.addEventListener('click', (evt) => {
        evt.preventDefault();
        
        evt.target.classList.add('loading');

        const id = e.getAttribute('data-btn-show-result');
        const numbers = e.getAttribute('data-btn-numbers');
        const action = e.getAttribute('data-btn-action');
        const concurso = evt.target.parentNode.querySelector(`[data-concurso="${id}"]`).value;

        console.log(id, numbers, action, concurso);

        fetchVerifySequence({ id, action, numbers, concurso })
        .then(res => res.json())
        .then(response => {
            let toRender = 'Nenhum concurso com a sequência acima teve 13 ou mais acertos.';
            if(response.data.length) {
                let tables = createDraw({ rows: response.data });                
                toRender = tables.split(',').join('');
            }
            render(`#${id}`, toRender);
            evt.target.classList.remove('loading');
            evt.target.nextElementSibling.classList.remove('hide');
            initCloseBtnVerify(evt.target.nextElementSibling);
        })
        .catch((error) => {
            console.log('initListenerVerifySequence', error);
        });

    }));
}

export { initListenerVerifySequence, };