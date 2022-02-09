export function getMsForSampleIndex(model: {
    sampleRate: number;
    sampleIndex: number;
}): number {
    const { sampleIndex, sampleRate } = model;
    return (sampleIndex / sampleRate) * 1000;
}
