"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKick = void 0;
const adsr_1 = require("../../sound_manipulation/adsr");
const mix_sounds_1 = require("../../sound_manipulation/mix_sounds");
const get_ms_for_sample_1 = require("../../utils/get_ms_for_sample");
const generate_silence_1 = require("../generate_silence");
const generate_sine_wave_1 = require("../pitched_sound_generators/generate_sine_wave");
function generateKick(model) {
    const { durationMs, amplitudeProvider, sampleRate } = model;
    return (0, mix_sounds_1.mixSounds)([
        (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }),
        (0, generate_sine_wave_1.generateSineWave)({
            durationMs: 51,
            frequencyProvider: () => 80,
            sampleRate,
            amplitudeProvider: (currentTimeMs) => (0, adsr_1.adsr)({
                attack: 1,
                currentTimeMs,
                decay: 30,
                sustain: 0.8,
                release: 20,
            }),
        }),
    ]).map((x, i) => x *
        amplitudeProvider((0, get_ms_for_sample_1.getMsForSampleIndex)({ sampleRate, sampleIndex: i })));
}
exports.generateKick = generateKick;
