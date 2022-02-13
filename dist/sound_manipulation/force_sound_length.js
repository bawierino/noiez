"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forceSoundLength = void 0;
const generate_silence_1 = require("../sound_generators/generate_silence");
const get_duration_in_samples_1 = require("../sound_generators/utils/get_duration_in_samples");
const mix_sounds_1 = require("./mix_sounds");
function forceSoundLength(model) {
    const { durationMs, sampleRate, sound } = model;
    const intendedDurationInSamples = (0, get_duration_in_samples_1.getDurationInSamples)({
        durationMs,
        sampleRate,
    });
    const actualDurationInSamples = sound.length;
    if (intendedDurationInSamples === actualDurationInSamples) {
        return new Float32Array(sound);
    }
    else if (intendedDurationInSamples > actualDurationInSamples) {
        return (0, mix_sounds_1.mixSounds)([(0, generate_silence_1.generateSilence)({ durationMs, sampleRate }), sound]);
    }
    else {
        return new Float32Array(sound.slice(0, intendedDurationInSamples));
    }
}
exports.forceSoundLength = forceSoundLength;
