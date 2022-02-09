"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSawtoothWave = void 0;
const generate_silence_1 = require("../generate_silence");
const call_frequency_generator_1 = require("./utils/call_frequency_generator");
function generateSawtoothWave(model) {
    const { durationMs, frequencyProvider, sampleRate } = model;
    return (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }).map((x, i) => (1 / 5) *
        Math.atan(1 /
            Math.tan((Math.PI * i) /
                sampleRate /
                (1 /
                    (0, call_frequency_generator_1.callFrequencyProvider)({
                        frequencyProvider,
                        sampleIndex: i,
                        sampleRate,
                    })))));
}
exports.generateSawtoothWave = generateSawtoothWave;
