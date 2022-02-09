"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSineWaveSoundData = void 0;
const call_frequency_generator_1 = require("./call_frequency_generator");
function generateSineWaveSoundData(model) {
    const { durationMs, frequencyProvider, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples).map((x, i) => {
        return Math.sin(((i * (2 * Math.PI)) / sampleRate) *
            (0, call_frequency_generator_1.callFrequencyProvider)({
                frequencyProvider,
                sampleIndex: i,
                sampleRate,
            }));
    });
}
exports.generateSineWaveSoundData = generateSineWaveSoundData;
