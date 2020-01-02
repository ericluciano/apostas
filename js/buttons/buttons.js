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
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;
        font-size:0.875em;
        font-weight:bold;
        background-color:rgba(28, 129, 217, 0.68);
    }
    .btnVerifySequence:hover {
        background-color:rgba(28, 129, 217, 0.58);
    }
  `;
document.head.appendChild(style);

const createButtonVerifySequence = ({ activeId, action, numbers }) => {
    return `<div class="preBtnVerifyResult" class="flex w-100 center">
        <div data-btn-show-result="result-${action}-${activeId}" data-btn-numbers="${numbers}" data-btn-action="${action}" class="btnVerifySequence">verificar </div>
    </div>`;
};

export { createButtonVerifySequence, };