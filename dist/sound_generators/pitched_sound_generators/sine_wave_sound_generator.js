"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SineWaveSoundGenerator = void 0;
const abstract_sound_generator_1 = require("../abstract_sound_generator");
class SineWaveSoundGenerator extends abstract_sound_generator_1.AbstractSoundGenerator {
    constructor(model) {
        super(model);
    }
    generate(model) {
        const { durationMs, frequencyProvider: frequency } = model;
        const durationSamples = (durationMs / 1000) * this.sampleRate;
        return new Float32Array(durationSamples).map((x, i) => {
            return Math.sin(((i * (2 * Math.PI)) / this.sampleRate) * frequency);
        });
    }
}
exports.SineWaveSoundGenerator = SineWaveSoundGenerator;
