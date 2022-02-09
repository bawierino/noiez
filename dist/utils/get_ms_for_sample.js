"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMsForSampleIndex = void 0;
function getMsForSampleIndex(model) {
    const { sampleIndex, sampleRate } = model;
    return (sampleIndex / sampleRate) * 1000;
}
exports.getMsForSampleIndex = getMsForSampleIndex;
