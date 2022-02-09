"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTriangleWave = void 0;
const call_frequency_generator_1 = require("./utils/call_frequency_generator");
function generateTriangleWave(model) {
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
exports.generateTriangleWave = generateTriangleWave;
