import { fetchVerifySequence } from '../requests/requests.js';
import tableResultVerifySequence from '../table/tableResultVerifySequence.js';
import { render } from '../render.js';

const initListenerVerifySequence = () => {
    Array.from(document.querySelectorAll('.btnVerifySequence')).forEach((e) => e.addEventListener('click', (evt) => {
        evt.preventDefault();

        const id = e.getAttribute('data-btn-show-result');
        const numbers = e.getAttribute('data-btn-numbers');
        const action = e.getAttribute('data-btn-action');

        console.log(id, numbers, action);

        fetchVerifySequence({ id, action, numbers })
        .then(res => res.json())
        .then(response => {
            let tables = tableResultVerifySequence({ rows: response.data });
            render(`#${id}`, tables);
        })
        .catch((error) => {
            console.log('initListenerVerifySequence', error);
        });

    }));
}

export { initListenerVerifySequence, };