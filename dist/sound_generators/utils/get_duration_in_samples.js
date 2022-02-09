"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDurationInSamples = void 0;
function getDurationInSamples(model) {
    const { durationMs, sampleRate } = model;
    return (durationMs / 1000) * sampleRate;
}
exports.getDurationInSamples = getDurationInSamples;
