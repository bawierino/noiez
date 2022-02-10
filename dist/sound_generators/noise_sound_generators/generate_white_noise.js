"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWhiteNoise = void 0;
const generate_silence_1 = require("../generate_silence");
const call_amplitude_provider_1 = require("../utils/call_amplitude_provider");
function generateWhiteNoise(model) {
    const { durationMs, sampleRate, amplitudeProvider } = model;
    return (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }).map((x, i) => (0, call_amplitude_provider_1.callAmplitudeProvider)({
        amplitudeProvider,
        sampleIndex: i,
        sampleRate,
    }) *
        (Math.random() - 0.5));
}
exports.generateWhiteNoise = generateWhiteNoise;
