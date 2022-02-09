"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWhiteNoise = void 0;
function generateWhiteNoise(model) {
    const { durationMs, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples).map((x, i) => {
        return Math.random() - 0.5;
    });
}
exports.generateWhiteNoise = generateWhiteNoise;
