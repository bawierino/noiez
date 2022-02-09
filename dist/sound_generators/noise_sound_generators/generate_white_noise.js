"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWhiteNoise = void 0;
const generate_silence_1 = require("../generate_silence");
function generateWhiteNoise(model) {
    const { durationMs, sampleRate } = model;
    return (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }).map((x, i) => Math.random() - 0.5);
}
exports.generateWhiteNoise = generateWhiteNoise;
