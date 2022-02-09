"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteNoiseSoundGenerator = void 0;
const abstract_sound_generator_1 = require("../abstract_sound_generator");
class WhiteNoiseSoundGenerator extends abstract_sound_generator_1.AbstractSoundGenerator {
    constructor(model) {
        super(model);
    }
    generateWhiteNoiseSoundData(model) {
        const { durationMs } = model;
        const durationSamples = (durationMs / 1000) * this.sampleRate;
        return new Float32Array(durationSamples).map((x, i) => {
            return Math.random() - 0.5;
        });
    }
}
exports.WhiteNoiseSoundGenerator = WhiteNoiseSoundGenerator;
