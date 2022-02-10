"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixSounds = void 0;
function mixSounds(sounds) {
    const result = new Float32Array(Math.max(...sounds.map((a) => a.length)));
    result.forEach((x, i, result) => {
        const sum = sounds.map((a) => { var _a; return (_a = a === null || a === void 0 ? void 0 : a[i]) !== null && _a !== void 0 ? _a : 0; }).reduce((p, c) => p + c, 0);
        result[i] = sum;
    });
    return result;
}
exports.mixSounds = mixSounds;
