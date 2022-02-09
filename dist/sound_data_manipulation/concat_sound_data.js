"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatSounds = void 0;
function concatSounds(soundData) {
    let length = 0;
    soundData.forEach((a) => (length += a.length));
    const result = new Float32Array(length);
    let previous = 0;
    soundData.forEach((a) => {
        result.set(a, previous);
        previous += a.length;
    });
    return result;
}
exports.concatSounds = concatSounds;
