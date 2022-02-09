"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleWaveSoundGenerator = void 0;
const abstract_sound_generator_1 = require("../abstract_sound_generator");
class TriangleWaveSoundGenerator extends abstract_sound_generator_1.AbstractSoundGenerator {
    constructor(model) {
        super(model);
    }
    generate(model) {
        const { durationMs, frequencyProvider: frequencyGenerator } = model;
        const durationSamples = (durationMs / 1000) * this.sampleRate;
        return new Float32Array(durationSamples).map((x, i) => {
            return (Math.asin(Math.sin((2 * Math.PI * i) /
                this.sampleRate /
                (1 / frequencyGenerator()))) * 2);
        });
    }
}
exports.TriangleWaveSoundGenerator = TriangleWaveSoundGenerator;
