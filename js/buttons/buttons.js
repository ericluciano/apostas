const createButtonVerifySequence = ({ activeId, action, numbers }) => {
    return `<div class="preBtnVerifyResult" class="flex w-100 center">
        <div class="input-concurso">
            <input type="number" name="concurso" class="concurso-id form-input-inside" data-concurso="result-${action}-${activeId}" />
        </div>
        <div data-btn-show-result="result-${action}-${activeId}" data-btn-numbers="${numbers}" data-btn-action="${action}" class="button btnVerifySequence">verificar</div>
        <div data-btn-show-result="result-${action}-${activeId}" data-btn-numbers="${numbers}" data-btn-action="${action}" class="button btnCloseVerify hide">X</div>
    </div>`;
};

export { createButtonVerifySequence, };