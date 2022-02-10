"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSawtoothWave = void 0;
const generate_silence_1 = require("../generate_silence");
const call_amplitude_provider_1 = require("../utils/call_amplitude_provider");
const call_frequency_provider_1 = require("./utils/call_frequency_provider");
function generateSawtoothWave(model) {
    const { durationMs, frequencyProvider, amplitudeProvider, sampleRate } = model;
    return (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }).map((x, i) => (0, call_amplitude_provider_1.callAmplitudeProvider)({
        amplitudeProvider,
        sampleIndex: i,
        sampleRate,
    }) *
        (1 / 5) *
        Math.atan(1 /
            Math.tan((Math.PI * i) /
                sampleRate /
                (1 /
                    (0, call_frequency_provider_1.callFrequencyProvider)({
                        frequencyProvider,
                        sampleIndex: i,
                        sampleRate,
                    })))));
}
exports.generateSawtoothWave = generateSawtoothWave;
