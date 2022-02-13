"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKick = void 0;
const adsr_1 = require("../../sound_manipulation/adsr");
const force_sound_length_1 = require("../../sound_manipulation/force_sound_length");
const get_ms_for_sample_1 = require("../../utils/get_ms_for_sample");
const generate_sine_wave_1 = require("../pitched_sound_generators/generate_sine_wave");
function generateKick(model) {
    const { durationMs, amplitudeProvider, sampleRate, decay = 30, tone = 64, attack = 4, } = model;
    const release = 10;
    const sustain = 0.2;
    const kickDuration = attack + decay + release;
    return (0, force_sound_length_1.forceSoundLength)({
        sound: (0, generate_sine_wave_1.generateSineWave)({
            durationMs: kickDuration,
            frequencyProvider: (currentTimeMs) => Math.max(tone - currentTimeMs / 100, 20),
            sampleRate,
            amplitudeProvider: (currentTimeMs) => (0, adsr_1.adsr)({
                attack,
                currentTimeMs,
                decay,
                sustain,
                release,
            }),
        }).map((x, i) => x *
            amplitudeProvider((0, get_ms_for_sample_1.getMsForSampleIndex)({ sampleRate, sampleIndex: i }))),
        sampleRate,
        durationMs,
    });
}
exports.generateKick = generateKick;
