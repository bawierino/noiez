"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSquareWave = void 0;
const generate_silence_1 = require("../generate_silence");
const call_frequency_generator_1 = require("./utils/call_frequency_generator");
function generateSquareWave(model) {
    const { durationMs, frequencyProvider, sampleRate } = model;
    return (0, generate_silence_1.generateEmptySoundData)({ durationMs, sampleRate }).map((x, i) => Math.sign(Math.sin((2 *
        Math.PI *
        (0, call_frequency_generator_1.callFrequencyProvider)({
            sampleRate,
            frequencyProvider,
            sampleIndex: i,
        }) *
        i) /
        sampleRate)) / 3);
}
exports.generateSquareWave = generateSquareWave;
