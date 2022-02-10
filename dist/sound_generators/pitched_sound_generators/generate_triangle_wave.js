"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTriangleWave = void 0;
const generate_silence_1 = require("../generate_silence");
const call_amplitude_provider_1 = require("../utils/call_amplitude_provider");
const call_frequency_provider_1 = require("./utils/call_frequency_provider");
function generateTriangleWave(model) {
    const { durationMs, frequencyProvider, amplitudeProvider, sampleRate } = model;
    return (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }).map((x, i) => (0, call_amplitude_provider_1.callAmplitudeProvider)({
        amplitudeProvider,
        sampleIndex: i,
        sampleRate,
    }) *
        Math.asin(Math.sin((2 * Math.PI * i) /
            sampleRate /
            (1 /
                (0, call_frequency_provider_1.callFrequencyProvider)({
                    frequencyProvider,
                    sampleIndex: i,
                    sampleRate,
                })))) *
        2);
}
exports.generateTriangleWave = generateTriangleWave;
