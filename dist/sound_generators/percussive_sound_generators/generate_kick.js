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
    const attack = 1;
    const decay = 30;
    const release = 20;
    const sustain = 0.8;
    const kickDuration = attack + decay + release;
    return (0, mix_sounds_1.mixSounds)([
        (0, generate_silence_1.generateSilence)({ durationMs, sampleRate }),
        (0, generate_sine_wave_1.generateSineWave)({
            durationMs: kickDuration,
            frequencyProvider: () => 80,
            sampleRate,
            amplitudeProvider: (currentTimeMs) => (0, adsr_1.adsr)({
                attack,
                currentTimeMs,
                decay,
                sustain,
                release,
            }),
        }),
    ]).map((x, i) => x *
        amplitudeProvider((0, get_ms_for_sample_1.getMsForSampleIndex)({ sampleRate, sampleIndex: i })));
}
exports.generateKick = generateKick;
