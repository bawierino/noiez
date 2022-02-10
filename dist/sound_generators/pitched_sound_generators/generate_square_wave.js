"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSquareWave = void 0;
const generate_silence_1 = require("../generate_silence");
const call_amplitude_provider_1 = require("../utils/call_amplitude_provider");
const call_frequency_provider_1 = require("./utils/call_frequency_provider");
function generateSquareWave(model) {
    const { durationMs, frequencyProvider, sampleRate, amplitudeProvider } = model;
    return (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }).map((x, i) => ((0, call_amplitude_provider_1.callAmplitudeProvider)({
        amplitudeProvider,
        sampleIndex: i,
        sampleRate,
    }) *
        Math.sign(Math.sin((2 *
            Math.PI *
            (0, call_frequency_provider_1.callFrequencyProvider)({
                sampleRate,
                frequencyProvider,
                sampleIndex: i,
            }) *
            i) /
            sampleRate))) /
        3);
}
exports.generateSquareWave = generateSquareWave;
