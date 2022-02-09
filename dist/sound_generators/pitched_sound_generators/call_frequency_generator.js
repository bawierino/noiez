"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFrequencyProvider = void 0;
const get_ms_for_sample_1 = require("../../utils/get_ms_for_sample");
function callFrequencyProvider(model) {
    const { frequencyProvider, sampleIndex, sampleRate } = model;
    return frequencyProvider((0, get_ms_for_sample_1.getMsForSampleIndex)({
        sampleRate,
        sampleIndex,
    }));
}
exports.callFrequencyProvider = callFrequencyProvider;
