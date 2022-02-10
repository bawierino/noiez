"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAmplitudeProvider = void 0;
const get_ms_for_sample_1 = require("../../utils/get_ms_for_sample");
function callAmplitudeProvider(model) {
    const { amplitudeProvider, sampleIndex, sampleRate } = model;
    return amplitudeProvider((0, get_ms_for_sample_1.getMsForSampleIndex)({
        sampleRate,
        sampleIndex,
    }));
}
exports.callAmplitudeProvider = callAmplitudeProvider;
