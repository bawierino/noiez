import { getMsForSampleIndex } from "../utils/get_ms_for_sample";

export function lowPassFilter(model: {
    sound: Float32Array;
    cutoffGenerator(currentTimeMs: number): number;
    sampleRate: number;
}): Float32Array {
    const { sound, cutoffGenerator, sampleRate } = model;
    const result = new Float32Array(sound.length);

    sound.forEach((d, i) => {
        const cutoff = Math.max(
            cutoffGenerator(
                getMsForSampleIndex({ sampleRate, sampleIndex: i })
            ),
            0
        );
        result[i] = (1 - cutoff) * (result?.[i - 1] ?? d) + d * cutoff;
    });

    return result;
}
