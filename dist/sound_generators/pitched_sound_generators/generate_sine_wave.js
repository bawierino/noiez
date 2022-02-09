"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSineWave = void 0;
const generate_silence_1 = require("../generate_silence");
const call_frequency_generator_1 = require("./utils/call_frequency_generator");
function generateSineWave(model) {
    const { durationMs, frequencyProvider, sampleRate } = model;
    return (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }).map((x, i) => Math.sin(((i * (2 * Math.PI)) / sampleRate) *
        (0, call_frequency_generator_1.callFrequencyProvider)({
            frequencyProvider,
            sampleIndex: i,
            sampleRate,
        })));
}
exports.generateSineWave = generateSineWave;
