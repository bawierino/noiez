"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSawtoothWaveSoundData = void 0;
const call_frequency_generator_1 = require("./call_frequency_generator");
function generateSawtoothWaveSoundData(model) {
    const { durationMs, frequencyProvider, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples).map((x, i) => {
        return ((1 / 5) *
            Math.atan(1 /
                Math.tan((Math.PI * i) / sampleRate / (1 / (0, call_frequency_generator_1.callFrequencyProvider)({ frequencyProvider, sampleIndex: i, sampleRate })))));
    });
}
exports.generateSawtoothWaveSoundData = generateSawtoothWaveSoundData;
