/**
 * define styles
 */
const style = document.createElement('style');
  style.innerHTML = `
    .preBtnVerifyResult {
        margin: 20px 0px 20px;
    }
    .btnVerifySequence {
        max-width: 300px;
        border: 1px solid #c4c4c4;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
    }
    .btnVerifySequence:hover {
        background-color: #f4f4f4;
    }
  `;
document.head.appendChild(style);

const createButtonVerifySequence = ({ activeId, action, numbers }) => {
    return `<div class="preBtnVerifyResult" class="flex w-100 center">
        <div data-btn-show-result="result-${action}-${activeId}" data-btn-numbers="${numbers}" data-btn-action="${action}" class="btnVerifySequence">verificar sequência</div>
    </div>`;
};

export { createButtonVerifySequence, };