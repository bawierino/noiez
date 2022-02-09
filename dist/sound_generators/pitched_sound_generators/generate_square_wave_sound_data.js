"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSquareWaveSoundData = void 0;
const generate_empty_sound_data_1 = require("../../utils/generate_empty_sound_data");
const call_frequency_generator_1 = require("./call_frequency_generator");
function generateSquareWaveSoundData(model) {
    const { durationMs, frequencyProvider, sampleRate } = model;
    return (0, generate_empty_sound_data_1.generateEmptySoundData)({ durationMs, sampleRate }).map((x, i) => Math.sign(Math.sin((2 *
        Math.PI *
        (0, call_frequency_generator_1.callFrequencyProvider)({
            sampleRate,
            frequencyProvider,
            sampleIndex: i,
        }) *
        i) /
        sampleRate)) / 3);
}
exports.generateSquareWaveSoundData = generateSquareWaveSoundData;
