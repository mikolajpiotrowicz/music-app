"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.ModalHandler = function (_a) {
    var renderFn = _a.children, defaultOpen = _a.defaultOpen;
    var _b = react_1.useState(!!defaultOpen), isOpen = _b[0], setOpen = _b[1];
    function openModal() {
        setOpen(true);
    }
    function closeModal() {
        setOpen(false);
    }
    return renderFn({
        isOpen: isOpen,
        openModal: openModal,
        closeModal: closeModal,
    });
};
