"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSilence = void 0;
const get_duration_in_samples_1 = require("./utils/get_duration_in_samples");
function generateSilence(model) {
    const { durationMs, sampleRate } = model;
    return new Float32Array((0, get_duration_in_samples_1.getDurationInSamples)({ durationMs, sampleRate }));
}
exports.generateSilence = generateSilence;
