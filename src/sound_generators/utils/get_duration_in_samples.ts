export function getDurationInSamples(model: {
    durationMs: number;
    sampleRate: number;
}) {
    const { durationMs, sampleRate } = model;
    return (durationMs / 1000) * sampleRate;
}
