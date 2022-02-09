"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmptySoundData = void 0;
function generateEmptySoundData(model) {
    const { durationMs, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples);
}
exports.generateEmptySoundData = generateEmptySoundData;
