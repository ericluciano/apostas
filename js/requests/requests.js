import { render } from '../render.js';

const API = `${window.location.href}api`;

const fetchVerifySequence = ({ id, action, numbers, concurso }) => {
    
    const URL = `${API}/checkNumbers.php`;

    return fetch(URL, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action, 
                numbers,
                concurso
            })
        });
        
};

const fetchApiNumbers = ({ action, limitView }) => {

    render(action, 'carregando...');

    const URL = `${API}/${action}.php`;

    return fetch(URL, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            limitView,
        })
    });
};

export { fetchVerifySequence, fetchApiNumbers };