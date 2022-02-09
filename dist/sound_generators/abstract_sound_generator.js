"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSoundGenerator = void 0;
class AbstractSoundGenerator {
    constructor(model) {
        const { sampleRate } = model;
        this.sampleRate = sampleRate;
    }
}
exports.AbstractSoundGenerator = AbstractSoundGenerator;
