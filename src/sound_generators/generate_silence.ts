import { getDurationInSamples } from "./utils/get_duration_in_samples";

export function generateSilence(model: {
    durationMs: number;
    sampleRate: number;
}): Float32Array {
    const { durationMs, sampleRate } = model;
    return new Float32Array(getDurationInSamples({ durationMs, sampleRate }));
}
