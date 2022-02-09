"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTriangleWaveSoundData = void 0;
const call_frequency_generator_1 = require("./call_frequency_generator");
function generateTriangleWaveSoundData(model) {
    const { durationMs, frequencyProvider, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples).map((x, i) => {
        return (Math.asin(Math.sin((2 * Math.PI * i) /
            sampleRate /
            (1 /
                (0, call_frequency_generator_1.callFrequencyProvider)({
                    frequencyProvider,
                    sampleIndex: i,
                    sampleRate,
                })))) * 2);
    });
}
exports.generateTriangleWaveSoundData = generateTriangleWaveSoundData;
