"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowPassFilter = void 0;
const get_ms_for_sample_1 = require("../utils/get_ms_for_sample");
function lowPassFilter(model) {
    const { sound, cutoffGenerator, sampleRate } = model;
    const result = new Float32Array(sound.length);
    sound.forEach((d, i) => {
        var _a;
        const cutoff = cutoffGenerator((0, get_ms_for_sample_1.getMsForSampleIndex)({ sampleRate, sampleIndex: i }));
        result[i] = (1 - cutoff) * ((_a = result === null || result === void 0 ? void 0 : result[i - 1]) !== null && _a !== void 0 ? _a : d) + d * cutoff;
    });
    return result;
}
exports.lowPassFilter = lowPassFilter;
