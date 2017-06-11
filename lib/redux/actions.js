export function updateStore(path, value) {
    let processedValue;

    try {
        processedValue = eval(`(${value})`);
    } catch (e) {
        processedValue = value;
    }

    return {
        type: '@@UPDATE_STORE',
        payload: { path, value: processedValue }
    };
}