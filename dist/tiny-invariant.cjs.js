'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    throw new Error(prefix + ": " + (message || ''));
}
exports.default = invariant;
