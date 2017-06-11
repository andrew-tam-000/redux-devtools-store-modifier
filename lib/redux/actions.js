'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateStore = updateStore;
function updateStore(path, value) {
    var processedValue = void 0;

    try {
        processedValue = eval('(' + value + ')');
    } catch (e) {
        processedValue = value;
    }

    return {
        type: '@@UPDATE_STORE',
        payload: { path: path, value: processedValue }
    };
}