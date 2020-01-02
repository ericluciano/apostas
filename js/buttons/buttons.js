const createButtonVerifySequence = ({ activeId, action, numbers }) => {
    return `<div class="preBtnVerifyResult" class="flex w-100 center">
        <div data-btn-show-result="result-${action}-${activeId}" data-btn-numbers="${numbers}" data-btn-action="${action}" class="btnVerifySequence">verificar</div>
    </div>`;
};

export { createButtonVerifySequence, };