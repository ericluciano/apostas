const render = (id, text) => {
    console.log('RENDER: ', id);
    const element = document.querySelector(`${id}`);
    if(element) {
        element.innerHTML = text;
    }                
}

export { render };