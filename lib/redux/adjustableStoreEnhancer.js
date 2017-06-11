'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = adjustableStoreEnhancer;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function adjustableStoreEnhancer(params) {
    return function (createStore) {
        return function (reducer, preloadedState) {

            var enhancedReducer = function enhancedReducer(state, action) {

                var newState = reducer(state, action);
                var type = action.type,
                    payload = action.payload;


                switch (type) {
                    case '@@UPDATE_STORE':
                        var path = payload.path,
                            value = payload.value;

                        var objToMerge = _lodash2.default.set({}, path, value);
                        return _lodash2.default.merge({}, newState, objToMerge);
                    default:
                        return newState;
                }
            };

            return createStore(enhancedReducer, preloadedState);
        };
    };
}