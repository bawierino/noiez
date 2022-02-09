export function generateEmptySoundData(model: {
    durationMs: number;
    sampleRate: number;
}): Float32Array {
    const { durationMs, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples);
}
