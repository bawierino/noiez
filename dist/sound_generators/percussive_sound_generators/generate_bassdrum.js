"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSawtoothWave = void 0;
const concat_sounds_1 = require("../../sound_manipulation/concat_sounds");
const get_ms_for_sample_1 = require("../../utils/get_ms_for_sample");
const generate_silence_1 = require("../generate_silence");
const generate_sine_wave_1 = require("../pitched_sound_generators/generate_sine_wave");
function generateSawtoothWave(model) {
    const { durationMs, amplitudeProvider, sampleRate } = model;
    return (0, concat_sounds_1.concatSounds)([
        (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }),
        (0, generate_sine_wave_1.generateSineWave)({
            durationMs: 80,
            frequencyProvider: () => 80,
            sampleRate,
            amplitudeProvider: () => 1,
        }),
    ]).map((x, i) => amplitudeProvider((0, get_ms_for_sample_1.getMsForSampleIndex)({ sampleRate, sampleIndex: i })));
}
exports.generateSawtoothWave = generateSawtoothWave;
