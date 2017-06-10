import _ from 'lodash';

export default function adjustableStoreEnhancer(params) {
    return createStore => (reducer, preloadedState) => {

        const enhancedReducer = (state, action) => {

            const newState = reducer(state, action);
            const { type, payload } = action;

            switch (type) {
                case '@@UPDATE_STORE':
                    const { path, value } = payload;
                    const objToMerge = _.set({}, path, value);
                    return _.merge({}, newState, objToMerge);
                default:
                    return newState;
            }
        };

        return createStore(enhancedReducer, preloadedState);

    };
}
