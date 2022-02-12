"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSnare = void 0;
const adsr_1 = require("../../sound_manipulation/adsr");
const low_pass_filter_1 = require("../../sound_manipulation/low_pass_filter");
const mix_sounds_1 = require("../../sound_manipulation/mix_sounds");
const get_ms_for_sample_1 = require("../../utils/get_ms_for_sample");
const generate_silence_1 = require("../generate_silence");
const generate_white_noise_1 = require("../noise_sound_generators/generate_white_noise");
const generate_sine_wave_1 = require("../pitched_sound_generators/generate_sine_wave");
function generateSnare(model) {
    const { durationMs, amplitudeProvider, sampleRate } = model;
    return (0, mix_sounds_1.mixSounds)([
        (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }),
        (0, generate_sine_wave_1.generateSineWave)({
            durationMs: 62,
            frequencyProvider: (currentTimeMs) => Math.max(150, 20),
            sampleRate,
            amplitudeProvider: (currentTimeMs) => (0, adsr_1.adsr)({
                attack: 2,
                currentTimeMs,
                decay: 50,
                sustain: 0.8,
                release: 10,
            }),
        }),
        (0, low_pass_filter_1.lowPassFilter)({
            cutoffGenerator: (currentTimeMs) => 0.5 - currentTimeMs / 1000,
            sampleRate,
            sound: (0, generate_white_noise_1.generateWhiteNoise)({
                durationMs: 200,
                sampleRate,
                amplitudeProvider: (currentTimeMs) => (0, adsr_1.adsr)({
                    attack: 2,
                    currentTimeMs,
                    decay: 150,
                    sustain: 0.2,
                    release: 10,
                }),
            }),
        }),
    ]).map((x, i) => x *
        amplitudeProvider((0, get_ms_for_sample_1.getMsForSampleIndex)({ sampleRate, sampleIndex: i })));
}
exports.generateSnare = generateSnare;
